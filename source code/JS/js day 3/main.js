/* introduction 
    == UU Developer vs Frontend Developr 
    == why Java Script
       - 
       -
       -
    ==  fields JS 
        -
        -
        -
    == Where write code java script
        -
        -
        - 
    == I P O ( )    
    


*/
// console.log(x);


// ========== OUTPUT METHODS ==========

// 1. Alert

// window.alert("Welcome to JavaScript!");

// 2. Modify HTML content

// document.getElementById("mainTitle").innerText = "Hello from JavaScript";

// 3. Console log
// console.log("Console says hi!");

// 4. Write to document (not recommended in real apps)
// document.write("<p>JS wrote this directly in the document.</p>");


// ========== VARIABLES AND DATA TYPES ==========

// Primitive Types
// let name = "Ahmed";   
// console.log(typeof name);

/* let age = 22
var age2 ="22"
console.log(typeof age2);
   
*/
// let isStudent = true;   
// console.log(typeof isStudent);

// let score = null; 
// console.log(typeof score);

// let score2 = undefined ;      
// console.log(score2);

// document.getElementById("mainTitle").innerText = score2;
// var x= 5;
// var y= "5";
// console.log(x == y);  // true
// console.log(x === y);  // false


// let grade;                   

// Non-Primitive Types
// let colors = ["red", "blue", "green"];  // array

// var arr1 = [1,"ss",{name:"wsdf"},[22,44],true]

// let person = { name: "Sara", age: 25 }; 

// // console.log(name, age, isStudent, score, grade);
// console.log(colors[0]); // red

// console.log(person.age); // 25
// function displayInfo( name ){
//   console.log(name);
// }

// displayInfo("Ahmed");

// var name=window.prompt("Please enter Name");
// console.log("welcome : "+ name);
// console.log(`Welcome : ${name}`);



// ========== CONCATENATION ==========


// let firstName = "Ali";
// let lastName = "Hassan";

// let fullName = firstName + " " + lastName; // Old way
// console.log("Full Name (concatenation): " + fullName);

// let modernFullName = `${firstName}   ${lastName}`; // Template literals
// console.log(modernFullName);

// console.log(`Full Name (template): ${modernFullName}`);
// var x ="5";
// var y =4 ;
// var result = x + y ;  //  edit 

// = Number(x) + y
// = +x + y
// parseInt(x)

// var w =10 ;
// var q = 20 ;
// var r = "30";
// var y = 40 ;
// var z =50 ;
// var result = (w + q) + r + (y +z ); //30 + "30" + 90 = 303090
// console.log(result);


// console.log(result); //  9


// ==========Input===============

// var clientName = prompt("Please Enter Your Name");

// console.log("client name = ",clientName);

// var inpuEleUserName=document.getElementById("username");
// console.log(inpuEleUserName);
// var clientName = inpuEleUserName.value ;
// console.log(clientName);

// function welcome(){
//    console.log(document.getElementById('username').value);

// }


// welcome("abdo");
// welcome("hend");
// welcome("hassan");
// welcome("mo");



// ========== IPO EXAMPLE ==========

// function sayHello() {
//   // INPUT
//   var name = document.getElementById("username").value;

//   // PROCESS
//   var message = "Hello " + name;

//   // OUTPUT
//   document.getElementById("result").innerText = message;

// }

// var isGraduated=confirm("graduated ?");
// console.log("isGraduated : ",isGraduated);


// ========== PRACTICE ACTIVITY ==========
// Ask user for input, then summarize
//Name: (yourName), Age: $(yourAge)







// var yourName = prompt("What is your name?");
// var yourAge = prompt("How old are you?");
// var isStudentPrompt = confirm("Are you a student?");

// var oldWaySummary = "Name : "+ yourName + ", Age: "+ yourAge + ", Student: "+ isStudentPrompt;
// console.log(oldWaySummary);

// var newWaySummary= `Name : ${yourName} ,Age: ${yourAge} , Student: ${isStudentPrompt}`;
// console.log(newWaySummary);

// var summary = `Name: ${yourName}, Age: ${yourAge}, Student: ${isStudentPrompt}`;
// alert(summary);
// console.log(summary);


// ========== CONDITIONAL STATEMENTS ==========

// Basic if/else example
// var name = "Samy"
// if(name == "Ahmed"){
//     console.log("welcome Ahmed");
// }else if (name == "Ali"){
//     console.log("welcome Ali");
    
// }else if (name == "Samy"){
//     console.log("welcome Samy");
    
// }else{
//     console.log("you not user");
// }

// var value = "5";
// var value_two = 5;
// if (value_two <10){
//   console.log("value2 less than 10");

// }else{
//   console.log("value2 greater than 10");

// }

// var age = prompt("please enter your age");
// console.log(typeof age);

// if (+age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }


// if / else if / else example

// var grade = prompt("plz enter your grade");

// if (grade >= 90) {
//   console.log("Grade: A+");
// } else if (grade >= 80) {
//   console.log("Grade: B");
// } else if (grade >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }

// Boolean condition example

// let hasAccount = false;
// let isVerified = false;

// if (hasAccount && isVerified) {
//   console.log("Welcome back!");
// } else if (hasAccount && !isVerified) {
//   console.log("Please verify your account.");
// } else {
//   console.log("Please sign up.");
// }


