import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter text..."
      className="border p-2 rounded-md"
    />
  );
};

export default Input;
