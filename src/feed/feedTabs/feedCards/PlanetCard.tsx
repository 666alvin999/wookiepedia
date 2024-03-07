import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {PlanetCardProps} from "../types";
import {usePlanetsImage} from "../../../useImage";

export const PlanetCard = ({name, climate, rotation_period, orbital_period, population, url}: PlanetCardProps) => {

	const navigation = useNavigation();

	const source = usePlanetsImage(name);

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
						subtitle={climate}
					/>
					<Card.Content>
						<Text variant="bodySmall">Orbital Period: {orbital_period} days</Text>
						<Text variant="bodySmall">Rotation Period: {rotation_period} hours</Text>
						<Text variant="bodySmall">Population: {population} people</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);

};
