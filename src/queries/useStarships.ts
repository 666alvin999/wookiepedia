import {useQuery} from "@tanstack/react-query";

export function useStarships() {
	return useQuery({
		queryKey: ["starships"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/starships/?limit=10`);
			return await result.json();
		}
	});
}