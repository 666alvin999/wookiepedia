import {View} from "react-native";
import {Text} from "react-native-paper";
import {CharacterCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {useCharacters} from "../../queries/useCharacters";
import CharacterCard from "./feedCards/CharacterCard";

export const CharactersFeed = () => {
	const {isLoading, isError, data, error} = useCharacters();

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
					renderItem={({item}: { item: CharacterCardProps }) => (
						<CharacterCard
							name={item.name}
							homeworld={item.homeworld}
							height={item.height}
							weight={item.weight}
							birth_year={item.birth_year}
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