import {PlanetDetailsProps} from "../types";
import {usePlanetsImage} from "../../useImage";
import {DetailImage, DetailsView, Specificities, SpecificitiesView, TitleView} from "../styled-components";
import {Text} from "react-native-paper";

export const PlanetDetails = (props: PlanetDetailsProps) => {

	const source = usePlanetsImage(props.name);

	return (
		<>
			<DetailsView>
				<DetailImage source={source} />

				<TitleView>
					<Text variant="headlineLarge">{props.name}</Text>
					<Text variant="bodyLarge">({props.climate})</Text>
				</TitleView>

				<SpecificitiesView>
					<Specificities>
						<Text variant="bodySmall">Rotation Period: {props.rotation_period}</Text>
						<Text variant="bodySmall">Orbital Period: {props.orbital_period}cm</Text>
						<Text variant="bodySmall">Gravity: {props.gravity}kg</Text>
					</Specificities>

					<Specificities>
						<Text variant="bodySmall">Terrain: {props.terrain}</Text>
						<Text variant="bodySmall">Diameter: {props.diameter}</Text>
						<Text variant="bodySmall">Surface Water: {props.surface_water}</Text>
					</Specificities>

					<Text variant="bodySmall">Population: {props.population} people</Text>
				</SpecificitiesView>
			</DetailsView>
		</>
	);

}