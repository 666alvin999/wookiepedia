import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../login/LoginScreen";
import FeedScreen from "../feed/FeedScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen
					name="Feed"
					component={FeedScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;