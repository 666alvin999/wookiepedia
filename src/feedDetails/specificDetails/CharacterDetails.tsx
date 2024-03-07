import {CharacterDetailsProps} from "../types";
import {useCharactersImage} from "../../useImage";
import {DetailImage, DetailsView, Specificities, SpecificitiesView, TitleView} from "../styled-components";
import {Text} from "react-native-paper";

export const CharacterDetails = (props: CharacterDetailsProps) => {

	const source = useCharactersImage(props.name);

	return (
		<>
			<DetailsView>
				<DetailImage source={source} />

				<TitleView>
					<Text variant="headlineLarge">{props.name}</Text>
				</TitleView>

				<SpecificitiesView>
					<Specificities>
						<Text variant="bodySmall">Gender: {props.gender}</Text>
						<Text variant="bodySmall">Height: {props.height}cm</Text>
						<Text variant="bodySmall">Weight: {props.mass}kg</Text>
					</Specificities>

					<Specificities>
						<Text variant="bodySmall">Eyes: {props.eye_color}</Text>
						<Text variant="bodySmall">Hair: {props.hair_color}</Text>
						<Text variant="bodySmall">Skin: {props.skin_color}</Text>
					</Specificities>

					<Text variant="bodySmall">Birth Year: {props.birth_year}</Text>
				</SpecificitiesView>
			</DetailsView>
		</>
	);

}