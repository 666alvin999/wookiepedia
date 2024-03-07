import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {useCharacters} from "../../queries/useCharacters";
import {useSpecies} from "../../queries/useSpecies";
import {usePlanets} from "../../queries/usePlantets";
import {useStarships} from "../../queries/useStarships";
import {useVehicles} from "../../queries/useVehicles";

export const RandomFeed = () => {

	const character = useCharacters(getRandomInt(10));
	const species = useSpecies(getRandomInt(10));
	const planet = usePlanets(getRandomInt(10));
	const starship = useStarships(getRandomInt(10));
	const vehicle = useVehicles(getRandomInt(10));

	function getRandomInt(max: number) {
		return Math.floor((Math.random() * max) + 1);
	}

	console.log(character.data);

	function isPending() {
		return character.isPending
			|| species.isPending
			|| planet.isPending
			|| starship.isPending
			|| vehicle.isPending;
	}

	function isError() {
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

					</>
				)
			}
		</>
	);
};