import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {StarshipCardProps} from "../types";

const useImage = (title: string) => {
	const imageName = `${title.toLowerCase().replace(" ", "")}`;
	let source;

	switch (imageName) {
		case "cr90corvette":
			source = "https://www.starwars-holonet.com/holonet/images/4/45/9/ship_crv.jpg"
			break;
		case "stardestroyer":
			source = "https://static.wikia.nocookie.net/starwars/images/9/94/Xyston-classStarDestroyer.png/revision/latest/scale-to-width-down/1000?cb=20210330171930"
			break;
		case "sentinel-classlanding craft":
			source = "https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel2-1920x1080.jpg"
			break;
		case "deathstar":
			source = "https://lh4.googleusercontent.com/proxy/YUpabQfsrduq9ng21ReyEiPYZjNYyyJQom35yyschudIAbC5zOZgN1X_jSKaTbuVjfZUT2Q2ZkDLSQ5QqsVNXgSpqQZXaQ";
			break;
		case "millenniumfalcon":
			source = "https://upload.wikimedia.org/wikipedia/en/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg"
			break;
		case "y-wing":
			source = "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768"
			break;
		case "x-wing":
			source = "https://www.hellobricks.com/wp-content/uploads/2023/04/X-Wing-Fighter.jpg"
			break;
		case "tieadvanced x1":
			source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Yx-8n8HsjKO380BRE65r65V_SOPYWdlHfw&usqp=CAU"
			break;
		case "executor":
			source = "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest/thumbnail/width/360/height/360?cb=20230405071103"
			break;
		case "rebeltransport":
			source = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFuU8a1SAbYGt_OcPa0KG5Vys6nalmiTVv1bDVD4YLicXfDa8_utaT29K2OFO6Uqg5itC3JyKn9LGPxBBXGpg247FErYMpNOe-HH17ynZ_vGH8E7Yi6amxrlcCawilj6drSPydWJExTh4/s1600/Rebel_transport_box_art.jpg"
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
					<Card.Cover source={{uri: useImage(item.name)}} resizeMode="cover" />
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
