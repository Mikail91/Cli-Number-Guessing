#!/usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a Number from 1 - 20",
        type: "number",
        name: "userNum",
    },
]);
if (answer.userNum === randomNum) {
    console.log("Congratulations you have guessed correct number");
}
else {
    console.log("Please try again, the correct value is");
    console.log(randomNum);
}
