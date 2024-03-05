import {useQuery} from "@tanstack/react-query";

export function useCharacters() {
	return useQuery({
		queryKey: ["people"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/people/?limit=10`);
			return await result.json();
		}
	});
}