"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) return;
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]); // Dependency array prevents infinite loops

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient || "..."}</h2>
      {ingredient === "" ? (
        <p>Select an item to see recipes!</p>
      ) : meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="p-2 bg-slate-800 rounded">{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p>No meals found for {ingredient}</p>
      )}
    </div>
  );
}