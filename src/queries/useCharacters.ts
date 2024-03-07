import {useQuery} from "@tanstack/react-query";

export function useCharacters(id?: number) {
	return useQuery({
		queryKey: ["people"],
		queryFn: async () => {
			const url = id ? `https://swapi.py4e.com/api/people/${id}` : `https://swapi.py4e.com/api/people/?limit=10`

			const result = await fetch(url);
			return await result.json();
		}
	});
}