import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {StarshipCardProps} from "../types";
import {useStarshipsImage} from "../../../useImage";

const StarshipCard = ({name, model, hyperdrive_rating, crew, cost_in_credits, url}: StarshipCardProps) => {
	const navigation = useNavigation();

	const imagePath = useStarshipsImage(name);

	const handlePress = () => {
		navigation.navigate("Detail", {url: url});
	};

	return (
		<>
			<TouchableOpacity onPress={handlePress}>
				<Card>
					<Card.Cover source={imagePath} resizeMode="cover" />
					<Card.Title
						title={name}
						subtitle={model}
					/>
					<Card.Content>
						<Text variant="bodySmall">
							Hyperdrive
							Rating: {hyperdrive_rating}
						</Text>
						<Text variant="bodySmall"> Crew: {crew}</Text>
						<Text variant="bodySmall">Cost: {cost_in_credits} credits</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);
};

export default StarshipCard;
