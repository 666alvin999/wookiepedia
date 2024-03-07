import {StarshipDetailsProps} from "../types";
import {useStarshipsImage} from "../../useImage";
import {DetailImage, DetailsView, Specificities, SpecificitiesView, TitleView} from "../styled-components";
import {Text} from "react-native-paper";

export const StarshipDetails = (props: StarshipDetailsProps) => {

	const source = useStarshipsImage(props.name);

	return (
		<>
			<DetailsView>
				<DetailImage source={source} />

				<TitleView>
					<Text variant="headlineLarge">{props.name}</Text>
					<Text variant="bodyLarge">({props.model})</Text>
				</TitleView>

				<SpecificitiesView>
					<Text variant="bodyMedium">Starship Class: {props.starship_class}</Text>

					<Specificities>
						<Text variant="bodySmall">Manufacturer: {props.manufacturer}</Text>
						<Text variant="bodySmall">Length: {props.length}m</Text>
						<Text variant="bodySmall">Crew: {props.crew} members</Text>
						<Text variant="bodySmall">Passengers: {props.passengers}</Text>
						<Text variant="bodySmall">Cargo capacity: {props.cargo_capacity}</Text>
					</Specificities>

					<Specificities>
						<Text variant="bodySmall">Consumables: {props.consumables}</Text>
						<Text variant="bodySmall">Hyperdrive Rating: {props.hyperdrive_rating}</Text>
						<Text variant="bodySmall">Max atmosphere speed: {props.max_atmosphering_speed}km/h</Text>
					</Specificities>

					<Text variant="bodySmall">Cost: {props.cost_in_credits} credits</Text>
				</SpecificitiesView>
			</DetailsView>
		</>
	);

}