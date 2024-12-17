// Code your solutions in this file
function writeCards(names, eventName) {
    // Create an empty array to hold the messages
    let messages = [];
  
    // Iterate through the names array
    for (let i = 0; i < names.length; i++) {
      // Create the message using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  
      // Add the message to the messages array
      messages.push(message);
    }
  
    // Return the array of messages
    return messages;
  }
  
  // Example usage
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number){
    while(number>=0){
         console.log(number);
         number--;
    }
}
countDown(10);
  

