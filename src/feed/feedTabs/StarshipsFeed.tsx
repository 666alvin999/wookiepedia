import {View} from "react-native";
import {useStarships} from "../../queries/useStarships";
import {ActivityIndicator, Text} from "react-native-paper";
import {StarshipCard} from "./feedCards/StarshipCard";
import {StarshipCardProps} from "./types";
import {StyledFlatList} from "../styled-components";

export const StarshipFeed = () => {

	const {isPending, isError, data, error} = useStarships();

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
					renderItem={({item}: { item: StarshipCardProps }) => (
						<StarshipCard
							name={item.name}
							model={item.model}
							crew={item.crew}
							hyperdrive_rating={item.hyperdrive_rating}
							cost_in_credits={item.cost_in_credits}
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