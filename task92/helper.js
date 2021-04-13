import readlineSync from "readline-sync";
//import readline-sync as readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
  const name = readlineSync.question("Please enter your name: ");

  console.log(`Hello, ${name}!`);
};
