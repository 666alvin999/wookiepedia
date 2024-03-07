import {useQuery} from "@tanstack/react-query";

export function useSpecies(id?: number) {
	return useQuery({
		queryKey: ["species"],
		queryFn: async () => {
			const url = id ? `https://swapi.py4e.com/api/species/${id}` : `https://swapi.py4e.com/api/species/?limit=10`

			const result = await fetch(url);
			return await result.json();
		}
	});
}