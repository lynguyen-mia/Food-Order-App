import React, { useState, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CartInputForm from "./CartInput";

export default function Cart(props) {
  const [openForm, setOpenForm] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const ctx = useContext(CartContext);
  const hasItemValue = ctx.items.length > 0;

  const orderSuccess = () => {
    setOpenForm(false);
    ctx.items = [];
    ctx.totalAmount = 0;
    setOrdered(true);
  };

  return (
    // Pass function to close cart to Modal
    <Modal onClose={props.onCloseCart}>
      {!ordered && (
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
      )}

      {!ordered && (
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
      )}

      {ordered && <p>Order succeeded! Thank you.</p>}

      {openForm && (
        <CartInputForm
          onCloseForm={props.onCloseCart}
          onOrderSucess={orderSuccess}
        />
      )}

      {!openForm && (
        <div className={styles.actions}>
          <button className={styles["button-alt"]} onClick={props.onCloseCart}>
            Close
          </button>
          {hasItemValue && (
            <button className={styles.button} onClick={() => setOpenForm(true)}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}
