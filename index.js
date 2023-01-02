function isPalindrome(word) {
  let normalOrderWord = word
  let reverseOrderWord = word.split("").reverse().join("");
  return normalOrderWord === reverseOrderWord;
}

/*
Function that takes any string as an argument
Code reads the string = Variable A
Code reverses the string = Variable B
If Variable A = Variable B, True
If Variable A =/ Variable B, False
*/

/*
Reverse the string passed to the isPalindrome function, then set equal to normal order string
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