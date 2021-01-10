var userInput = prompt("Enter a number???")
function factorialize(userInput) {
    var myNum = 1;
    for (var i =1; i<= userInput; i++){
        myNum = myNum * i;
    }
    return myNum;
}
var factorizeValue =factorialize(userInput);
console.log(factorizeValue);