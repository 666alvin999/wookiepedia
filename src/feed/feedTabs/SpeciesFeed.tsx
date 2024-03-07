import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {SpeciesCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {SpeciesCard} from "./feedCards/SpeciesCard";
import {useSpecies} from "../../queries/useSpecies";

export const SpeciesFeed = () => {

	const {isPending, isError, data, error} = useSpecies();

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
					renderItem={({item}: { item: SpeciesCardProps }) => (
						<SpeciesCard
							name={item.name}
							classification={item.classification}
							average_height={item.average_height}
							average_lifespan={item.average_lifespan}
							homeworld={item.homeworld}
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