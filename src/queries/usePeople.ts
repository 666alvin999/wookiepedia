import {useQuery} from "@tanstack/react-query";

export function usePeople() {
	return useQuery({
		queryKey: ["people"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/people/`);
			return await result.json();
		}
	});
}