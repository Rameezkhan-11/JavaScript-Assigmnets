var userInput = prompt("Enter a word i will capitilize every first word");
var  alphabet = userInput.split(" ");
// var capitalLetter = alphabet.join(" ")







function Capital(){



    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = alphabet[i][0].toUpperCase() + alphabet[i].substr(1);
    }
    
   alphabet= alphabet.join(" ");
    console.log(alphabet);


}
Capital();