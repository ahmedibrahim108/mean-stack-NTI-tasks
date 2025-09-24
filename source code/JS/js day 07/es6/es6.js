

//========================== use strict
//  the first problem declare the varaibles as a global implicitly
// function withoutStrict() {
    
//     implicitGlobal = "5";
//     console.log( implicitGlobal);
// }
// withoutStrict();
// console.log(implicitGlobal);

// with using use strict
// function withStrict() {
//     "use strict";
//     try {
//       strictImplicit = "test !";
//     } catch (error) {
//         console.log(" error strict mode:", error.message);
//     }
// }
// withStrict();

// ex with delete 
// function deleteWithoutStrict() {
//     var localVar = "local test ";
    
//     console.log("delete localVar:", delete localVar); 
//     console.log("localVar  delete:", localVar); 
// }

// deleteWithoutStrict();

// with using use strict
// function deleteWithStrict() {
//     "use strict";
//     var localVar = "Local var";
    
    // try {
    //     delete localVar;
    // } catch (error) {
    //     console.log("error strict mode:", error.message);
    // }
    
//     var obj = { prop: "قيمة" };
//     delete obj.prop; 
//     console.log("remove prob from obj", obj);
// }

// deleteWithStrict()

// duplicateParamsNormal
// function duplicateParamsNormal(a, b, a) {
//     "use strict"
//     console.log( a);
//     console.log("b:", b);
// }

// duplicateParamsNormal(1, 2, 3);


// strictReserved 
// var implements  = 5;
// console.log(implements);

// "use strict"
// var implements  = 5;
// console.log(implements);


//========================== Hoisting
// ====== 1. Variable Hoisting  var
// // ex 1
// console.log(myVar); 
// var myVar = 5;
// console.log(myVar); 

// // ex2
// console.log(name); 
// console.log(age);  

// var name = "Ahmed";
// var age = 25;

// console.log(name);
// console.log(age);



// ====== 2. Function Hoisting

// //Function Declarations 

// sayHello();

// function sayHello() {
//     console.log("welcome");
// }


// //Function Expressions  
// sayGoodbye(); 
// sayGoodbye();

// var sayGoodbye = function() {
//     console.log("bye");
// };


// ====== 3. let and const
// console.log(myLet); 
// let myLet = 10;


// console.log(myConst); 
// const myConst = 20;


// // examples 

// var x = 1;
// function test() {
//     console.log(x);  // undefined
//     var x = 2;
//     console.log(x);  // 2
// }
// test();


// ========================== var vs let vs const - الفروق الأساسية ==========================

// 1.1 Function Scope with var
// console.log("--- Function Scope (var) ---");

// function varScopeExample() {
//     var functionVar = "متغير في بداية الدالة";
    
//     if (true) {
//         var functionVar = "تم تغييره في الـ if";
//         var anotherVar = "متغير جديد في if";
        // console.log("داخل if - functionVar:", functionVar);
        // console.log("داخل if - anotherVar:", anotherVar);
    // }
    
    // console.log("خارج if - functionVar:", functionVar); 
    // console.log("خارج if - anotherVar:", anotherVar); 
    
    // for (var i = 0; i < 2; i++) {
    //     var loopVar = "متغير في الـ loop";
    // }
    // console.log("خارج loop - i:", i);
    // console.log("خارج loop - loopVar:", loopVar);
// }

// varScopeExample();


// 1.2 Block Scope مع let/const

// function blockScopeExample() {
//     let functionLet = "let في بداية الدالة";
//     const functionConst = "const في بداية الدالة";
    
//     if (true) {
//         let functionLet = "let جديد في الـ if"; 
//         const functionConst = "const جديد في الـ if";
//         let blockOnlyLet = "موجود في الـ if فقط";
        
        // console.log("داخل if - functionLet:", functionLet);
        // console.log("داخل if - functionConst:", functionConst);
        // console.log("داخل if - blockOnlyLet:", blockOnlyLet);
    // }
    
    // console.log("خارج if - functionLet:", functionLet); 
    // console.log("خارج if - functionConst:", functionConst); 
    // try {
    //     console.log("خارج if - blockOnlyLet:", blockOnlyLet); 
    // } catch (e) {
    //     console.log("خطأ: blockOnlyLet غير متاح خارج الـ if");
    // }
    
    // for (let j = 0; j < 2; j++) {
    //     const loopConst = "const في الـ loop";
    //     console.log("داخل loop - j:", j, "loopConst:", loopConst);
    // }

    
    // try {
    //     console.log("خارج loop - j:", j); 
    // } catch (e) {
    //     console.log("خطأ: j غير متاح خارج الـ loop");
    // }
