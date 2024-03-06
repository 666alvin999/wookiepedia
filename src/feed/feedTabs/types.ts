type StarshipCardProps = {
	name: string;
	model: string;
	crew: string;
	hyperdrive_rating: string;
	cost_in_credits: string;
	url: string;
};

type SpeciesCardProps = {
	name: string;
	classification: string;
	average_height: number;
	average_lifespan: number;
	homeworld: string;
	url: string;
};

type CharacterCardProps = {
	name: string;
	height: number;
	weight: number;
	birth_year: string;
	homeworld: string;
	url: string;
}

type PlanetCardProps = {
	name: string;
	climate: string;
	rotation_period: number;
	orbital_period: number;
	population: number;
	url: string;
}

type VehicleCardProps = {
	name: string;
	manufacturer: string;
	cost_in_credit: number;
	length: number;
	vehicle_class: string;
	url: string;
}

export {StarshipCardProps, SpeciesCardProps, CharacterCardProps, VehicleCardProps, PlanetCardProps};