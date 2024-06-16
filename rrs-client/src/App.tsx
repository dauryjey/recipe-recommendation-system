import { useTheme } from "./hooks/use-theme"
import { useEffect, useState } from "react"
import { MealCard } from "./components/MealCard"
import { useFetchMeal } from "./hooks/use-fetchMeal"
import { ThemeBtn } from "./components/ThemeBtn"

function App() {
  const { theme, toggleTheme } = useTheme()
  const [favoriteMeals, setFavoritesMeals] = useState<Meal[]>(
    () => {
      const favoriteMeals = localStorage.getItem("favoriteMeals")
      return favoriteMeals ? JSON.parse(favoriteMeals) : []
    }
  )
  const { data, error, isPending, isFetching, refetch } = useFetchMeal()

  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals))
  }, [favoriteMeals])

  const handleAddToFavorite = () => {
    setFavoritesMeals((prev) => {
      return [...prev, data as Meal]
    })

    refetch()
  }

  if (favoriteMeals.includes(data as Meal)) {
    refetch()
  }

  return (
    <>
      <header>
        <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main className="flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Favorite Meals</h2>
          <ul>
            {favoriteMeals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        </div>
        {isPending || isFetching ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <MealCard
            imgSrc={data.strMealThumb}
            title={data.strMeal}
            category={data.strCategory}
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
