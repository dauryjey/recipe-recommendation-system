import { useTheme } from "./hooks/use-theme"
import { useState } from "react"
import { MealCard } from "./components/MealCard"
import { useFetchMeal } from "./hooks/use-fetchMeal"

function App() {
  const { toggleTheme } = useTheme()
  const [_, setFavoritesMeals] = useState<Meal[]>([])
  const { data, error, isPending, isFetching, refetch } = useFetchMeal()

  const handleAddToFavorite = () => {
    setFavoritesMeals((prev) => {
      refetch()
      return [...prev, data as Meal]
    })
  }

  return (
    <>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main className="flex flex-col justify-center items-center h-screen">
        {isPending || isFetching ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <MealCard
              imgSrc={data.strMealThumb}
              title={data.strMeal}
              description={data.strInstructions}
              videoUrl={data.strYoutube}
              handleAddToFavorite={handleAddToFavorite}
            />
          </>
        )}
      </main>
    </>
  )
}

export default App
