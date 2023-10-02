// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
  // Your codes here.

  // This will verify whether the input is a string or not.
  if (typeof str !== 'string') {
    console.log(`The given value: '${str}' is not a string! The expected data type of the value is string.`);
    return;
  
}

// Eliminate spaces and change to lowercase for comparison that is not sensitive to letter case.
const formattedStr = str.replace(/ /g, '').toLowerCase();

// Set up two pointers to perform comparisons.
let left = 0;
let right = formattedStr.length - 1;

// Verify whether the string forms a palindrome.
while (left < right) {
  if (formattedStr[left] !== formattedStr[right]) {
    console.log(`The given string: '${str}' is not an example of a palindrome`);
    return;
  }
  left++;
  right--;
}

// If the loop finishes without a return, it indicates that the string is a palindrome.
const reversedStr = formattedStr.split('').reverse().join('');
console.log(`The given string: '${str}' is an example of a palindrome, the reversed value is: '${reversedStr}'`);
}


// This will call the function and pass an argument.
isPalindrome("rotator"); // Example of a palindrome
isPalindrome("reynmar");   // Not a palindrome
isPalindrome(12345);     // Not a string
