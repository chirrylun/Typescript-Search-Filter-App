import React from "react";
interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <input
    className="p-2 font-sans border border-white rounded-md"
      type="text"
      placeholder="Enter search keyword"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputField;
