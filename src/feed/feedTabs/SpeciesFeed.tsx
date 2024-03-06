import {View} from "react-native";
import {Text} from "react-native-paper";
import {CharacterCardProps, SpeciesCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {useCharacters} from "../../queries/useCharacters";
import CharacterCard from "./feedCards/CharacterCard";
import SpeciesCard from "./feedCards/SpeciesCard";
import {useSpecies} from "../../queries/useSpecies";

export const SpeciesFeed = () => {
	const {isLoading, isError, data, error} = useSpecies();

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