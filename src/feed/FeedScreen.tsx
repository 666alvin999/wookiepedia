import {ViewContainer} from "../styled-components";
import {FeedSelector} from "./FeedSelector";
import {Button} from "react-native-paper";
import {useState} from "react";
import {MyNavBar, SelectedButton} from "./styled-components";

const FeedScreen = () => {

	const [selectedFeed, setSelectedFeed] = useState("starships");

	const changeFeed = (newFeed: string) => {
		setSelectedFeed(newFeed)
	}

	return (
		<ViewContainer>
			<FeedSelector feed={selectedFeed} />

			<MyNavBar>
				{selectedFeed === "species" ?
					<SelectedButton onPress={() => changeFeed("species")}>Species</SelectedButton>
					:
					<Button onPress={() => changeFeed("species")}>Species</Button>
				}

				{selectedFeed === "characters" ?
					<SelectedButton onPress={() => changeFeed("characters")}>Characters</SelectedButton>
					:
					<Button onPress={() => changeFeed("characters")}>Characters</Button>
				}

				{selectedFeed === "planets" ?
					<SelectedButton onPress={() => changeFeed("planets")}>Planets</SelectedButton>
					:
					<Button onPress={() => changeFeed("planets")}>Planets</Button>
				}

				{selectedFeed === "starships" ?
					<SelectedButton onPress={() => changeFeed("starships")}>Starships</SelectedButton>
					:
					<Button onPress={() => changeFeed("starships")}>Starships</Button>
				}

				{selectedFeed === "vehicles" ?
					<SelectedButton onPress={() => changeFeed("vehicles")}>Vehicles</SelectedButton>
					:
					<Button onPress={() => changeFeed("vehicles")}>Vehicles</Button>
				}
			</MyNavBar>
		</ViewContainer>
	);

}

export default FeedScreen;