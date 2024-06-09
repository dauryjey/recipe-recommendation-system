import { useQuery } from "@tanstack/react-query"
import { useTheme } from "./hooks/use-theme"
import { useState } from "react"
import { IMeals } from "./types/meals"

function App() {
  const { toggleTheme } = useTheme()
  const [favoritesMeals, setFavoritesMeals] = useState<Meal[]>([])

  const handleAddToFavorite = () => {
    setFavoritesMeals((prev) => {
      return [...prev, data![0]]
    })

    refetch()
  }

  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["meal"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    queryFn: async (): Promise<Meal[]> => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      )

      const data = await response.json()

      if (
        favoritesMeals.find(
          (meal: Meal) => meal.idMeal === data.meals[0].idMeal
        )
      ) {
        refetch()
      }

      return data.meals
    },
  })

  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
      <main className="flex flex-col justify-center items-center h-screen">
        <p>Favorite Meals</p>
        {favoritesMeals.map((meal) => (
          <p key={meal.idMeal}>{meal.strMeal}</p>
        ))}
        {isPending || isFetching ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            <h1>{data[0].strMeal}</h1>
            <img src={data[0].strMealThumb} alt={data[0].strMeal} />
            <button onClick={handleAddToFavorite}>Add to favorite</button>
          </div>
        )}
      </main>
    </>
  )
}

export default App
