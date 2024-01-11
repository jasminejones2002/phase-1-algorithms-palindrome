function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  define variable to store reversed word
  use a combination of .split(), .reverse(), and .reverse() to reverse the given string
  use if/else statements to return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
