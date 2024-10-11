//Logic to get computer choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  const computerRandomChoice = choices[randomChoice];
  return computerRandomChoice;
};
console.log(getComputerChoice());
