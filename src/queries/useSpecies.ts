import {useQuery} from "@tanstack/react-query";

export function useSpecies() {
	return useQuery({
		queryKey: ["species"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/species/?limit=10`);
			return await result.json();
		}
	});
}