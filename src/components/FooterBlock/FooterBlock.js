import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setValues } from "../../redux/footer/actions";
import { selectFooterValues } from "../../redux/footer/selectors";

import { Wrapper } from "./FooterBlock.style";

const FooterBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const footer = useSelector(selectFooterValues);

  const [color, setColor] = useState(footer.color);
  const [email, setEmail] = useState(footer.email);
  const [phone, setPhone] = useState(footer.phone);
  const [address, setAddress] = useState(footer.address);
  const [from, setFrom] = useState(footer.from);
  const [to, setTo] = useState(footer.to);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        email,
        phone,
        address,
        from,
        to,
      })
    );
    history.push("/");
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
            placeholder: "kovaliv@gmail.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
          label="Email"
        />
        <Input
          inputProps={{
            placeholder: "+380938160837",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
          }}
          label="Контактний номер телефону"
        />
        <Input
          inputProps={{
            placeholder: "Київ, вул. Героїв Маріуполя 22A",
            value: address,
            onChange: (e) => setAddress(e.target.value),
          }}
          label="Адреса"
        />
        <Input
          inputProps={{
            placeholder: "9.00",
            value: from,
            onChange: (e) => setFrom(e.target.value),
          }}
          label="Початок робочого дня"
        />
        <Input
          inputProps={{
            placeholder: "18.00",
            value: to,
            onChange: (e) => setTo(e.target.value),
          }}
          label="Кінець робочого дня"
        />
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default FooterBlock;
