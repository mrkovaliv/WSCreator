import React, { useState } from "react";
import * as R from "ramda";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setValues } from "../../redux/service/actions";
import { selectServiceValues } from "../../redux/service/selectors";

import TeamItem from "./ServiceItem";

import {
  Wrapper,
  StyledTeamList,
  StyledAddNewButton,
} from "./ServicesBlock.style";

const ServicesBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const service = useSelector(selectServiceValues);

  const [color, setColor] = useState(service.color);
  const [backgroundColor, setBackgroundColor] = useState(service.backgroundColor);
  const [headerTitle, setHeaderTitle] = useState(service.headerTitle);
  const [dataList, setDataList] = useState(service.data || []);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        headerTitle,
        data: dataList,
      })
    );
    history.push("/works");
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
            placeholder: "Наші послуги",
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
          Додати послугу
        </StyledAddNewButton>
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default ServicesBlock;
