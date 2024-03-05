type StarshipCardProps = {
	name: string;
	model: string;
	crew: string;
	hyperdrive_rating: string;
	cost_in_credits: string;
};

type SpeciesCardProps = {
	name: string;
	classification: string;
	average_height: number;
	average_lifespan: number;
	homeworld: string;
};

type CharacterCardProps = {
	name: string;
	height: number;
	weight: number;
	birth_year: string;
	homeworld: string;
}

type PlanetCardProps = {
	name: string;
	climate: string;
	rotation_period: number;
	orbital_period: number;
	population: number;
}

type VehicleCardProps = {
	name: string;
	manufacturer: string;
	cost_in_credit: number;
	length: number;
	vehicle_class: string;
}

export {StarshipCardProps, SpeciesCardProps, CharacterCardProps, VehicleCardProps, PlanetCardProps};