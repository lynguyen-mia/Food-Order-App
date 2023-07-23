import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
  const ctx = useContext(CartContext);
  const addToCardHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount // convert to number
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.des}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <MealItemForm id={props.id} onAddToCard={addToCardHandler} />
    </li>
  );
}
