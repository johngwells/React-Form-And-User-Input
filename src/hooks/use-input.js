import { useState, useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false
};

const reducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialState;
};

const useInput = (validateValue) => {
  // useReducer - Just for practice
  const [state, dispatch] = useReducer(reducer, initialState);

  // useState
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
