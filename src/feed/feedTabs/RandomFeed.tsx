import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {useCharacters} from "../../queries/useCharacters";
import {useSpecies} from "../../queries/useSpecies";
import {usePlanets} from "../../queries/usePlantets";
import {useStarships} from "../../queries/useStarships";
import {useVehicles} from "../../queries/useVehicles";
import {RandomFeedContainer} from "../styled-components";
import {CharacterCard} from "./feedCards/CharacterCard";
import {SpeciesCard} from "./feedCards/SpeciesCard";
import {PlanetCard} from "./feedCards/PlanetCard";
import {StarshipCard} from "./feedCards/StarshipCard";
import {VehicleCard} from "./feedCards/VehicleCard";

export const RandomFeed = () => {

	const getRandomInt = (max: number) => {
		return Math.floor((Math.random() * max) + 1);
	}

	const character = useCharacters(getRandomInt(10));
	const species = useSpecies(getRandomInt(10));
	const planet = usePlanets(getRandomInt(10));
	const starship = useStarships(getRandomInt(10));
	const vehicle = useVehicles(getRandomInt(10));

	const isPending = () => {
		return character.isPending
			|| species.isPending
			|| planet.isPending
			|| starship.isPending
			|| vehicle.isPending;
	}

	const isError = () => {
		return character.isError
			|| species.isError
			|| planet.isError
			|| starship.isError
			|| vehicle.isError;
	}

	return (
		<>
			{
				isPending() && (
					<ActivityIndicator />
				)
			}

			{
				isError() && (
					<View>
						<Text>{`${character.error}`}</Text>
					</View>
				)
			}

			{
				!(isPending() || isError())
				&& (
					<>
						<RandomFeedContainer>
							<CharacterCard name={character.data.name} height={character.data.height}
							               weight={character.data.height} birth_year={character.data.birth_year}
							               homeworld={character.data.homeworld} url={character.data.url}
							/>

							<SpeciesCard name={species.data.name} classification={species.data.classification}
							             homeworld={species.data.homeworld} average_lifespan={species.data.average_lifespan}
							             average_height={species.data.average_height} url={species.data.url}
							/>

							<PlanetCard name={planet.data.name} climate={planet.data.climate}
							            rotation_period={planet.data.rotation_period} orbital_period={planet.data.order}
							            population={planet.data.population} url={planet.data.url}
							/>

							<StarshipCard name={starship.data.name} model={starship.data.model} crew={starship.data.crew}
							              hyperdrive_rating={starship.data.hyperdrive_rating}
							              cost_in_credits={starship.data.cost_in_credit} url={starship.data.url}
							/>

							<VehicleCard name={vehicle.data.name} vehicle_class={vehicle.data.vehicle_class}
							             manufacturer={vehicle.data.manufacturer} length={vehicle.data.length}
							             cost_in_credit={vehicle.data.cost_in_credits} url={vehicle.data.url}
							/>
						</RandomFeedContainer>
					</>
				)
			}
		</>
	);

};