// }

// blockScopeExample();


// 2.1 var - Re-declaration 

// var userName = "أحمد";
// console.log("أول إعلان:", userName);

// var userName = "محمد"; 
// console.log( userName);

// var userName; 
// console.log("بعد إعلان بدون قيمة:", userName); 

// var userName = "علي"; // إعادة إعلان مع قيمة جديدة
// console.log("إعادة إعلان مع قيمة جديدة:", userName);

// 2.2 let - Re-declaration 

// let userAge = 25;
// console.log("let userAge:", userAge);


// let userAge = 30; 
// var userAge = 35; 

// //  Re-assignment 
// userAge = 30; 
// console.log("let بعد re-assignment:", userAge);

// 2.3 const - Re-declaration

// const PI = 3.14;
// console.log("const PI:", PI);


// const PI = 3.14159; 
// let PI = 3.14159; 
// var PI = 3.14159; 

// 2.4 Mixed declarations
// var mixedVar = "var first";
// try {
//     let mixedVar = "let second";
// } catch (e) {
//     console.log("ERROR");
// }

// 3.1 var - Re-assignment 

// var varValue = "القيمة الأولى";
// console.log("var قبل:", varValue);

// varValue = "القيمة الثانية";
// console.log("var بعد re-assignment:", varValue);

// varValue = 123; 
// console.log("var بعد تغيير النوع:", varValue);

// varValue = { name: "كائن" };
// console.log("var بعد تغيير لكائن:", varValue);

// 3.2 let - Re-assignment 

// let letValue = "قيمة let الأولى";
// console.log("let قبل:", letValue);

// letValue = "قيمة let الثانية";
// console.log("let بعد re-assignment:", letValue);

// letValue = 456;
// console.log("let بعد تغيير النوع:", letValue);

// letValue = [1, 2, 3];
// console.log("let بعد تغيير لمصفوفة:", letValue);

// 3.3 const - Re-assignment

// const constValue = "قيمة const";
// console.log("const value:", constValue);

// try {
//     constValue = "قيمة جديدة"; 
// } catch (e) {
//     console.log("خطأ: لا يمكن إعادة تخصيص const:", e.message);
// }

// const constNumber = 100;
// try {
//     constNumber = 200; 
// } catch (e) {
//     console.log("خطأ: لا يمكن تغيير const number:", e.message);
// }

// 3.4 const مع Objects 

// Object example
// const person = {
//     name: "أحمد",
//     age: 30,
//     city: "القاهرة"
// };
// console.log("const object قبل:", person);


// person.name = "محمد";
// person.age = 35;
// person.email = "mohamed@example.com";
// delete person.city;

// console.log("const object بعد التعديلات:", person);

// try {
//     person = { name: "علي" }; 
// } catch (e) {
//     console.log("خطأ: لا يمكن إعادة تخصيص const object:", e.message);
// }

// Array example
// const numbers = [1, 2, 3];
// console.log("const array قبل:", numbers);


// numbers.push(4, 5);
// numbers[0] = 100;
// numbers.pop();

// console.log("const array بعد التعديلات:", numbers);

// try {
//     numbers = [6, 7, 8]; 
// } catch (e) {
//     console.log("خطأ: لا يمكن إعادة تخصيص const array:", e.message);
// }

// Nested objects
// const config = {
//     api: {
//         url: "https://api.example.com",
//         timeout: 5000
//     },
//     features: ["feature1", "feature2"]
// };

// config.api.url =  "https://newapi.example.com";
// console.log("config قبل:", JSON.stringify(config));


// config.api.url = "https://newapi.example.com";
// config.api.retries = 3;
// config.features.push("feature3");

