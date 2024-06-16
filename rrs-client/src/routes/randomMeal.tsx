import { useEffect, useState } from "react"
import { MealCard } from "@/components/MealCard"
import { useFetchMeal } from "@/hooks/use-fetchMeal"

export const RandomMeal = () => {
  const [favoriteMeals, setFavoritesMeals] = useState<Meal[]>(() => {
    const favoriteMeals = localStorage.getItem("favoriteMeals")
    return favoriteMeals ? JSON.parse(favoriteMeals) : []
  })
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
    </>
  )
}
