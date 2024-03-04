import styled from "styled-components/native";
import {FlatList, View} from "react-native";
import {useStarships} from "../../queries/useStarships";
import {Text} from "react-native-paper";
import StarshipCard from "./feedCards/StarshipCard";
import {StarshipCardProps} from "./types";



const StyledFlatList = styled(FlatList)`
  background-color: white;
  width: 100%;
  padding: 0 10%;
`;

export const StarshipFeed = () => {
	const {isLoading, isError, data, error} = useStarships();

	return (
		<>
			{isLoading && (
				<View>
					<Text>Loading...</Text>
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
					renderItem={({item}: { item: StarshipCardProps }) => (
						<StarshipCard
							name={item.name}
							model={item.model}
							crew={item.crew}
							hyperdrive_rating={item.hyperdrive_rating}
							cost_in_credits={item.cost_in_credits}
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