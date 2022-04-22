import React, { useState } from "react";
import { Space } from "antd";

import Input from "../../Input";
import TextArea from "../../TextArea";

import {
  Wrapper,
  RemoveButton,
  StyledButtons,
  StyledButton,
} from "./ReviewItem.style";

const ReviewItem = ({ item, saveItem, removeItem }) => {
  const [name, setName] = useState(item.name);
  const [color, setColor] = useState(item.color);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    saveItem(item.id, {
      name,
      description,
    });
  };

  return (
    <Wrapper>
      <Space direction="vertical">
        <Input
          inputProps={{
            placeholder: "#1b1f20",
            value: color,
            onChange: (e) => setColor(e.target.value),
          }}
          label="Колір відгука"
        />
        <Input
          inputProps={{
            placeholder: "Норберт",
            value: name,
            onChange: (e) => setName(e.target.value),
          }}
          label="Ім'я"
        />
        <TextArea
          textAreaProps={{
            placeholder: "деякий текст...",
            value: description,
            rows: 8,
            onChange: (e) => setDescription(e.target.value),
          }}
          label="Відгук"
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

export default ReviewItem;
