import {StyleSheet, View} from 'react-native';
import {PaperProvider} from "react-native-paper";
import {Navigator} from "./src/navigation";

export default function App() {
	return (
		<View style={styles.container}>
			<PaperProvider>
				{/*<LoginScreen/>*/}
				<Navigator/>
			</PaperProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	},
});
