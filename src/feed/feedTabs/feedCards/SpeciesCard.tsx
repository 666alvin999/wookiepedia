import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {SpeciesCardProps} from "../types";
import {useSpeciesImage} from "../../../useImage";

export const SpeciesCard = ({name, homeworld, average_lifespan, average_height, classification, url}: SpeciesCardProps) => {

	const navigation = useNavigation();

	const source = useSpeciesImage(name);

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
