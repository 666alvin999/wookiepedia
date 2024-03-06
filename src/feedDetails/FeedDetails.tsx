import {Text} from "react-native-paper";
import {Image, View} from "react-native";
import {useDetails} from "../queries/useDetails";
import {CharacterDetails} from "./specificDetails/CharacterDetails";
import {PlanetDetails} from "./specificDetails/PlanetDetails";
import {StarshipDetails} from "./specificDetails/StarshipDetails";
import {VehicleDetails} from "./specificDetails/VehicleDetails";
import {SpeciesDetails} from "./specificDetails/SpeciesDetails";
import {ViewContainer} from "../styled-components";
import {useSpeciesImage} from "../useImage";

export const FeedDetails = ({route}) => {

	const {url, imageUrl} = route.params;
	const {isPending, isError, data, error} = useDetails(url);

	return (
		<>
			<ViewContainer>
				{
					isPending &&
					<View>
						<Text variant="labelLarge">Loading...</Text>
					</View>

				}

				{
					isError &&
					<View>
						<Text>{`${error}`}</Text>
					</View>
				}

				{
					!(isPending || isError) &&
					<Image source={useSpeciesImage(imageUrl)} style={{width: 200, height: 200}} />

					&& (
						(
							url.includes("species") &&
							<SpeciesDetails
								name={data.name}
								classification={data.classification}
								designation={data.designation}
								average_height={data.average_height}
								skin_colors={data.skin_colors}
								hair_colors={data.hair_colors}
								eye_colors={data.eye_colors}
								average_lifespan={data.average_lifespan}
								language={data.language}
							/>
						)
						||
						(
							url.includes("people") &&
							<CharacterDetails
								name={data.name}
								height={data.height}
								mass={data.mass}
								skin_color={data.skin_color}
								hair_color={data.hair_color}
								eye_color={data.eye_color}
								birth_year={data.birth_year}
								gender={data.gender}
							/>
						)
						||
						(
							url.includes("planets") &&
							<PlanetDetails
								name={data.name}
								rotation_period={data.rotation_period}
								orbital_period={data.orbital_period}
								diameter={data.diameter}
								climate={data.climate}
								gravity={data.gravity}
								terrain={data.terrain}
								surface_water={data.surface_water}
								population={data.population}
							/>
						)
						||
						(
							url.includes("starships") &&
							<StarshipDetails
								name={data.name}
								model={data.model}
								manufacturer={data.manufacturer}
								cost_in_credits={data.cost_in_credit}
								length={data.length}
								max_atmosphering_speed={data.max_atmosphering_speed}
								crew={data.crew}
								passengers={data.passengers}
								cargo_capacity={data.cargo_capacity}
								consumables={data.consumables}
								hyperdrive_rating={data.hyperdrive_rating}
								mglt={data.mglt}
								starship_class={data.starship_class}
							/>
						)
						||
						(
							url.includes("vehicles") &&
							<VehicleDetails
								name={data.name}
								model={data.model}
								manufacturer={data.manufacturer}
								cost_in_credits={data.cost_in_credit}
								length={data.length}
								max_atmosphering_speed={data.max_atmosphering_speed}
								crew={data.crew}
								passengers={data.passengers}
								cargo_capacity={data.cargo_capacity}
								consumables={data.consumables}
								vehicle_class={data.vehicle_class}
							/>
						)
					)
				}
			</ViewContainer>
		</>
	);
}
