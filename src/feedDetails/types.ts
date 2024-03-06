type SpeciesDetailsProps = {
	name: string;
	classification: string;
	designation: string;
	average_height: number;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: number;
	language: string;
}

type CharacterDetailsProps = {
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
}

type PlanetDetailsProps = {
	name: string;
	rotation_period: number;
	orbital_period: number;
	diameter: number;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: number;
	population: number;
}

type StarshipDetailsProps = {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: number;
	length: number;
	max_atmosphering_speed: number;
	crew: string;
	passengers: number;
	cargo_capacity: number;
	consumables: string;
	hyperdrive_rating: number;
	mglt: number;
	starship_class: string;
}

type VehicleDetailsProps = {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: number;
	length: number;
	max_atmosphering_speed: number;
	crew: number;
	passengers: number;
	cargo_capacity: number;
	consumables: string;
	vehicle_class: string;
}

export {SpeciesDetailsProps, CharacterDetailsProps, PlanetDetailsProps, StarshipDetailsProps, VehicleDetailsProps};