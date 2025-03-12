//1.Dposit some money
//2.Collect a bet amount
//3.Spin the slot machine
// 4.check if user won
//5. give user their winnings
//6.play again
//7.determin the number of lines to bet on
const prompt = require("prompt-sync")();
const ROWS = 3
const COLS = 3
const SYMBOLS__COUNT = {
 A: 2,
 B: 4,
 C: 8,
 D: 10
}
const SYMBOLS__Value = {
 A: 3,
 B: 5,
 C: 7,
 D: 9
}

const deposit = () => {
 while (true) {
  const depositAmount = prompt("Enter the num : ")
  const depositAmountParse = parseFloat(depositAmount);
  if (isNaN(depositAmountParse) || depositAmountParse <= 0) {
   console.log("Invalid input!!, try again");
  } else {
   return depositAmountParse;
  }
 }
}
const getLines = () => {
 while (true) {
  const lineNo = prompt("Enter the number of lines(1-3) : ")
  const numberOfLines = parseFloat(lineNo);
  if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
   console.log("Invalid input!!, Please select line number from 1-3.");
  } else {
   return numberOfLines;
  }
 }
}
const getBet = (balance, lines) => {
 while (true) {
  const betAmount = prompt("Enter the number : ")
  const betAmountParse = parseFloat(betAmount);
  if (isNaN(betAmountParse) || betAmountParse <= 0 || betAmount > (balance / lines)) {
   console.log("Invalid input!!, try again");
  } else {
   return betAmountParse;
  }
 }
}
const spin = () => {
 const symbols = []
 for (const [key, value] of Object.entries(SYMBOLS__COUNT)) {
  for (let i = 0; i < value; i++) {
   symbols.push(key)
  }
 }
 const reels = [[], [], []]
 for (let i = 0; i < COLS; i++) {
  const reelSymbols = [...symbols]
  for (let j = 0; j < ROWS; j++) {
   const randomIndex = Math.floor(Math.random() * reelSymbols.length)
   // console.log(randomIndex);
   const selectedSymbol = reelSymbols[randomIndex]
   reels[i].push(selectedSymbol)
   reelSymbols.splice(randomIndex, 1)
  }
 }
 return reels
}
const reels = spin()
console.log(reels);

let  balance = deposit()
const lines = getLines()
const betAmount = getBet(balance, lines)



