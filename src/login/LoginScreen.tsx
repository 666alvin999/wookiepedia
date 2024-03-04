import {useAssets} from "expo-asset";
import LoginForm from "./component/LoginForm";
import {AppName, MyBackground, ViewContainer} from "../styled-components";

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

					<LoginForm />
				</ViewContainer>
			</MyBackground>
		</>
	);
};

export default LoginScreen;