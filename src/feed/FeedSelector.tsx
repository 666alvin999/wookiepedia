import {CharactersFeed} from "./feedTabs/CharactersFeed";
import {StarshipFeed} from "./feedTabs/StarshipsFeed";
import {FeedContainer} from "./styled-components";
import {PlanetsFeed} from "./feedTabs/PlanetsFeed";
import {SpeciesFeed} from "./feedTabs/SpeciesFeed";
import {VehiclesFeed} from "./feedTabs/VehiclesFeed";
import {RandomFeed} from "./feedTabs/RandomFeed";

export const FeedSelector = ({feed}) => {

	return (
		<FeedContainer>
			{
				feed === "characters" &&
				<CharactersFeed />
			}
			{
				feed === "starships" &&
				<StarshipFeed />
			}
			{
				feed === "planets" &&
				<PlanetsFeed />
			}
			{
				feed === "species" &&
				<SpeciesFeed />
			}
			{
				feed === "vehicles" &&
				<VehiclesFeed />
			}
			{
				feed === "random" &&
				<RandomFeed />
			}
		</FeedContainer>
	)

}