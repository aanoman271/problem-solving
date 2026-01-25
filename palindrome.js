const Palindrome = (word) => {
  return word === word.split("").reverse().join("");
};

console.log(Palindrome("madam"));
console.log(Palindrome("hello"));
