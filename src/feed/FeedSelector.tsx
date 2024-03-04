import {CharacterFeeds} from "./feedTabs/CharacterFeeds";
import {StarshipFeed} from "./feedTabs/StarshipsFeed";

export const FeedSelector = ({feed}) => {

	return (
		<>
			{
				feed === "characters" &&
				<CharacterFeeds/>
			}
			{
				feed === "starships" &&
				<StarshipFeed/>
			}
		</>
	)

}