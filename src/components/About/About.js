import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";
import TextArea from "../TextArea";

import { setValues } from "../../redux/about/actions";
import { selectAboutValues } from "../../redux/about/selectors";

import { Wrapper } from "./About.style";

const About = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const about = useSelector(selectAboutValues);

  const [color, setColor] = useState(about.color);
  const [backgroundColor, setBackgroundColor] = useState(
    about.backgroundColor
  );
  const [headerTitle, setHeaderTitle] = useState(about.headerTitle);
  const [title, setTitle] = useState(about.title);
  const [description, setDescription] = useState(about.description);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        headerTitle,
        title,
        description,
      })
    );
    history.push("/team");
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
            placeholder: "Про нас",
            value: headerTitle,
            onChange: (e) => setHeaderTitle(e.target.value),
          }}
          label="Заголовок всього блоку"
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

export default About;
