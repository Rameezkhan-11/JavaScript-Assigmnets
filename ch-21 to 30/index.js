var userInput = Number(prompt("Enter a number in decimal points"));
var roundedValue = Math.ceil(userInput)

var dummyText = "Rameez khan"
var changedText = dummyText.slice(0,roundedValue);
console.log(dummyText);
for(var i = 0; i <=changedText.length; i++){
   changedText = changedText.split("")
     var reverseText =   changedText.reverse();
   
   var slicedText =  changedText.join("");
    
    alert(slicedText);
   break;


}