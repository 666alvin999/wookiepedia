const useSpeciesImage = (name: string) => {
	const imageName = `${name.toLowerCase()}`;
	console.log(imageName);

	let source;

	switch (imageName) {
		case "human":
			source = require("../images/human.webp");
			break;
		case "droid":
			source = require("../images/droid.webp");
			break;
		case "wookiee":
			source = require("../images/wookiee.webp");
			break;
		case "rodian":
			source = require("../images/rodian.webp");
			break;
		case "hutt":
			source = require("../images/hutt.webp");
			break;
		case "yoda's species":
			source = require("../images/yoda's species.webp");
			break;
		case "trandoshan":
			source = require("../images/trandoshan.webp");
			break;
		case "mon calamari":
			source = require("../images/mon calamari.webp");
			break;
		case "ewok":
			source = require("../images/ewok.webp");
			break;
		// case "sullustan":
		default:
			source = require("../images/sullustan.webp");
			break;
	}

	return source;
};

const useCharactersImage = (name: string) => {
	const imageName = `${name.toLowerCase()}`;
	console.log(imageName);

	let source;

	switch (imageName) {
		case "luke skywalker":
			source = require("../images/luke skywalker.webp");
			break;
		case "c-3po":
			source = require("../images/c-3po.webp");
			break;
		case "r2-d2":
			source = require("../images/r2-d2.webp");
			break;
		case "darth vader":
			source = require("../images/darth vader.webp");
			break;
		case "leia organa":
			source = require("../images/leia organa.webp");
			break;
		case "owen lars":
			source = require("../images/owen lars.webp");
			break;
		case "beru whitesun lars":
			source = require("../images/beru whitesun lars.webp");
			break;
		case "r5-d4":
			source = require("../images/r5-d4.webp");
			break;
		case "biggs darklighter":
			source = require("../images/biggs darklighter.webp");
			break;
		// case "obi-wan kenobi":
		default:
			source = require("../images/obi-wan kenobi.webp");
			break;
	}

	return source;
};

const usePlanetsImage = (name: string) => {
	const imageName = `${name.toLowerCase()}`;
	console.log(imageName);

	let source;

	switch (imageName) {
		case "tatooine":
			source = require("../images/tatooine.webp");
			break;
		case "alderaan":
			source = require("../images/alderaan.webp");
			break;
		case "yavin iv":
			source = require("../images/yavin iv.webp");
			break;
		case "hoth":
			source = require("../images/hoth.webp");
			break;
		case "dagobah":
			source = require("../images/dagobah.webp");
			break;
		case "bespin":
			source = require("../images/bespin.webp");
			break;
		case "endor":
			source = require("../images/endor.webp");
			break;
		case "naboo":
			source = require("../images/naboo.webp");
			break;
		case "coruscant":
			source = require("../images/coruscant.webp");
			break;
		// case "kamino":
		default:
			source = require("../images/kamino.webp");
			break;
	}

	return source;
};

const useStarshipsImage = (title: string) => {
	const imageName = `${title.toLowerCase().replace(" ", "")}`;
	console.log(imageName);

	let source;
	switch (imageName) {
		case "cr90corvette":
			source = require("../images/CR90corvette.jpg");
			break;
		case "stardestroyer":
			source = require("../images/stardestroyer.jpg");
			break;
		case "sentinel-classlanding craft":
			source = require("../images/sentinel-classlandingcraft.jpg");
			break;
		case "deathstar":
			source = require("../images/deathstar.jpg");
			break;
		case "millenniumfalcon":
			source = require("../images/millenniumfalcon.jpg");
			break;
		case "y-wing":
			source = require("../images/y-wing.jpg");
			break;
		case "x-wing":
			source = require("../images/x-wing.jpg");
			break;
		case "tieadvanced x1":
			source = require("../images/tieadvancedx1.jpg");
			break;
		case "executor":
			source = require("../images/executor.jpg");
			break;
		// case "rebeltransport":
		default:
			source = require("../images/rebeltransport.jpg");
			break;
	}

	return source;
};

const useVehiclesImage = (name: string) => {
	const imageName = `${name.toLowerCase()}`;
	console.log(imageName);
	let source;

	switch (imageName) {
		case "sand crawler":
			source = require("../images/sand crawler.webp");
			break;
		case "t-16 skyhopper":
			source = require("../images/t-16 skyhopper.webp");
			break;
		case "x-34 landspeeder":
			source = require("../images/x-34 landspeeder.webp");
			break;
		case "tie/ln starfighter":
			source = require("../images/tie ln starfighter.webp");
			break;
		case "snowspeeder":
			source = require("../images/snowspeeder.webp");
			break;
		case "tie bomber":
			source = require("../images/tie bomber.webp");
			break;
		case "at-at":
			source = require("../images/at at.webp");
			break;
		case "at-st":
			source = require("../images/at st.webp");
			break;
		case "storm iv twin-pod cloud car":
			source = require("../images/storm iv.webp");
			break;
		// case "sail barge":
		default:
			source = require("../images/sail barge.webp");
			break;
	}

	return source;
};

export {useSpeciesImage, usePlanetsImage, useCharactersImage, useStarshipsImage, useVehiclesImage};