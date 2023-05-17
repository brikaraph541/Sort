function sortInnerContent(str) {
  return str
    .split(" ")
    .map(word => {
      if (word.length <= 2) {
        return word;
      }
      const innerContent = word.slice(1, -1).split("").sort().reverse().join("");
      return word[0] + innerContent + word[word.length - 1];
    })
    .join(" ");
}


console.log(sortInnerContent("sort the inner content in descending order"));
// Output: "srot the inner ctonnet in dsnnieedcg oredr"

console.log(sortInnerContent("wait for me"));
// Output: "wiat for me"

console.log(sortInnerContent("this kata is easy"));
// Output: "tihs ktaa is esay"
