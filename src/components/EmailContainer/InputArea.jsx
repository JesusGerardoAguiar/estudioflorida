import React from "react";
import { TextArea } from "./style";

const InputArea = ({ placeholder, name, field, setField }) => {
  return (
    <TextArea
      multiline
      name={name}
      placeholder={placeholder}
      required
      value={field}
      onChange={e => setField(e)}
    />
  );
};

export default InputArea;
