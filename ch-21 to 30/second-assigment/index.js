
    


var  userInput  =  prompt("Write a alphabet");
var  alphabet = userInput.split(" ");


for (let i = 0; i < alphabet.length; i++) {
    alphabet[i] = alphabet[i][0].toUpperCase() + alphabet[i].substr(1);
}

var capitalLetter = alphabet.join(" ");
console.log(capitalLetter);
