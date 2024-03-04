import {Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {FormButton, FormTextInput, FormView} from "../../styled-components";

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

				<FormTextInput id="email" placeholder="E-mail" keyboardType="email-address" />

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