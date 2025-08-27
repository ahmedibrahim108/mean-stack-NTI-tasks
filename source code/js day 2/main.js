/* introduction 
    == UI Developer vs Frontend Developer 
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

// console.log(document.getElementById("mainTitle"));

// document.getElementById("mainTitle").innerText = "Hello from JavaScript file";

// 3. Console log
// console.log("Console says hi!");

// 4. Write to document (not recommended in real apps)
// document.write("<h3>JS wrote this directly in the document.</h3>");


// ========== VARIABLES AND DATA TYPES ==========

// Primitive Types


// var name = "ahmed";   
// console.log(typeof name);

// var age = 25 ;
// console.log(age);
// console.log(typeof age); // number

// var first_name ="mohamed"
// var age2 ='22'
// console.log( first_name); // 


// var isStudent = true;   
// console.log(typeof isStudent);

// var score = null; 
// console.log(typeof score);  // object

// var score2 = undefined ;      
// console.log(typeof score2);

// document.getElementById("mainTitle").innerText = score;
// var x= 5;
// var y= "5";
// console.log(typeof x);
// console.log(typeof y);

// console.log(x == y);  
// console.log(x === y);  

// var col1 ="red";
// col1 = "green" //  immutable 
// col1 = "blue"


// Non-Primitive Types  mutable  
// var colors = ["red", "green",true , 25 ,undefined , null , {fName : "AHMED"} , [1,2,3,4]];  // array
// colors[0]="blue";
// console.log(colors);

// var arr1 = [1,"ss",{name:"wsdf"},[22,44],true]

// var person = { name: "Sara", age: 25};
// person.name ="Ali";
// console.log(person);

// // console.log(name, age, isStudent, score, grade);
// console.log(colors[2]); // red

// console.log(person.age); // 25
// function displayInfo( name ){
//   console.log(name);
// }

// displayInfo("Ahmed");
// var age =window.prompt("please enter your age");
// console.log("your age = ",age);

// var name=window.prompt("Please enter Name");
// console.log("welcome : "+ name);

// console.log(`Welcome : ${name}`);

// var fName = "ahmd";
// fName = "ahmed";
// console.log(fName[2]);
// fName.push("d")  // ERROR 
// console.log(fName);

// var numbers = [1,2,3,4];
// numbers.push(5)
// console.log(numbers);

// var name1 ="youssif";
// var name2 =name1 ;
// name2 = "samy"
// console.log(name1);
// console.log(name2);
// var user1 ={name:"ahmed"};
// var user2 = user1 ;
// user2.name = "samy"
// console.log("user1 = ",user1);
// console.log("user2 = ",user2);


// var user2 =Object.assign({},user1) ;
// user2.name ="samy";
// console.log(user2);
// console.log(user1);





// ========== CONCATENATION ==========


// var firstName = "Ali";
// var lastName = "Hassan";

// var fullName = firstName + " " + lastName; // Old way
// console.log("Full Name (concatenation): " + fullName);

// var modernFullName = `${firstName} ${lastName}`; // Template literals
// console.log(modernFullName);

// console.log(`Full Name (template): ${modernFullName}`);
// var x = "5";
// var y = 4;
// var result = y + x;
// var result2 = x + y;
// console.log(result);
// console.log(result2);
// console.log( Number(x) + y);  
// console.log( parseInt(x)  +y);
// console.log(+x + y);



// = Number(x) + y
// = +x + y
// parseInt(x)

// var w =10 ;
// var q = 20 ;
// var r = "30";
// var y = 40 ;
// var z =50 ;
// console.log(w + q + r + y + z);  

// var result = (w + q) + r + (y +z ); 
// console.log(result); 


// console.log(result); //  



// ========== OPERATORS ==========

// Arithmetic
// var a = 10, b = 3;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); // Power

// Comparison
// console.log(5 == "5");   
// console.log(5 === "5"); 
// console.log(5 != 6);     
// console.log(5 > 3);     

// Logical
// var isAdult = true;
// var hasTicket = false;
// console.log(isAdult && hasTicket); 
// console.log(isAdult || hasTicket); 
// console.log(!isAdult);

// Assignment
// var num = 20;

// num += 10;
// num *= 2;
// console.log("Final num:", num);


// ========== IPO EXAMPLE ==========



// function sayHello() {
//     // INPUT
//     var name = document.getElementById("username").value;

//     // PROCESS
//     var message = "Hello " + name;

//     // OUTPUT
//     document.getElementById("result").innerText = message;
//     console.log(message);
// }


// var isGraduated=confirm("graduated ?");
// console.log("isGraduated : ",isGraduated);


// ========== PRACTICE ACTIVITY ==========
// Ask user for input, then summarize
//Name: (yourName), Age: $(yourAge)


// var fname = "Ali";
// var lname = "hassan";
// var fullName = fname + " " +lname  // old way 
// var fullName = `hello  ${fname} ${lname}`
// console.log(fullName);




// var yourName = prompt("What is your name?");
// var yourAge = prompt("How old are you?");
// var isStudentPrompt = confirm("Are you a student?");

// var summary = `Name: ${yourName}, Age: ${yourAge}, Student: ${isStudentPrompt}`;
// // alert(summary);
// console.log(summary);





// ========== CONDITIONAL STATEMENTS ==========

// Basic if/else example

// var value = "5";
// var value_two = 5;
// if (value === value_two){
//   console.log("equal");
// }else{
//   console.log("not equal");
// }

// var age = 10;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }


// if / else if / else example

// var grade = 95;

// if (grade >= 90) {
//   console.log("Grade: A");
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

// var currentYear = new Date().getFullYear();
// console.log(currentYear);

// var age = currentYear - Number(userBirthYear) ;
// if (age > 60){
//   console.log("greater than 60");

// }else {
//   console.log("lessthan 60");

// }








// Interactive example using prompt


// let birthYear = prompt("Enter your birth year:");
// let currentYear = new Date().getFullYear();
// let userAge = currentYear - birthYear;

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
//   if (password === "1234") {
//     console.log("Login successful");
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   console.log("Username not found");
// }


// var dayy =prompt()
// switch (dayy) {
//   case "monday":
//     console.log("wdskcm");
//     break;
//   case "tuesday":
//     console.log("tuesday");
//     break;
//   default:
//     console.log("defualt value");
// }

// ========== SWITCH STATEMENT ==========

// var day = prompt("Enter a day of the week (e.g., Monday, Tuesday, etc.):");

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
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



// ========== TERNARY OPERATOR ==========
// var x = 70
// var y =  x < 60 ? 'less than 60' : 'greater than 60';
// console.log(y);


// let age = prompt("How old are you?");
// age = Number(age);  // Make sure the input is a number

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);


// ========== Example with nested ternary ==========

// let timeOfDay = prompt("What time of the day is it? (Enter 'morning', 'afternoon', or 'night')").toLowerCase();

// let greeting = timeOfDay === "morning" ? "Good morning!" :
// timeOfDay === "afternoon" ? "Good afternoon!" :
// timeOfDay === "night" ? "Good night!" :
// "Hello!";

// console.log(greeting);



// ========= falsy value
// 0 , null , undefined , NaN , '' , false

// if (false) console.log('true'); else console.log('false'); 

// if (0) console.log('true'); else console.log('false');     
// if (-0) console.log('true'); else console.log('false');      

// if ("") console.log('true'); else console.log('false');    

// if (null) console.log('true'); else console.log('false');  
// if (undefined) console.log('true'); else console.log('false'); 

// if (NaN) console.log('true'); else console.log('false');   
