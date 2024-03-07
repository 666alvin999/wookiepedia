import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {VehicleCardProps} from "../types";
import {useVehiclesImage} from "../../../useImage";

const CharacterCard = ({name, manufacturer, length, cost_in_credit, vehicle_class, url}: VehicleCardProps) => {
	const navigation = useNavigation();

	const source = useVehiclesImage(name);

	const handlePress = () => {
		navigation.navigate("Detail", {url: url});
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
