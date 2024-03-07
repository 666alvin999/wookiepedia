import {useQuery} from "@tanstack/react-query";

export function usePlanets(id?: number) {
	return useQuery({
		queryKey: ["planets"],
		queryFn: async () => {
			const url = id ? `https://swapi.py4e.com/api/planets/${id}` : `https://swapi.py4e.com/api/planets/?limit=10`

			const result = await fetch(url);
			return await result.json();
		}
	});
}