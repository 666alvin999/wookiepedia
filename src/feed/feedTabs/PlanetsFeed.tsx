import {View} from "react-native";
import {Text} from "react-native-paper";
import {PlanetCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {useCharacters} from "../../queries/useCharacters";
import PlanetCard from "./feedCards/PlanetCard";
import {usePlanets} from "../../queries/usePlantets";

export const PlanetsFeed = () => {
	const {isLoading, isError, data, error} = usePlanets();

	return (
		<>
			{isLoading && (
				<View>
					<Text variant="labelLarge">Loading...</Text>
				</View>
			)}

			{isError && (
				<View>
					<Text>{`${error}`}</Text>
				</View>
			)}

			{!(isLoading || isError) && (
				<StyledFlatList
					data={data.results}
					renderItem={({item}: { item: PlanetCardProps }) => (
						<PlanetCard
							name={item.name}
							climate={item.climate}
							orbital_period={item.orbital_period}
							rotation_period={item.rotation_period}
							population={item.population}
						/>
					)}
					ItemSeparatorComponent={() => (
						<View style={{height: 20}} />
					)}
				/>
			)}
		</>
	);
};