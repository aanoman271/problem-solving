const vowelCount = (string) => {
  const vowels = "aeiou";
  const filtaredVowels = [...string.toLowerCase()].filter((v) =>
    vowels.includes(v),
  );
  return filtaredVowels.length;
};
console.log(vowelCount("programming"));
