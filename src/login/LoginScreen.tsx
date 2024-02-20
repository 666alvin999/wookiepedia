import {useAssets} from "expo-asset";
import styled from "styled-components/native";
import LoginForm from "./component/LoginForm";
import {Text} from "react-native-paper";

const MyBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const ViewContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const AppName = styled(Text)`
  color: yellow;
  font-size: 48px;
  font-weight: bold;
  box-shadow: 0 0 30px white;
`;

const LoginScreen = () => {

	const [imageUrl, error] = useAssets(require("../../assets/login-background.jpg"));

	return (
		<>
			<MyBackground
				source={{uri: imageUrl?.[0]?.uri}}
				resizeMode="cover"
			>
				<ViewContainer>
					<AppName>WOOKIEPEDIA</AppName>

					<LoginForm/>
				</ViewContainer>
			</MyBackground>
		</>
	);
};

export default LoginScreen;