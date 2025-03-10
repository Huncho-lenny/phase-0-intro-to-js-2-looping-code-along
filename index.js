// Description: This file contains the implementation of the functions that are used to write messages to a list of names and count down from a given number.
function writeCards(names, event) {
  let messages = []; // Initialize an empty array to store messages
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages; // Return the array of messages
}

function countDown(number) {
  while (number >= 0) {
    console.log(number); // Log each number
    number--; // Decrease the number
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { writeCards, countDown };
}
