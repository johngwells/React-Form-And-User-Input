import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: lastInputIsInvalid,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastInputBlurHandler,
    reset: resetLast
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.includes('@'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredLastIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredLast);
    console.log(enteredEmail);
    resetName();
    resetLast();
    resetEmail();
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastInputClass = lastInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameInputBlurHandler}
            onChange={nameChangeHandler}
          />
        </div>
        {nameInputIsInvalid && (
          <p className="error-text">Name field can not be empty.</p>
        )}
        <div className={lastInputClass}>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            value={enteredLast}
            onBlur={lastInputBlurHandler}
            onChange={lastChangeHandler}
          />
        </div>
        {lastInputIsInvalid && (
          <p className="error-text">Last name can not be empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" value={enteredEmail} onBlur={emailInputBlurHandler} onChange={emailChangeHandler} />
      </div>
      {emailInputIsInvalid && <p className='error-text'>Email must include '@'</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
