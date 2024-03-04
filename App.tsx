import {StyleSheet, View} from 'react-native';
import {PaperProvider} from "react-native-paper";
import {Navigator} from "./src/navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function App() {
	return (
		<View style={styles.container}>
			<QueryClientProvider client={new QueryClient()}>
				<PaperProvider>
					<Navigator/>
				</PaperProvider>
			</QueryClientProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	},
});
