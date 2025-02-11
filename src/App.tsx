import React, { useState } from "react";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import { isPalindrome } from "./utils/palindromeChecker";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheck = () => {
    setResult(isPalindrome(text));
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleCheck}>Check</button>
      <Result isPalindrome={result} />
    </div>
  );
};

export default App;
