import { useTheme } from "./hooks/use-theme"
import { useState } from "react"
import { MealCard } from "./components/MealCard"
import { useFetchMeal } from "./hooks/use-fetchMeal"
import { Button } from "@nextui-org/button"
import { ThemeBtn } from "./components/ThemeBtn"

function App() {
  const { theme, toggleTheme } = useTheme()
  const [favoriteMeals, setFavoritesMeals] = useState<Meal[]>([])
  const { data, error, isPending, isFetching, refetch } = useFetchMeal()

  const handleAddToFavorite = () => {
    setFavoritesMeals((prev) => {
      refetch()
      return [...prev, data as Meal]
    })
  }

  if (favoriteMeals.includes(data as Meal)) {
    refetch()
  }

  return (
    <>
      <header>
        <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main className="flex flex-col justify-center items-center h-[90vh]">
        {isPending || isFetching ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <MealCard
            imgSrc={data.strMealThumb}
            title={data.strMeal}
            description={data.strInstructions}
            videoUrl={data.strYoutube}
            handleAddToFavorite={handleAddToFavorite}
          />
        )}
      </main>
    </>
  )
}

export default App
