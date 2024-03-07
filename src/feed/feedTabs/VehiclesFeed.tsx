import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {VehicleCardProps} from "./types";
import {StyledFlatList} from "../styled-components";
import VehicleCard from "./feedCards/VehicleCard";
import {useVehicles} from "../../queries/useVehicles";

export const VehiclesFeed = () => {
	const {isPending, isError, data, error} = useVehicles();

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
					renderItem={({item}: { item: VehicleCardProps }) => (
						<VehicleCard
							name={item.name}
							manufacturer={item.manufacturer}
							cost_in_credit={item.cost_in_credit}
							length={item.length}
							vehicle_class={item.vehicle_class}
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