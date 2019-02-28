import React from "react";
import "./styles.css";
import TextInput from "./../text-input/TextInput";

const EmailInput = props => {
  return (
    <TextInput
      name={props.name}
      type="text"
      value={props.value}
      className="__email-input"
      placeholder={props.placeholder}
      handleChange={props.handleChange}
    />
  );
};

export default EmailInput;
