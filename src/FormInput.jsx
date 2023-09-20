import { useState } from "react";
import "./FormInputStyle.css";

function FormInput({ input, onChange }) {
  const { label, id, errorMessage, required, ...other } = input;
  const [focused, setFocused] = useState("false");

  function handleFocus() {
    setFocused("true");
  }

  return (
    <div className="item">
      <label htmlFor={id}>{label}</label>
      <input
        {...other}
        id={id}
        onChange={onChange}
        onBlur={handleFocus}
        required={required}
        focused={focused}
      />
      <br />
      <span>{errorMessage}</span>
      <br />
    </div>
  );
}

export default FormInput;
