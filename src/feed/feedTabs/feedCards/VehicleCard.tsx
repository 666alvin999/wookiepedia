import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {VehicleCardProps} from "../types";
import {useVehiclesImage} from "../../../useImage";

const useImage = (name: string) => {
	const imageName = `${name.toLowerCase().replace(" ", "")}`;
	let source;

	switch (imageName) {
		case "lukeskywalker":
			source = "https://www.leparisien.fr/resizer/hBQKqatpwpgeZIImeAiLscjOkQc=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/EAJWBYDXBBG4U65O3D4OTNDXD4.jpg"
			break;
	}
	return source;
};

const CharacterCard = ({name, manufacturer, length, cost_in_credit, vehicle_class, url}: VehicleCardProps) => {
	const navigation = useNavigation();

	const source = useVehiclesImage(name);

	const handlePress = () => {
		navigation.navigate("Detail", {url: url, imageUrl: source});
	};

	return (
		<>
			<TouchableOpacity onPress={handlePress}>
				<Card>
					<Card.Cover source={source} resizeMode="cover" />
					<Card.Title
						title={name}
						subtitle={vehicle_class}
					/>
					<Card.Content>
						<Text variant="bodySmall">
							Manufacturer: {manufacturer}
						</Text>
						<Text variant="bodySmall"> Length : {length}m</Text>
						<Text variant="bodySmall"> Cost : {cost_in_credit} credits</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);
};

export default CharacterCard;
