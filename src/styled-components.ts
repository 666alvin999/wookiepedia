import styled from "styled-components/native";
import {Button, Text, TextInput} from "react-native-paper";

const MyBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const LoginViewContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewContainer = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppName = styled(Text)`
  color: yellow;
  font-size: 48px;
  font-weight: bold;
  box-shadow: 0 0 30px white;
`;

const FormView = styled.View`
  height: 300px;
  width: 300px;
  padding: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px white;
`;

const FormTextInput = styled(TextInput)`
  width: 100%;
  background-color: rgba(255, 255, 0, 0.2);
  border-radius: 10px;
`;

const FormButton = styled(Button)`
  background-color: yellow;
  width: 80%;
`;

export {MyBackground, LoginViewContainer, ViewContainer, AppName, FormView, FormTextInput, FormButton};