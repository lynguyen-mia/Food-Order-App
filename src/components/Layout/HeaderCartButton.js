import React, { useState, useContext, useEffect } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton() {
  const [openModal, setOpenModal] = useState(false);

  const ctx = useContext(CartContext);
  const cartItemNumber = ctx.items.reduce((acc, item) => acc + item.amount, 0);

  function toggleCart() {
    setOpenModal((prevState) => !prevState);
  }

  useEffect(() => {
    const timeOut = setTimeout(
      () =>
        document
          .getElementById("header-cart-btn")
          .classList.remove(styles.bump),
      300
    );

    return () => {
      document.getElementById("header-cart-btn").classList.add(styles.bump);
      clearTimeout(timeOut);
    };
  }, [cartItemNumber]);

  return (
    <React.Fragment>
      <button
        className={styles.button}
        onClick={toggleCart}
        id="header-cart-btn"
      >
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{cartItemNumber}</span>
      </button>

      {openModal && <Cart onCloseCart={toggleCart} />}
    </React.Fragment>
  );
}
