import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {StarshipCardProps} from "../types";

const useImage = (title: string) => {
	const imageName = `${title.toLowerCase().replace(" ", "")}`;

	let source;
	switch (imageName) {
		case "cr90corvette":
			source = require("../../../../images/CR90corvette.jpg");
			break;
		case "stardestroyer":
			source = require("../../../../images/stardestroyer.jpg");
			break;
		case "sentinel-classlanding craft":
			source = require("../../../../images/sentinel-classlandingcraft.jpg");
			break;
		case "deathstar":
			source = require("../../../../images/deathstar.jpg");
			break;
		case "millenniumfalcon":
			source = require("../../../../images/millenniumfalcon.jpg");
			break;
		case "y-wing":
			source = require("../../../../images/y-wing.jpg");
			break;
		case "x-wing":
			source = require("../../../../images/x-wing.jpg");
			break;
		case "tieadvanced x1":
			source = require("../../../../images/tieadvancedx1.jpg");
			break;
		case "executor":
			source = require("../../../../images/executor.jpg");
			break;
		case "rebeltransport":
			source = require("../../../../images/rebeltransport.jpg");
			break;
	}
	return source;
};

const StarshipCard = (item: StarshipCardProps) => {
	const navigation = useNavigation();

	const handlePress = () => {
		// navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {starship: item});
	};

	return (
		<>
			<TouchableOpacity onPress={handlePress}>
				<Card>
					<Card.Cover source={useImage(item.name)} resizeMode="cover" />
					<Card.Title
						title={item.name}
						subtitle={item.model}
					/>
					<Card.Content>
						<Text variant="bodySmall">
							Hyperdrive
							Rating: {
							item.hyperdrive_rating
						}
						</Text>
						<Text variant="bodySmall"> Crew : {item.crew}</Text>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</>
	);
};

export default StarshipCard;
