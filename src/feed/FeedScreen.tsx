import {ViewContainer} from "../styled-components";
import {FeedSelector} from "./FeedSelector";
import {useState} from "react";
import {FeedNavBar} from "./FeedNavBar";

const FeedScreen = () => {

	const [selectedFeed, setSelectedFeed] = useState("species");

	const changeFeed = (newFeed: string) => {
		setSelectedFeed(newFeed)
	}

	return (
		<ViewContainer>
			<FeedSelector feed={selectedFeed} />

			<FeedNavBar selectedFeed={selectedFeed} changeFeed={changeFeed} />
		</ViewContainer>
	);

}

export default FeedScreen;