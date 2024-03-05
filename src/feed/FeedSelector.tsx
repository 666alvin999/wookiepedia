import {CharacterFeed} from "./feedTabs/CharacterFeed";
import {StarshipFeed} from "./feedTabs/StarshipsFeed";
import {FeedContainer} from "./styled-components";

export const FeedSelector = ({feed}) => {

	return (
		<FeedContainer>
			{
				feed === "characters" &&
				<CharacterFeed />
			}
			{
				feed === "starships" &&
				<StarshipFeed />
			}
		</FeedContainer>
	)

}