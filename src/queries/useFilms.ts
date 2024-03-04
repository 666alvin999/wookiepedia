import { useQuery } from "@tanstack/react-query";

export function useFilms() {
	return useQuery({
		queryKey: ["films"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/films/`);
			return await result.json();
		}
	});
}