import {DetailImage, DetailsView, Specificities, SpecificitiesView, TitleView} from "../styled-components";
import {SpeciesDetailsProps} from "../types";
import {Text} from "react-native-paper";
import {useSpeciesImage} from "../../useImage";

export const SpeciesDetails = (props: SpeciesDetailsProps) => {

	const source = useSpeciesImage(props.name);

	return (
		<>
			<DetailsView>
				<DetailImage source={source} />

				<TitleView>
					<Text variant="headlineLarge">{props.name}</Text>
					<Text variant="bodyLarge">({props.classification}, {props.designation})</Text>
				</TitleView>

				<SpecificitiesView>
					<Specificities>
						<Text variant="bodySmall">Lifespan: {props.average_lifespan} years</Text>
						<Text variant="bodySmall">Height: {props.average_height}cm</Text>
					</Specificities>

					<Specificities>
						<Text variant="bodySmall">Eyes: {props.eye_colors}</Text>
						<Text variant="bodySmall">Hair: {props.hair_colors}</Text>
						<Text variant="bodySmall">Skin: {props.skin_colors}</Text>
					</Specificities>

					<Text variant="bodySmall">Language: {props.language}</Text>
				</SpecificitiesView>
			</DetailsView>
		</>
	);

}