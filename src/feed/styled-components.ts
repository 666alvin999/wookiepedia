import styled from "styled-components/native";
import {FlatList, View} from "react-native";
import {Button} from "react-native-paper";

const FeedContainer = styled(View)`
  width: 100%;
  height: 85%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RandomFeedContainer = styled(View)`
  width: 90%;
  height: 85%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const RandomFeedObject = styled(View)`
`;

const StyledFlatList = styled(FlatList)`
  width: 100%;
  padding: 0 10%;
`;

const MyNavBar = styled(View)`
  width: 90%;
  height: auto;
  margin: 0 20px 25px;
  padding: 10px 0;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const SelectedButton = styled(Button)`
  background-color: rgba(255, 255, 0, 0.2);
`;

export {MyNavBar, SelectedButton, FeedContainer, RandomFeedContainer, StyledFlatList};