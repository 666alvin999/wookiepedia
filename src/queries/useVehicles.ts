import {useQuery} from "@tanstack/react-query";

export function useVehicles(id?: number) {
	return useQuery({
		queryKey: ["vehicles"],
		queryFn: async () => {
			const url = id ? `https://swapi.py4e.com/api/starships/${id}` : `https://swapi.py4e.com/api/starships/?limit=10`

			const result = await fetch(url);
			return await result.json();
		}
	});
}