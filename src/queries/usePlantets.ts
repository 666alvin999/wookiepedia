import { useQuery } from "@tanstack/react-query";

export function usePlanets() {
	return useQuery({
		queryKey: ["planets"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/planets/`);
			return await result.json();
		}
	});
}