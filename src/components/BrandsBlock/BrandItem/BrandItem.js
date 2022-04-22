import React, { useState } from "react";
import { Space } from "antd";

import Input from "../../Input";

import {
  Wrapper,
  RemoveButton,
  StyledButtons,
  StyledButton,
} from "./BrandItem.style";

const BrandItem = ({ item, saveItem, removeItem }) => {
  const [img, setImg] = useState(item.img);

  const handleSave = () => {
    saveItem(item.id, {
      img,
    });
  };

  return (
    <Wrapper>
      <Space direction="vertical">
        <Input
          inputProps={{
            placeholder: "https://upload.wiki.png",
            value: img,
            onChange: (e) => setImg(e.target.value),
          }}
          label="Логотип"
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

export default BrandItem;