// var userBirthYear = prompt("plz enter your birth year");

// console.log(typeof userBirthYear); // date ; 

// var currentYear = new Date().getFullYear(); // 2025

// var age = currentYear - Number(userBirthYear) ;
// if (age > 60){
//   console.log("greater than 60");

// }else {
//   console.log("lessthan 60");

// }








// Interactive example using prompt


// var birthYear = prompt("Enter your birth year:");
// var currentYear = new Date().getFullYear();
// var userAge = currentYear - birthYear;

// if (userAge >= 60) {
//   alert("You are a senior citizen.");
// } else if (userAge >= 18) {
//   alert("You are an adult.");
// } else {
//   alert("You are underage.");
// }

// console.log(`Your age is: ${userAge}`);


// Nested condition


// var username = "admin";
// var password = "1234";

// if (username === "admin") {
//   if (password === "123") {
//     console.log("Login successful");
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   console.log("Username not found");
// }


// ========== SWITCH STATEMENT ==========
// var userName ="Ahmed"

// switch (userName){
//     case "Ahmed":
//         console.log("welcome Ahmed");
//         break;
//     case "ali":
//         console.log("welcome Ali");
//         break;
//     case "mo":
//         console.log("welcome moooo");
//         break;
//     default :
//       console.log("default message");
          
                 
// }

// var day = prompt("Enter a day of the week (e.g., Monday, Tuesday, etc.):");

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     break;
//   case "Tuesday":
//     console.log("Second day, let's keep going!");
//     break;
//   case "Wednesday":
//     console.log("Mid-week, you're doing great!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend! Time to relax.");
//     break;
//   default:
//     console.log("Invalid day! Please enter a valid weekday.");
// }


// **************************** Day 2 ***********************************

// ========== TERNARY OPERATOR ==========
// var x= 15;
// var y= 10;
// var finalResult = x > y ? "x greater than y" : "x lessthan y"
// console.log(finalResult);

// var result ;
// if (4<5) {
//     result = true
// } else {
//     result= false
// }
// console.log(result);

//  var result = 5>4  ? "samy" : "ali" ;
//  console.log(result);




// let age = prompt("How old are you?");
// age = Number(age);  

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);


// ========== Example with nested ternary ==========

// var timeOfDay = prompt("What time of the day is it? (Enter 'morning', 'afternoon', or 'night')").toLowerCase();




//  var greeting =  timeOfDay === "morning" ? "Good morning!" : timeOfDay === "afternoon" ? "Good afternoon!" : timeOfDay === "night" ? "Good night!" : "Hello!";

// var greating ;
// if(timeOfDay == "morning"){
//    greating = "good m"

// }else if (timeOfDay == "afternoon"){
//     greating = "good afternoon"
// }else if (timeOfDay == "night"){
// greating = "good night";

// }else{
//     greating = "hello"
// }

// console.log(greating);


// ========== OPERATORS ==========

// Arithmetic

var a = 12, b = "3" , c = "samy";
// // console.log("a + b =", a + +b);  // 

// console.log("a - b =", a - c);  //  NaN
// console.log(typeof NaN); 

// console.log("a * b =", a * b);
// console.log("a / b =", a / b);

// console.log("a % b =", a % b); 
// console.log("a ** b =", a ** b); 

// Comparison
// var a = 5;
// var b = "5";

// console.log(a === b);   
// console.log(a !== b); 
// console.log(a > b); 
// console.log(a < b);   
// console.log(a >= 5);  
// console.log(b <= 10); 

// Logical  && ||
// var isAdult = true;
// var hasTicket = false;
// console.log(isAdult && hasTicket); // false
// console.log(isAdult || hasTicket); //true
// console.log( !isAdult );      // false       

// Assignment

var num = 5;
// num += 2  //  num =  num +2;
// console.log(num);

//  num -= 3;  //  num  = num -3 
//  console.log(num);

// num *= 4;  // num  = num * 4;
// console.log(num); //20

// // num /= 2;  
// // console.log(num); // 10

// num %= 3; 
// console.log(num); // 2


// ========== False Values ==========
// 0 , null , undefined , NaN , '' , false 

// if ("") {
//     console.log(true);
// } else {
//     console.log(false); 
// }






  





// ========== Loops =================

// for(var i =0 ; i <=9 ;i++){
//     console.log("hello");
// }


// var parent = document.getElementById("parent");
// var copaya = '';
// for (var index = 0; index < 10; index++) {
//     copaya = copaya + '<h2> Child </h2>';
// }
// console.log(copaya);

// parent.innerHTML =copaya ;


// for (var x=1 ; x <= 10 ; x++){
//     if (!(x%2)) {
//         console.log(x);
//     }
// }

// for (var x=1 ; x<=10 ; x+=2){
//     console.log(x);
    
// }

// var parent = document.querySelector("#parent") ;
// var content = '';

// for (var i=0 ; i <20 ; i++){
//     var color ;
//     if (i % 2) {
//         color ="blue"
//     } else {
//         color = "red"
//     }
//     content += '<h2 style ="color:'+color+'"> NTI </h2>'
// }

// parent.innerHTML = content

// for ( ; false ; ){
//     console.log("Hi");
// }



// for ( ; ; ){
//     console.log("Hi");
// }



// var x = window.prompt();
// console.log( typeof NaN);


