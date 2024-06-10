import { useQuery } from "@tanstack/react-query"

export const useFetchMeal = () => {
  return useQuery({
    queryKey: ["meal"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    queryFn: async (): Promise<Meal> => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      )

      const data: apiMeal = await response.json()
						
      return data.meals[0]
    },
  })
}