// console.log("config بعد:", JSON.stringify(config));


// 4.1 var  initialize Optional

// var uninitializedVar; 
// console.log("var بدون تهيئة:", uninitializedVar); 

// uninitializedVar = "تم التهيئة لاحقاً";
// console.log("var بعد التهيئة:", uninitializedVar);

// var initializedVar = "مُهيأ من البداية";
// console.log("var مُهيأ من البداية:", initializedVar);



// 4.2 let -initialize Optional

// let uninitializedLet; 
// console.log("let بدون تهيئة:", uninitializedLet);

// uninitializedLet = "تم تهيئة let لاحقاً";
// console.log("let بعد التهيئة:", uninitializedLet);

// let initializedLet = "let مُهيأ من البداية";
// console.log("let مُهيأ من البداية:", initializedLet);

// 4.3 const - initialize must

// Uncomment to see SyntaxError:
// const uninitializedConst; 

// const initializedConst = "const يجب تهيئته عند الإعلان";
// console.log( initializedConst);




// 5.1 var add to Global Object

// var globalVar1 = "متغير عام مع var";
// var globalVar2 = 123;

// console.log("globalVar1:", globalVar1);
// console.log("globalVar2:", globalVar2);


// console.log("window.globalVar1:", window.globalVar1);
// console.log("window.globalVar2:", window.globalVar2);

// في Node.js يمكن الوصول عبر global:
// console.log("global.globalVar1:", global.globalVar1);
// console.log("global.globalVar2:", global.globalVar2);


// var globalFunction = function() {
//     return "دالة عامة مع var";
// };

// console.log("globalFunction():", globalFunction());
// console.log("window.globalFunction:", typeof window.globalFunction); 

// 5.2 let not added to Global Object
// let globalLet1 = "متغير عام مع let";
// let globalLet2 = 456;

// console.log("globalLet1:", globalLet1);
// console.log("globalLet2:", globalLet2);

// console.log("window.globalLet1:", window.globalLet1);
// console.log("global.globalLet1:", global.globalLet1); 

// function fun1(){
//     console.log("test global object with declration function");
    
// }
// window.fun1();

// دالة مع let
// let globalLetFunction = function() {
//     return "دالة مع let";
// };

// console.log("globalLetFunction():", globalLetFunction());
// console.log("window.globalLetFunction:", typeof window.globalLetFunction); 

// 5.3 const not added to Global Object

// const globalConst1 = "متغير عام مع const";
// const globalConst2 = 789;

// console.log("globalConst1:", globalConst1);
// console.log("globalConst2:", globalConst2);


// console.log("window.globalConst1:", window.globalConst2); 
// console.log("global.globalConst1:", global.globalConst1); 


// دالة مع const
// const globalConstFunction = function() {
//     return "دالة مع const";
// };

// console.log("globalConstFunction():", globalConstFunction());
// console.log("window.globalConstFunction:", typeof window.globalConstFunction); 





// using const to set app configrations
// const APP_CONFIG = {
//     name: "MyApp",
//     version: "1.0.0",
//     api: {
//         baseUrl: "https://api.myapp.com",
//         timeout: 30000
//     },
//     features: ["auth", "notifications"]
// };

// console.log("إعدادات ثابتة:", APP_CONFIG.name, APP_CONFIG.version);
// APP_CONFIG.api.timeout = 60000;
// APP_CONFIG.features.push("dark-mode");

// console.log( APP_CONFIG);


// let currentUser = null;
// let isLoggedIn = false;
// let sessionToken = null;

// currentUser = { id: 1, name: "أحمد" };
// isLoggedIn = true;
// sessionToken = "abc123";

// console.log({ currentUser, isLoggedIn, sessionToken });


// مشكلة مع var في loop
// const eventHandlers = {};
// console.log("مشكلة var في إنشاء event handlers:");
// for (var eventType = 0; eventType < 3; eventType++) {

//     eventHandlers["handler" + eventType] = function() {
        
//         return "Handler for event: " + eventType;
//     };
// }
// console.log(eventHandlers.handler0()); // 
// console.log(eventHandlers.handler2()); // 


