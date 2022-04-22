import React, { useState } from "react";
import { Space } from "antd";

import Input from "../../Input";
import TextArea from "../../TextArea";

import {
  Wrapper,
  RemoveButton,
  StyledButtons,
  StyledButton,
} from "./ServiceItem.style";

const ServiceItem = ({ item, saveItem, removeItem }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    saveItem(item.id, {
      title,
      description,
    });
  };

  return (
    <Wrapper>
      <Space direction="vertical">
        <Input
          inputProps={{
            placeholder: "ЗЙОМКА ПОРТФОЛІО",
            value: title,
            onChange: (e) => setTitle(e.target.value),
          }}
          label="Назва послуги"
        />
        <TextArea
          textAreaProps={{
            placeholder: "деякий текст...",
            value: description,
            rows: 8,
            onChange: (e) => setDescription(e.target.value),
          }}
          label="Опис послуги"
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

export default ServiceItem;
