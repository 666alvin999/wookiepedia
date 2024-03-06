import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {CharacterCardProps} from "../types";
import {useCharactersImage} from "../../../useImage";

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

const CharacterCard = ({name, homeworld, height, weight, birth_year, url}: CharacterCardProps) => {

	const navigation = useNavigation();
	const source = useCharactersImage(name);

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
					/>
					<Card.Content>
						<Text variant="bodySmall">
							Birth Year: {birth_year}
						</Text>
						<Text variant="bodySmall"> Height : {height}cm</Text>
						<Text variant="bodySmall"> Weight : {weight ? weight : "N/A"} kg</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);
};

export default CharacterCard;
