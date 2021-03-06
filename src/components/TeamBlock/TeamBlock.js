import React, { useState } from "react";
import * as R from "ramda";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setValues } from "../../redux/team/actions";
import { selectTeamValues } from "../../redux/team/selectors";

import TeamItem from "./TeamItem";

import { Wrapper, StyledTeamList, StyledAddNewButton } from "./TeamBlock.style";

const TeamBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const team = useSelector(selectTeamValues);

  const [color, setColor] = useState(team.color);
  const [backgroundColor, setBackgroundColor] = useState(team.backgroundColor);
  const [headerTitle, setHeaderTitle] = useState(team.headerTitle);
  const [teamList, setTeamList] = useState(team.data || []);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        headerTitle,
        data: teamList,
      })
    );
    history.push("/services");
  };

  const handleAddNewTeamItem = () => {
    setTeamList([...teamList, { id: Date.now() }]);
  };

  const removeItem = (id) => {
    const newTeamList = R.filter(
      R.compose(R.not, R.propEq("id", id)),
      teamList
    );

    setTeamList(newTeamList);
  };

  const saveItem = (id, item) => {
    const newList = R.map((teamItem) => {
      if (teamItem.id === id) {
        return { ...teamItem, ...item };
      }

      return teamItem;
    }, teamList);

    setTeamList(newList);
  };

  return (
    <Wrapper>
      <Space direction="vertical">
        <Input
          inputProps={{
            placeholder: "#fff",
            value: color,
            onChange: (e) => setColor(e.target.value),
          }}
          label="Колір тексту"
        />
        <Input
          inputProps={{
            placeholder: "#000",
            value: backgroundColor,
            onChange: (e) => setBackgroundColor(e.target.value),
          }}
          label="Колір бекграунда"
        />
        <Input
          inputProps={{
            placeholder: "Наша команда",
            value: headerTitle,
            onChange: (e) => setHeaderTitle(e.target.value),
          }}
          label="Заголовок всього блоку"
        />
        <StyledTeamList>
          {teamList.map((item) => (
            <TeamItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              saveItem={saveItem}
            />
          ))}
        </StyledTeamList>
        <StyledAddNewButton onClick={handleAddNewTeamItem}>
          Додати працівника
        </StyledAddNewButton>
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default TeamBlock;
