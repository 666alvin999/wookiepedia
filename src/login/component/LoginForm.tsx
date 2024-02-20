import styled from "styled-components/native";
import {Button, Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

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

const LoginForm = () => {

	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [password, setPassword] = useState<string>("");
	const navigation = useNavigation();

	const toggleSecureIcon = () => {
		setIsVisible(!isVisible);
	}

	const navigateToFeed = () => {
		navigation.navigate("Feed");
	}

	return (
		<>
			<FormView>
				<Text variant="titleLarge">Connect to the Force</Text>

				<FormTextInput id="email" placeholder="E-mail" keyboardType="email-address"/>

				<FormTextInput
					label="Password"
					value={password}
					secureTextEntry={isVisible}
					onChangeText={(value: string) => setPassword(value)}
					autoComplete="password"
					right={
						<TextInput.Icon
							onPress={toggleSecureIcon}
							icon={isVisible ? "eye-off" : "eye"}
						/>
					}
				/>

				<FormButton textColor="black" onPress={navigateToFeed}>Connect</FormButton>
			</FormView>
		</>
	);
};

export default LoginForm