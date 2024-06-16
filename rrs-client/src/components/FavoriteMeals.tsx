interface FavoriteMealsListProps {
  favoriteMeals: Meal[]
}

export const FavoriteMealsList = ({ favoriteMeals }: FavoriteMealsListProps) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">Favorite Meals</h2>
      <ul>
        {favoriteMeals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  )
}
