import React, { useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

export default function AvailableMeals() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99
    }
  ];

  const [mealsList, setMealsList] = useState(DUMMY_MEALS);

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {mealsList.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              des={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}
