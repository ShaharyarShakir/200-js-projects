//1.Dposit some money
//2.Collect a bet amount
//3.Spin the slot machine
// 4.check if user won
//5. give user their winnings
//6.play again
//7.determin the number of lines to bet on
const prompt = require("prompt-sync")();
function deposit() {
 while (true) {
  const depositAmount = prompt("Enter the number: ")
  const depositAmountParse = parseFloat(depositAmount);
  if (isNaN(depositAmountParse) || depositAmountParse <= 0) {
   console.log("Invalid input!!, try again");

  } else {
   return depositAmountParse;
  }

 }
}
const amount = deposit()
console.log(amount);


