var userInput = prompt("Input Your name??")
var userInput1 = prompt("Input Your Date of birth(Date)??")
var userInput2 = prompt("Input Your Date of birth??(Month)")
var userInput3 = prompt("Input Your Date of birth(Year)??")
var time = new Date();
var time2 = new Date(userInput3,userInput2 - 1,userInput1);


var days = time.getTime() - time2.getTime();

var days2 = Math.floor(days / (1000 * 3600 * 24)); 
  
var getYear = time.getFullYear() - userInput3 - 1;

var name1 = "Hello "+ userInput;
var dob =    time2.setDate(userInput1);


var dobMonth = time2.setMonth(userInput2 - 1);
var dobYear = time2.setFullYear(userInput3 );

if(time2.getHours() >= 05 && time2.getHours() < 12 ){

console.log( name1 + " Good Morning");


}

else if(time2.getHours() >= 12 && time2.getHours() < 16 ){

    console.log(name1  + " Good Afternoon");
    
    
    }

    else if(time2.getHours() >= 16 && time2.getHours() < 18 ){

        console.log(name1  +  " Good Afternoon");
        
        
        }
    else{

        console.log(name1  + " Good Night");


    }

    console.log("Your date of birth is " +time2);



    
var month2 =  time2.getMonth() + 1  ;
var changeMonth = 12 - month2;

var day1 = time.getDate();

var hours1 = time.getHours();
var minutes1 = time.getMinutes();
var seconds1 = time.getSeconds();
console.log("You are " + getYear + " Years " + changeMonth + " Months " + day1 +  " days " + hours1 + " Hours " + minutes1 + " Minutes " + seconds1 + " Seconds year old ");
console.log("Your age in days " + days2);




// Your birthday
var birthday = new Date(time2);

var today = new Date();

//Set current year or the next year if you already had birthday this year
birthday.setFullYear(today.getFullYear());


//Calculate difference between days
var daysLeft = Math.ceil((birthday - today) / (1000*60*60*24))


var hoursLeft = 23 - today.getHours() ;


var minutesLeft = 60 - today.getMinutes();
var secondsLeft = 60 - today.getSeconds();

var newYear = time.getFullYear() - userInput3;

if(birthday.getDate() === today.getDate()){

    console.log("Happy birthday you are " + newYear + "  Year old");



}
else{
    console.log(" How much time left in your next birthday? " + daysLeft + " Days " + hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " Seconds left");
}