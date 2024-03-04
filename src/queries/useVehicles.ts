import { useQuery } from "@tanstack/react-query";

export function useVehicles() {
	return useQuery({
		queryKey: ["vehicles"],
		queryFn: async () => {
			const result = await fetch(`https://swapi.py4e.com/api/vehicles/`);
			return await result.json();
		}
	});
}