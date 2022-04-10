import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import Checkbox from "../Checkbox";
import SaveButton from "../SaveButton";

import { setSettingsValues } from "../../redux/settings/actions";
import { selectSettingsValues } from "../../redux/settings/selectors";

import { Wrapper, CheckboxWrapper } from "./BasicSettings.style";

const BasicSettings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const setting = useSelector(selectSettingsValues);

  const [color, setColor] = useState(setting.color);
  const [backgroundColor, setBackgroundColor] = useState(
    setting.backgroundColor
  );
  const [showHeader, setShowHeader] = useState(setting.showHeader);
  const [showAbout, setShowAbout] = useState(setting.showAbout);
  const [showServices, setShowServices] = useState(setting.showServices);
  const [showNovelty, setShowNovelty] = useState(setting.showNovelty);
  const [showFooter, setShowFooter] = useState(setting.showFooter);

  const handleSave = () => {
    dispatch(
      setSettingsValues({
        color,
        backgroundColor,
        showHeader,
        showAbout,
        showServices,
        showNovelty,
        showFooter,
      })
    );
    history.push("/header");
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
          label="Колір тексту всього сайта"
        />
        <Input
          inputProps={{
            placeholder: "#000",
            value: backgroundColor,
            onChange: (e) => setBackgroundColor(e.target.value),
          }}
          label="Колір заднього фона"
        />
        <CheckboxWrapper>
          <Checkbox
            checked={showHeader}
            onChange={() => setShowHeader(!showHeader)}
          >
            Header
          </Checkbox>
          <Checkbox
            checked={showAbout}
            onChange={() => setShowAbout(!showAbout)}
          >
            Про себе
          </Checkbox>
          <Checkbox
            checked={showServices}
            onChange={() => setShowServices(!showServices)}
          >
            Послуги
          </Checkbox>
          <Checkbox
            checked={showNovelty}
            onChange={() => setShowNovelty(!showNovelty)}
          >
            Новики
          </Checkbox>
          <Checkbox
            checked={showFooter}
            onChange={() => setShowFooter(!showFooter)}
          >
            Footer
          </Checkbox>
        </CheckboxWrapper>
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default BasicSettings;
