import React from "react";

const TextInput = props => (
  <input
    name={props.name}
    type={props.type}
    value={props.value}
    className={`__text-input ${props.className}`}
    placeholder={props.placeholder}
    onChange={props.handleChange}
		style={props.style}
  />
);

export default TextInput;
