var userInput = prompt("Enter a first number");
var userInput2 = prompt("Enter second number");
var userInput3 = prompt("Which type of calculation you want '+,-,/,%' ");
if(userInput3 == "+"){


    console.log(Number(userInput) + Number(userInput2));
    




}
else if(userInput3 == "-"){


    console.log(Number(userInput) - Number(userInput2));

}


else if(userInput3 == "/"){


    console.log(Number(userInput) / Number(userInput2));

}


else if(userInput3 == "*"){


    console.log(Number(userInput) * Number(userInput2));

}
else if(userInput3 == "%"){


    console.log(Number(userInput) % Number(userInput2));

}