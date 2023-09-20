import { useState } from "react";
import FormInput from "./FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      label: "Enter your Name",
      name: "username",
      type: "text",
      errorMessage:
        "include only letters and the characters shoud be more than 3",
      pattern: "^[a-zA-Z]{4,}$",
      required: true,
    },
    {
      id: 2,
      label: "Enter Email Address",
      name: "email",
      type: "email",
      errorMessage: "Enter a valid Email address",
      required: true,
    },
    {
      id: 3,
      label: "Enter Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      id: 4,
      label: "Enter Password ",
      name: "password",
      type: "password",
      required: true,
      errorMessage:
        "include 1 letter 1 uppercase 1 special character and min 8 characters",
      pattern: "^(?=.*[a-zA-Z])(?=.*[^a-zA-Z])(?=.*[A-Z]).{8,}$",
    },
    {
      id: 5,
      label: "Confirm Password ",
      name: "confirmPassword",
      type: "password",
      pattern: values.password,
      errorMessage: "check your password",
      required: true,
    },
  ];

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value, focused: true });

    console.log(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="parent">
      <center>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              input={input}
              key={input.id}
              values={values}
              onChange={onChange}
            />
          ))}
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </center>
    </div>
  );
}

export default App;
