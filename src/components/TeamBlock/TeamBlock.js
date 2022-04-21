import React, { useState } from "react";
import * as R from "ramda";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";

import Input from "../Input";
import SaveButton from "../SaveButton";

import { setValues } from "../../redux/team/actions";
import { selectTeamValues } from "../../redux/team/selectors";

import TeamItem from "./TeamItem";

import { Wrapper, StyledTeamList, StyledAddNewButton } from "./TeamBlock.style";

// team: {
//   color: "#000",
//   backgroundColor: "#fff",
//   headerTitle: 'Наша команда',
//   data: [
//     {
//       name: "Фотограф",
//       img: "https://images.unian.net/photos/2020_10/thumb_files/400_0_1601542911-3769.jpg?0.029252425211480526",
//       color: "#1b1f20",
//       description:
//         "Мене звати Богдан. Я весільний і сімейний фотограф понад 3 роки. Живу та працюю в Києві. Фотографія для мене не просто робота, а спосіб показати почуття та емоції пар через об'єктив моєї камери.",
//     },
//     {
//       name: "Візажист",
//       img: "http://cdn.goodhouse.com.ua/images-jpeg/15994/159940.jpeg",
//       color: "#1b1f20",
//       description:
//         "Привіт, мене звуть Ростислав, я візажист – гример. Художник образ. Створюю у цій сфері з 2007 року. Робота художником з гриму в кіно, стилістом/візажистом на телебаченні, рекламі, серіалах.",
//     },
//     {
//       name: "Стиліст",
//       img: "https://rivne1.tv/pics2/1901/i97511.jpg?1546526976",
//       color: "#1b1f20",
//       description:
//         "Привіт, мене звуть Віталій, я стиліст і дуже люблю створювати красиві образи. Я буду дуже радий мати відношення до Ваших позитивних спогадів та красивих знімків",
//     },
//   ],
// },

const TeamBlock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const team = useSelector(selectTeamValues);

  const [color, setColor] = useState(team.color);
  const [backgroundColor, setBackgroundColor] = useState(team.backgroundColor);
  const [headerTitle, setHeaderTitle] = useState(team.headerTitle);
  const [teamList, setTeamList] = useState(team.data || []);

  const handleSave = () => {
    dispatch(
      setValues({
        color,
        backgroundColor,
        headerTitle,
      })
    );
    history.push("/services");
  };

  const handleAddNewTeamItem = () => {
    const newItem =
      teamList.length === 0
        ? { id: 0 }
        : { id: teamList[teamList.length - 1].id + 1 };
    setTeamList([...teamList, newItem]);
  };

  const removeItem = (id) => {
    // пофіксити
    const newTeamList = R.filter(
      R.compose(R.not, R.propEq("id", id)),
      teamList
    );

    setTeamList(newTeamList);

    console.log("newTeamList", newTeamList);
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
            placeholder: "Наша команда",
            value: headerTitle,
            onChange: (e) => setHeaderTitle(e.target.value),
          }}
          label="Заголовок всього блоку"
        />
        <StyledTeamList>
          {teamList.map((item) => (
            <TeamItem item={item} removeItem={removeItem} />
          ))}
        </StyledTeamList>
        <StyledAddNewButton onClick={handleAddNewTeamItem}>
          Додати працівника
        </StyledAddNewButton>
      </Space>
      <SaveButton onClick={handleSave} />
    </Wrapper>
  );
};

export default TeamBlock;
