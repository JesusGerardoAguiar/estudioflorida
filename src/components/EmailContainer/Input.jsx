import React from "react";
import { InputField } from "./style";

const Input = ({ placeholder, name, field, setField }) => {
  return (
    <InputField
      name={name}
      placeholder={placeholder}
      required
      value={field}
      onChange={e => setField(e)}
    />
  );
};

export default Input;
