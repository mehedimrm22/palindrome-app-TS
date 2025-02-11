export const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
