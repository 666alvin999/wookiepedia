import {useAssets} from "expo-asset";
import LoginForm from "./component/LoginForm";
import {AppName, LoginViewContainer, MyBackground} from "../styled-components";

const LoginScreen = () => {

	const [imagePath, error] = useAssets(require("../../assets/login-background.jpg"));

	return (
		<>
			<MyBackground
				source={{uri: imagePath?.[0]?.uri}}
				resizeMode="cover"
			>
				<LoginViewContainer>
					<AppName>WOOKIEPEDIA</AppName>

					<LoginForm />
				</LoginViewContainer>
			</MyBackground>
		</>
	);
};

export default LoginScreen;