// const eventHandlers = {};
// for (let i = 0; i < 3; i++) {
//     console.log("handler" + i + ":", eventHandlers["handler" + i]());
// }
   

// solution with let
// const correctHandlers = {};
// for (let eventType = 0; eventType < 3; eventType++) {
//     correctHandlers["handler" + eventType] = function() {
//         return "Handler for event: " + eventType; 
//     };
// }
// console.log(correctHandlers.handler0()); // 
// console.log(correctHandlers.handler2()); // 

// for (let i = 0; i < 3; i++) {
//     console.log("handler" + i + ":", correctHandlers["handler" + i]());
// }

// 6.3 example on data base
// const database = {
//     users: [],
//     products: [],
//     orders: []
// };


// let tempData = null;
// let processingStatus = "idle";

// function addUser(userData) {
//     processingStatus = "adding user";
//     tempData = { ...userData, id: Date.now() };
    
//     database.users.push(tempData);
    
//     processingStatus = "completed";
//     tempData = null;
    
//     return database.users[database.users.length - 1];
// }

// console.log("before added", database);

// addUser({ name: "A", email: "aa@example.com" });
// addUser({ name: "S", email: "ss@example.com" });

// console.log("after added", database);




//========================== var let const
// const arr = [1,2,3,4,5,6]

// for(const item of arr){
//     console.log("item = ",item);
//     console.log();
    
// }
// console.log(item); 

// arr.unshift(55) ;

// console.log(arr);

// const y = { name :"ahmed" , age : 27 };
// y = 22
// console.log(y); // error




// function test(){
    
//     var x=15
//     if(true){
//         console.log(x);
        
//         var x ;
//         console.log(x); 
        
//     }
//     console.log(x); 
    
// }
// test();

// ===================== Example using var ===================== 
// var counter = 0;
// console.log(incrementCounter); 
// incrementCounter();

// function incrementCounter() {
//   counter++;
//   console.log("Counter using var: " + counter); 
// }

// incrementCounter(); 
// incrementCounter();  
// if (true) {
//   var counter = 10;
// }

// console.log("Counter after overwriting with var: " + counter);  // 10


// console.log(printFun); 

// console.log(printFun());  

// var printFun = function(){
//   console.log("ex");
  
// }

// ===================== Example using let ===================== 
// let count = 0;

// function incrementCount() {
//   count++;
//   console.log("Count using let: " + count); 
// }

// incrementCount();   
// incrementCount();

// if (true) {
    
//   let count = 10;
//   console.log("Inside block with let: " + count);  
// }

// console.log("Count after block with let: " + count); 

// ===================== Example using const =====================
// const pi = 3.14159;
// console.log("Value of pi: " + pi); 

// try {
//   pi = 5;
// } catch (error) {
//   console.log("Error when trying to change pi: Assignment to constant variable.",error);
// }
// console.log("hello");

// ===================== Using let with objects =====================
// const person = {
//   name: "Ali",
//   age: 25
// };

// console.log(person); 

// person.age = 26;
// person.job="developer"
// console.log(person);
// person = {name : "ali" , age :25 ,job :"developer"} 
// ===================== Using let and const in loops =====================
// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log("Loop index using let: " + i); 
// }

// console.log(i);  //

// {
//   let blockScoped = "I'm inside a block";
//   const constantVar = "I'm constant inside a block";
//   console.log("1 ",blockScoped); 
  
// }
// console.log("2 ",x);  



// function test (name, lname){
//     return `Hello ${name} ${lname}`
// }
// var result= test("Ahmed ","Salem");  
// console.log(result);

// let fun1 = (name, lname)=> `Hello ${name} ${lname}`

// let result=fun1("ahmed",'sayed')
// console.log(result);

// let fun=(fname , lname)=> {
//     console.log(`hello ${fname} ${lname}`);
    
// }
// fun();
//  let fun=(fname , lname)=>  console.log(`hello ${fname} ${lname}`);
// let fun=(fname , lname)=> `hi ${fname} ${lname}` 
 
// console.log( fun("zeyad","mo"));

// ===================== 1. Arrow Functions  ===================== 


// var greet = (name) => `Hello, ${name}!`;
// console.log(greet("Ali")); 

// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(5, 3)); 


// ===================== 2. Template Literals  =====================
// let firstName = "Ali";
// let lastName = "Hassan";
// let age = 25;

// // Traditional string concatenation
// let fullName = firstName + " " + lastName + ", Age: " + age;
// console.log(fullName);  

// // Using template literals
// let modernFullName = `${firstName} ${lastName}, Age: ${age}`;
// console.log(modernFullName);  

// ===================== 3. Destructuring =====================
// const person = {
//   name: "Ali",
//   age: 25,
//   job: "Developer"
// };
// var name = person.name;
// var age = person.age;
// let job = person.job;
// console.log(age);

// // Object Destructuring
// const { name, job, age } = person;
// console.log(name);  
// console.log(age);   
// console.log(job);   

// // Array Destructuring
// let colors = ["Red", "Green", "Blue"];
// let [firstColor, secondColor ,y] = colors;
// console.log(firstColor); 
// console.log(secondColor); 
// console.log(y);

// ===================== 4. Default Parameters =====================
// const greetWithMessage = (name = "Guest", greeting = "Hello") => `${greeting}, ${name}!`;

// console.log(greetWithMessage("Ali", "Hi")); 
// console.log(greetWithMessage("Sara"));     
// console.log(greetWithMessage());          

// // ===================== 5. Rest Parameter  =====================
// const sumAllNumbers = (...numbers) => {
//     console.log(numbers);
    
//   return numbers.reduce((acc, num) => acc + num, 0);
// };
//  let result2=sumAllNumbers(1, 2, 3, 4, 5 ,6 , 7, 8);
//  console.log(result2);

// console.log(sumAllNumbers(1, 2, 3, 4, 5));  
// console.log(sumAllNumbers(10, 20, 30));    
// console.log(sumAllNumbers(100));           


// ===================== 6. Using Spread Operator with Arrays =====================

// let arr =[1,2,4,5,6]
// console.log(...arr);


// Merging arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);  
// // Copying an array
// const originalArray = [10, 20, 30];
// const copiedArray = [...originalArray];
// copiedArray.push(40);
// console.log(copiedArray);  
// console.log(originalArray);  

//  Using Spread Operator with Objects 

// Merging objects
// /// ///////// local storage method and JSON (parse , stringify)
let objBaed = {
    name :"s",
    age:26,
    city:"cai"
}
let obj=JSON.stringify(objBaed)

localStorage.setItem('userdata',obj) ;
// localStorage.setItem('userdata2',obj) ;

// console.log(typeof localStorage.getItem('userdata'));
// var ee =JSON.parse(localStorage.getItem('userdata'));
// console.log(typeof ee);
// localStorage.removeItem("userdata");
// console.log(obj);
localStorage.clear();

// let personCopy = JSON.parse(JSON.stringify(person))
// personCopy.age =30;
// console.log(personCopy);
// console.log(person);



// const person = {
//   name: "Ali",
//   email: "eman@example.com",
//   child:{
//     isStudent : true
//   }
// };
// const personCopy = person ;
// const personCopy = {...person} ;
// const personCopy =JSON.parse(JSON.stringify(person)) 
// personCopy.name ="Ahmed";
// personCopy.child.isStudent = false ;

// console.log(personCopy); //  
// console.log(person);  // 

// // console.log({...person});

// const contactInfo = {
//   email: "ali@example.com",
//   phone: "123456789"
// };

// const mergedObject = {...person, ...contactInfo}; 
// console.log(mergedObject);  

// Copying an object
// const copiedPerson = {...person};
// copiedPerson.age = 26;
// console.log(copiedPerson);  
// console.log(person);        


// Using Spread Operator with Functions 

// // Passing array elements as arguments to a function
// const numbers = [1, 2, 3, 4, 5];

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// const result = sum(...numbers);
// console.log(result);  


// Using Spread Operator with Nested Arrays

// Flattening a nested array
// const nestedArray = [1, [2, 3], 4, [5, 6]];

// const flattenedArray = [...nestedArray[0], ...nestedArray[1], ...nestedArray[2], ...nestedArray[3]];
// console.log(flattenedArray);  

