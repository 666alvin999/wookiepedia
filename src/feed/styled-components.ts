import styled from "styled-components/native";
import {View} from "react-native";
import {Button} from "react-native-paper";

const MyNavBar = styled(View)`
  background-color: white;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SelectedButton = styled(Button)`
	background-color: rgba(255, 255, 0, 0.2);
`;

export {MyNavBar, SelectedButton};