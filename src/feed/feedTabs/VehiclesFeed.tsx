import {View} from "react-native";
import {Text} from "react-native-paper";
import {CharacterCardProps, VehicleCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import {useCharacters} from "../../queries/useCharacters";
import CharacterCard from "./feedCards/CharacterCard";
import VehicleCard from "./feedCards/VehicleCard";
import {useVehicles} from "../../queries/useVehicles";

export const VehiclesFeed = () => {
	const {isLoading, isError, data, error} = useVehicles();

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
					renderItem={({item}: { item: VehicleCardProps }) => (
						<VehicleCard
							name={item.name}
							manufacturer={item.manufacturer}
							cost_in_credit={item.cost_in_credit}
							length={item.length}
							vehicle_class={item.vehicle_class}
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