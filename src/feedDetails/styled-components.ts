import {View} from "react-native";
import styled from "styled-components/native";

const DetailImageView = styled(View)`
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-shadow: 0 0 50px black;
`;

const DetailsView = styled(View)`
  background-color: white;
  width: 90%;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px solid #888;
  border-radius: 20px;
  box-shadow: 0 0 10px #000;
`;

const TitleView = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 5px;
`;

const SpecificitiesView = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

const Specificities = styled(View)`
  width: 90%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 8px;
  border: 2px solid #888;
  border-radius: 20px;
`

export {DetailImageView, DetailsView, TitleView, SpecificitiesView, Specificities};