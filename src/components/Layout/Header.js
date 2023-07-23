import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpg";

export default function Header() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="Delicious food" />
      </div>
    </React.Fragment>
  );
}
