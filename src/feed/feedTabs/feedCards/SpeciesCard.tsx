import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {SpeciesCardProps} from "../types";

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

const CharacterCard = ({name, homeworld, average_lifespan, average_height, classification, url}: SpeciesCardProps) => {
	const navigation = useNavigation();

	const handlePress = () => {
		// navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {starship: item});
	};

	return (
		<>
			<TouchableOpacity onPress={handlePress}>
				<Card>
					<Card.Cover source={{uri: useImage(name)}} resizeMode="cover" />
					<Card.Title
						title={name}
						subtitle={classification}
					/>
					<Card.Content>
						<Text variant="bodySmall">Average Lifespan: {average_lifespan} years</Text>
						<Text variant="bodySmall">Average Height : {average_height}cm</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);
};

export default CharacterCard;
