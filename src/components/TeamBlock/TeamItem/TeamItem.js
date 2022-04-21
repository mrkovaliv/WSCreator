import React, { useState } from "react";
import { Space } from "antd";

import Input from "../../Input";
import TextArea from "../../TextArea";

import {
  Wrapper,
  RemoveButton,
  StyledButtons,
  StyledButton,
} from "./TeamItem.style";

const TeamItem = ({ item, saveItem, removeItem }) => {
  const [color, setColor] = useState(item.color);
  const [img, setImg] = useState(item.img);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    saveItem({
      color,
      img,
      name,
      description,
    });
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
          label="Колір картки"
        />
        <Input
          inputProps={{
            placeholder: "https://image.png",
            value: img,
            onChange: (e) => setImg(e.target.value),
          }}
          label="Аватар працівника"
        />
        <Input
          inputProps={{
            placeholder: "Фотограф",
            value: name,
            onChange: (e) => setName(e.target.value),
          }}
          label="Посада в компанії"
        />
        <TextArea
          textAreaProps={{
            placeholder: "деякий текст...",
            value: description,
            rows: 8,
            onChange: (e) => setDescription(e.target.value),
          }}
          label="Опис"
        />
      </Space>
      <StyledButtons>
        <StyledButton onClick={handleSave}>Зберегти</StyledButton>
        <RemoveButton onClick={() => removeItem(item.id)}>
          Видалити
        </RemoveButton>
      </StyledButtons>
    </Wrapper>
  );
};

export default TeamItem;
