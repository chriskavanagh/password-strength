import React from "react";
import "./styles.css";
import { strengthColor, strengthIndicator } from "./strength";
import TextInput from "./../text-input/TextInput";

const PasswordInput = props => {
  const strength = strengthIndicator(props.value);
  const color = strengthColor(strength);
  console.log(color)
  return (
    <TextInput
      name={props.name}
      type="password"
      value={props.value}
      className="__password-input"
      placeholder={props.placeholder}
      handleChange={props.handleChange}
      style={{border: `3px solid ${color}`}}
    />
  );
};

export default PasswordInput;
