import {useQuery} from "@tanstack/react-query";

export function useDetails(url: string) {
	return useQuery({
		queryKey: ["details"],
		queryFn: async () => {
			const result = await fetch(url);
			return await result.json();
		}
	});
}