import React, { useReducer, useContext, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  const amountInputRef = useRef();

  function addItemHandler() {
    props.onAddToCard(amountInputRef.current.value);
  }

  return (
    <form className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button type="button" onClick={addItemHandler}>
        + Add
      </button>
    </form>
  );
}
