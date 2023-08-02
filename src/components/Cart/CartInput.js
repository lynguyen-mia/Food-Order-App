import useInput from "../Hooks/use-input";
import styles from "./CartInputForm.module.css";

const CartInputForm = (props) => {
  const validateInputFn = (value) => value.trim() !== "";
  const validatePostalFn = (value) => value.trim().length >= 5;
  const {
    enteredValue: nameValue,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    onValueChangeHandler: nameChangeHandler,
    onBlurHandler: onNameBlurHandler,
    reset: resetName
  } = useInput(validateInputFn);

  const {
    enteredValue: streetValue,
    valueIsValid: streetIsValid,
    hasError: streetHasError,
    onValueChangeHandler: onStreetChangeHandler,
    onBlurHandler: onStreetBlurHandler,
    reset: resetStreet
  } = useInput(validateInputFn);

  const {
    enteredValue: postalValue,
    valueIsValid: postalIsValid,
    hasError: postalHasError,
    onValueChangeHandler: onPostalChangeHandler,
    onBlurHandler: onPostalBlurHandler,
    reset: resetPostal
  } = useInput(validatePostalFn);

  const {
    enteredValue: cityValue,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    onValueChangeHandler: onCityChangeHandler,
    onBlurHandler: onCityBlurHandler,
    reset: resetCity
  } = useInput(validateInputFn);

  const nameClass = nameHasError
    ? styles["form-control"]
    : styles["form-control"];
  const streetClass = streetHasError
    ? styles["form-control"]
    : styles["form-control"];
  const postalClass = postalHasError
    ? styles["form-control"]
    : styles["form-control"];
  const cityClass = cityHasError
    ? styles["form-control"]
    : styles["form-control"];

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    // reset input fields
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div>
        <div className={nameClass}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={onNameBlurHandler}
            value={nameValue}
          />
          {nameHasError && (
            <p className={styles["error-text"]}>Please enter a valid name.</p>
          )}
        </div>

        <div className={streetClass}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={streetValue}
            onChange={onStreetChangeHandler}
            onBlur={onStreetBlurHandler}
          />
          {streetHasError && (
            <p className={styles["error-text"]}>Please enter a valid street.</p>
          )}
        </div>
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal code</label>
        <input
          type="text"
          id="postal"
          value={postalValue}
          onChange={onPostalChangeHandler}
          onBlur={onPostalBlurHandler}
        />
        {postalHasError && (
          <p className={styles["error-text"]}>
            Postal code must have more than 5 characters.
          </p>
        )}
      </div>

      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={onCityChangeHandler}
          onBlur={onCityBlurHandler}
        />
        {cityHasError && (
          <p className={styles["error-text"]}>Please enter a valid city.</p>
        )}
      </div>

      <div className={styles["form-actions"]}>
        <button onClick={props.onCloseForm}>Cancel</button>
        <button disabled={!formIsValid} onClick={props.onOrderSucess}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CartInputForm;
