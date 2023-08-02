import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

export default function AvailableMeals() {
  // const DUMMY_MEALS = [
  //   {
  //     id: "m1",
  //     name: "Sushi",
  //     description: "Finest fish and veggies",
  //     price: 22.99
  //   },
  //   {
  //     id: "m2",
  //     name: "Schnitzel",
  //     description: "A german specialty!",
  //     price: 16.5
  //   },
  //   {
  //     id: "m3",
  //     name: "Barbecue Burger",
  //     description: "American, raw, meaty",
  //     price: 12.99
  //   },
  //   {
  //     id: "m4",
  //     name: "Green Bowl",
  //     description: "Healthy...and green...",
  //     price: 18.99
  //   }
  // ];

  const [mealsList, setMealsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, hasError] = useState(false);

  // Fetch meal data
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://react-food-app-18b02-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        if (!res.ok) {
          throw new Error("Request failed!");
        }

        const data = await res.json();
        for (const key in data) {
          setMealsList((prevMeals) => [...prevMeals, data[key]]);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        hasError(err.message);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className={styles.meals}>
      <Card>
        {isLoading && !error && <p>Loading...</p>}
        {error && <p>{error}</p>}
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
