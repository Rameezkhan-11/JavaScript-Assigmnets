var userInput1 = prompt("Enter course number one??");
var userInput2 = prompt("Enter course number two??");
var userInput3 = prompt("Enter course number three??");
var userInput4 = prompt("Enter course number four??");
var userInput5 = prompt("Enter course number five??");
var courses = [];


for(var i = 0; i < 1; i++){

courses.push(userInput1,userInput2,userInput3,userInput4,userInput5);


}

alert("This is five courses" +courses);



var course1 = prompt("Course no 1 is ", courses[0] );
var course2 = prompt("Course no 2 is ", courses[1] );
var course3 = prompt("Course no 3 is ", courses[2] );
var course4 = prompt("Course no 4 is ", courses[3] );
var course5 = prompt("Course no 5 is ", courses[4] );


for(var i = 0; i < 1; i++){

    courses.splice(0,0,course1);
    courses.splice(1,1,course2);
    courses.splice(2,2,course3);
    courses.splice(3,3,course4);
    courses.splice(4,4,course5);



}
alert("Edited Courses "+ courses);