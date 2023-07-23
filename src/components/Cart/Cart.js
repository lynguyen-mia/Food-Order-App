import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

export default function Cart(props) {
  const ctx = useContext(CartContext);
  const hasItemValue = ctx.items.length > 0;

  return (
    // Pass function to close cart to Modal
    <Modal onClose={props.onCloseCart}>
      <ul className={styles["cart-items"]}>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={ctx.removeItem.bind(null, item.id)}
            onAdd={ctx.addItem.bind(null, { ...item, amount: 1 })}
          />
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItemValue && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
