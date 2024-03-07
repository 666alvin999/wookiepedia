import {useQuery} from "@tanstack/react-query";

function getRandomInt(max: number) {
	return Math.floor((Math.random() * max) + 1);
}

export function useRandom() {
	return useQuery({
		queryKey: ["random"],
		queryFn: async () => {
			const url = `https://swapi.py4e.com/api/people/${getRandomInt(10)}`;
			const result = await fetch(url);
			return await result.json();
		}
	});
}