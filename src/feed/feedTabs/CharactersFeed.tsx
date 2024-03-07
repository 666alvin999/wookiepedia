import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {CharacterCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {useCharacters} from "../../queries/useCharacters";
import CharacterCard from "./feedCards/CharacterCard";
import {Colors} from "react-native/Libraries/NewAppScreen";

export const CharactersFeed = () => {
	const {isPending, isError, data, error} = useCharacters();

	return (
		<>
			{isPending && (
				<ActivityIndicator />
			)}

			{isError && (
				<View>
					<Text>{`${error}`}</Text>
				</View>
			)}

			{!(isPending || isError) && (
				<StyledFlatList
					data={data.results}
					renderItem={({item}: { item: CharacterCardProps }) => (
						<CharacterCard
							name={item.name}
							homeworld={item.homeworld}
							height={item.height}
							weight={item.weight}
							birth_year={item.birth_year}
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