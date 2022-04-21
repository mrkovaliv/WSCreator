import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setHeaderValues } from "../../redux/header/actions";
import { selectHeaderValues } from "../../redux/header/selectors";

import { Wrapper } from "./HeaderBlock.style";

const HeaderBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const header = useSelector(selectHeaderValues);

  const [color, setColor] = useState(header.color);
  const [backgroundColor, setBackgroundColor] = useState(
    header.backgroundColor
  );
  const [email, setEmail] = useState(header.email);
  const [phone, setPhone] = useState(header.phone);
  const [instagram, setInstagram] = useState(header.instagram);
  const [facebook, setFacebook] = useState(header.facebook);
  const [telegram, setTelegram] = useState(header.telegram);

  const handleSave = () => {
    dispatch(
      setHeaderValues({
        color,
        backgroundColor,
        email,
        phone,
        instagram,
        facebook,
        telegram,
      })
    );
    history.push("/main");
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
            placeholder: "kovaliv@gmail.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
          label="Eлектронна адреса"
        />
        <Input
          inputProps={{
            placeholder: "+380938160837",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
          }}
          label="Номер телефону"
        />
        <Input
          inputProps={{
            placeholder: "https://www.instagram.com/aleksey_durnev",
            value: instagram,
            onChange: (e) => setInstagram(e.target.value),
          }}
          label="Інстаграм"
        />
        <Input
          inputProps={{
            placeholder: "https://www.facebook.com/a.durnev",
            value: facebook,
            onChange: (e) => setFacebook(e.target.value),
          }}
          label="Фейсбук"
        />
        <Input
          inputProps={{
            placeholder: "https://t.me/durnevportitvse",
            value: telegram,
            onChange: (e) => setTelegram(e.target.value),
          }}
          label="Телеграм"
        />
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default HeaderBlock;
