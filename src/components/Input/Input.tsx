import { useState } from "react";
import isPalindrome from "../../utils/palindromeChecker";

interface InputProps {
  setResult: (result: boolean) => void;
}

const Input = ({ setResult }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    const result = isPalindrome("userInput");
    setResult(result);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleChange}>Check</button>
    </div>
  );
};

export default Input;
