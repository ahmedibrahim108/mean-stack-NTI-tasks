// reused 
// create
// A function is a block of reusable code that performs a specific task. You can call it whenever you need it.

// function sumTwoNUmber(no1 = 5, no2 = 2){
    // var x = 5;
    // var y = 10;
    // console.log(no1 + no2);
//     document.writeln(no1+no2)
//     var result = no1 + no2
//     return result
// }

// var result1=sumTwoNUmber(5,50); // 
// var result2=sumTwoNUmber();  //
// console.log(result1);
// console.log(result2); 


// function sum (x,y){
//     console.log(x);
//     console.log(y);
    
    
//     var result = x+y;
//     return result;
    
// }
// console.log(sum(1)); // 

// calling
// var resultCallingVoidFun = sum(7,5)
// console.log( "log calling function ",resultCallingVoidFun);
// document.getElementById("pp").innerHTML = sum(10,20);
// alert(sum(10,20))
// var result1 = sum(50,40);
// console.log(result1);

// function avg (x,y){
//     var sum =x+y;
//     var resultAvg = sum /2 ;
//     return resultAvg
// }
// var result = avg(10,30)
// console.log(result);


// var result= avg(sum(10,50));
// document.getElementById("pp").innerHTML = result

//////IIFE (Immediately Invoked Function Expression)
// (function xx(){
//     console.log("self calling function");
    
// })();

// Anonymous Function
// function printName(name){
//       name()
// }

// printName(function(){
//     console.log("from call back function");
// })



// //////// Function Expression
// var greet = function(name) {
//   console.log("Hello, " + name);
// };

// greet("Mohamed");

///// method function
// var person = {
//   name: "Mohamed",
//   greet: function() {
//     console.log(this);
    
//     console.log("Hello, " + this.name);
//   }
// };
// person.greet();


// =====================
// FUNCTIONS DEMO IN JS
// =====================

// ---------- 1. Regular Function ----------
// console.log(sum(5,8)); 

// function sum(x = 0, y = 0) { 
//     var result = x + y; 
    
//     return result;
// }

// // Calling regular function
// var r = sum(3,4);
// console.log(r);

// console.log(3  + undefined); 

// var resultCallingVoidFun = sum(7, 5);
// console.log("Log calling function:", resultCallingVoidFun);

// document.getElementById("pp").innerHTML = sum(10, 20);
// alert(sum(10, 20));

// var result1 = sum(50, 40);
// console.log(result1);

// // ---------- 2. Average Function ----------
// function avg(x, y) {
//     var sum = x + y;
//     var resultAvg = sum / 2;
//     return resultAvg;
// }

// var resultAvg1 = avg(10, 30);
// console.log("Average of 10 & 30:", resultAvg1);

// // Using regular function inside another function
// var result2 = avg(sum(10, 50), 100);
// document.getElementById("pp").innerHTML = result2;

// // ---------- 3. IIFE (Immediately Invoked Function Expression) ----------
// (function xx() {
//     console.log("Self-calling function (IIFE)");
// })();

// // ---------- 4. Anonymous Function as Callback ----------
// function printName(callback) {
//     callback();
// }

// printName(function() {
//     console.log("From callback function (Anonymous)");
// });

// // ---------- 5. Function Expression ----------

// var greet = function(name) {
    //     console.log("Hello, " + name);
    // };
// greet("Mohamed"); 

// // ---------- 6. Method Function inside Object ----------
// var person = {
//     name: "Mohamed",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };
// person.greet();

// // ---------- 7. Arrow Function ----------
// const multiply = (a, b) => a * b;
// console.log("Multiply 5 * 4 =", multiply(5, 4));

// // ---------- 8. Rest Parameters Function ----------
// function sumAll(...numbers) {
//     return numbers.reduce((acc, n) => acc + n, 0);
// }
// console.log("Sum all:", sumAll(1, 2, 3, 4, 5));

// ---------- 9. Nested Function ----------
// function outerFunction(x) {

//     function innerFunction(y) {
//         return x + y;
//     }

//     return innerFunction(10);
// }
// console.log("Nested function result:", outerFunction(5));

// // ---------- 10. Higher-Order Function ----------
// function greetUser(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greetUser("Ali", sayGoodbye);

// // ---------- 11. Recursive Function ----------
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }
// console.log("Factorial of 5:", factorial(5));


// ======================  settimeout , setinterval  ====================
var x =0
var seti1=setInterval(function(){
    x++
    console.log("every 2s",x);
    if (x == 3) {
        clearInterval(seti1)
    }
    
},3000)
// let timeoutId = setTimeout(() => {
//   console.log("Hello from setTimeout after 6 seconds!");
// }, 6000);


// clearTimeout(timeoutId);


// let counter = 0;
// let intervalId = setInterval(() => {
//   counter++;
//   console.log("Counter:", counter);


// }, 2000); 



// var x =0;
// setInterval(function(){
//     x++
//     console.log(x);
//     if (x == 5) {
//         clearInterval(1)
//     }
// },2000)

// var y =0
// setInterval(function(){
//     y++
//     console.log("hello");
//     if (y==3) {
//         clearInterval(2)
//     }

// },2000)
// clearInterval(1)
// setTimeout(function(){
//     console.log("hello nti");
    
// }, 6000);
// clearTimeout(1);


// var x =0
// setInterval(function(){
//     x += 3
//     console.log(x);

//     if (x == 9) {
//         clearInterval(1) ;
//     }
    
// },3000)


// setInterval(  function(){
//     console.log("hi interva");
    
// },2000)


var container = document.getElementById("container");
var img = `<img src='./imgs/img1.png' />`;
var counter =20 ;

setInterval(function(){
    if (counter ) {
        container.innerHTML += img
        --counter
    }else{
        clearInterval(1)
    }
},2000)






//==== ex 

// const container = document.getElementById("container") ;
// var srcArr = [`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`,`./imgs/img1.png`]
// var content = '';

// setInterval(function(){
//     content += `<img src = ${src} /> ` ;
//     container.innerHTML = content;
//     setTimeout(function(){

//         clearInterval(1)
//     },10000)
// },600)


//===== ex  Countdown Timer with Interval

// function startCountdown(seconds) {
//   let timeRemaining = seconds;

//   let intervalId = setInterval(function() {
//     console.log(`Time Remaining: ${timeRemaining} seconds`);

//     timeRemaining--;

//     if (timeRemaining < 0) {
//       clearInterval(intervalId); // Stop the interval
//       setTimeout(function() {
//         console.log("Time's up! Countdown has finished.");
//       }, 1000);  
//     }
//   }, 1000);  // Update every 1 second
// }

// startCountdown(10);
