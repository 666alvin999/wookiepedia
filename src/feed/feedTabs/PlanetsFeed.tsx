import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {PlanetCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import PlanetCard from "./feedCards/PlanetCard";
import {usePlanets} from "../../queries/usePlantets";

export const PlanetsFeed = () => {
	const {isPending, isError, data, error} = usePlanets();

	return (
		<>
			{isPending && (
				<View>
					<ActivityIndicator />
				</View>
			)}

			{isError && (
				<View>
					<Text>{`${error}`}</Text>
				</View>
			)}

			{!(isPending || isError) && (
				<StyledFlatList
					data={data.results}
					renderItem={({item}: { item: PlanetCardProps }) => (
						<PlanetCard
							name={item.name}
							climate={item.climate}
							orbital_period={item.orbital_period}
							rotation_period={item.rotation_period}
							population={item.population}
							url={item.url}
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