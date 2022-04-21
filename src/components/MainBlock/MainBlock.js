import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";
import TextArea from "../TextArea";

import { setValues } from "../../redux/main/actions";
import { selectMainValues } from "../../redux/main/selectors";

import { Wrapper } from "./MainBlock.style";

const MainBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const main = useSelector(selectMainValues);

  const [color, setColor] = useState(main.color);
  const [backgroundColor, setBackgroundColor] = useState(
    main.backgroundColor
  );
  const [backgroundImage, setBackgroundImage] = useState(main.backgroundImage);
  const [title, setTitle] = useState(main.title);
  const [description, setDescription] = useState(main.description);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        backgroundImage,
        title,
        description,
      })
    );
    history.push("/about");
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
            placeholder: "https://emilydenisephotography.png",
            value: backgroundImage,
            onChange: (e) => setBackgroundImage(e.target.value),
          }}
          label="Задній фон (зображення)"
        />
        <Input
          inputProps={{
            placeholder: "Lion Production",
            value: title,
            onChange: (e) => setTitle(e.target.value),
          }}
          label="Заголовок"
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
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default MainBlock;
