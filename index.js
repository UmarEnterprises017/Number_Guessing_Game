#! /user/bin/env node
// import inquirer from "inquirer";
// const maxGuesses = 3;
// const randomNumber: number = Math.floor(Math.random() * 10);
// type numType = {
//     "userGuess": number
// }
// async function guessNumber() {
//     let guessLeft = maxGuesses;
//     let correctGuess = false;
//     while(guessLeft > 0 && !correctGuess){
//         const answers: numType = await inquirer.prompt([{
//             type: "number",
//             name: "userGuess",
//             message: "Guess a number between 0 and 10 and write it (You have $(guessLeft) guesses left",
//         },
//     ]);
//     }
//     const {userGuess} = answers;
//     console.log(`Guessed No: ${userGuess}, Correct answer is: ${randomNumber}`);
//     if (userGuess === randomNumber){
//         console.log("Correct Answer, Congratlations , You have won!!!");
//         correctGuess = true; // Set the flag to true if the guess is right
//     } 
//     else {
//         console.log("Wrong Answer!!!");
//         guessLeft--;
//         if (guessLeft > 0 ){
//             console.log("You have $(guessLeft) guesses left");
//         }
//     }    
// }
// if(!correctGuess){
//     console.log("Out of Guesses, the correct number was &(randomNumber), better luck next time. ");
// }
import inquirer from "inquirer";
const maxGuesses = 3;
const randomNumber = Math.floor(Math.random() * 10);
let correctGuess = false;
async function guessNumber() {
    let guessLeft = maxGuesses;
    while (guessLeft > 0 && !correctGuess) {
        const answers = await inquirer.prompt([{
                type: "number",
                name: "userGuess",
                message: `Guess a number between 0 and 10 and write it (You have ${guessLeft} guesses left)`,
            }]);
        const { userGuess } = answers;
        console.log(`Guessed No: ${userGuess}, Correct answer is: ${randomNumber}`);
        if (userGuess === randomNumber) {
            console.log("Correct Answer, Congratulations, You have won!!!");
            correctGuess = true; // Set the flag to true if the guess is right
        }
        else {
            console.log("Wrong Answer!!!");
            guessLeft--;
            if (guessLeft > 0) {
                console.log(`You have ${guessLeft} guesses left`);
            }
        }
    }
    if (!correctGuess) {
        console.log(`Out of Guesses, the correct number was ${randomNumber}, better luck next time.`);
    }
}
guessNumber();
