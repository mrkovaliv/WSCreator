import React, { useState } from "react";
import * as R from "ramda";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setValues } from "../../redux/work/actions";
import { selectWorkValues } from "../../redux/work/selectors";

import TeamItem from "./WorkItem";

import {
  Wrapper,
  StyledTeamList,
  StyledAddNewButton,
} from "./WorksBlock.style";

const BrandsBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const work = useSelector(selectWorkValues);

  const [color, setColor] = useState(work.color);
  const [backgroundColor, setBackgroundColor] = useState(work.backgroundColor);
  const [headerTitle, setHeaderTitle] = useState(work.headerTitle);
  const [dataList, setDataList] = useState(work.data || []);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        headerTitle,
        data: dataList,
      })
    );
    history.push("/brands");
  };

  const handleAddNewTeamItem = () => {
    setDataList([...dataList, { id: Date.now() }]);
  };

  const removeItem = (id) => {
    const newTeamList = R.filter(
      R.compose(R.not, R.propEq("id", id)),
      dataList
    );

    setDataList(newTeamList);
  };

  const saveItem = (id, item) => {
    const newList = R.map((teamItem) => {
      if (teamItem.id === id) {
        return { ...teamItem, ...item };
      }

      return teamItem;
    }, dataList);

    setDataList(newList);
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
            placeholder: "Наші роботи",
            value: headerTitle,
            onChange: (e) => setHeaderTitle(e.target.value),
          }}
          label="Заголовок всього блоку"
        />
        <StyledTeamList>
          {dataList.map((item) => (
            <TeamItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              saveItem={saveItem}
            />
          ))}
        </StyledTeamList>
        <StyledAddNewButton onClick={handleAddNewTeamItem}>
          Додати роботу
        </StyledAddNewButton>
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default BrandsBlock;
