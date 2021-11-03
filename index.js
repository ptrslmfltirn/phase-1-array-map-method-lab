const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = function(input) {
//   const fixedTutorials = input.map(function(lines) {
//     const words = lines.split(" ");
//     words.map(function(word) {
//       return word[0].toUpperCase();});
//     }
//   )
//   return fixedTutorials
// }

const titleCased = () => {
  //splits each element in the initial array
  return tutorials.map((tutorial) => {
    //splits each individual line-array into an array of words
    return tutorial.split(" ").map((word) => {
      //uppercases the first letter of each word-array
      return `${word[0].toUpperCase()}${word.slice(1)}`
      //now put humpty-dumpty back together
      
  }
  ).join(' ');
});
};