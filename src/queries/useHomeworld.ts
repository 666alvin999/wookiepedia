import {useQuery} from "@tanstack/react-query";

export function useHomeworld(url: string) {
	return useQuery({
		queryKey: ["people"],
		queryFn: async () => {
			const result = await fetch(url);
			return await result.json();
		}
	});
}