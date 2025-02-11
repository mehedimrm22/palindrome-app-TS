import React from "react";

interface ResultProps {
  isPalindrome: boolean | null;
}

const Result: React.FC<ResultProps> = ({ isPalindrome }) => {
  return (
    <div>
      {isPalindrome === null ? null : isPalindrome ? (
        <p>It's a palindrome!</p>
      ) : (
        <p>Not a palindrome</p>
      )}
    </div>
  );
};

export default Result;
