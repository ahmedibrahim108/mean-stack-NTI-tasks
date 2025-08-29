

// ================== object ============================



// ========== 1. Creating an Object ==========



// var person = {
//   name: "Ali",             
//   age: 25,                
//   job: "Software Developer",
//   city: "Cairo",          
// };


// ========== 2. Accessing Object Properties ==========
// console.log(person.name);  // Output: "Ali"
// console.log(person["age"]); // Output: 25

// ========== 3. Modifying Object Properties ==========
// person.age = 26;  
// console.log(person.age);

// person.city = "Alexandria";  

// console.log(person.age);   // Output: 26
// console.log(person.city);  // Output: Alexandria

// ========== 4. Adding New Properties to the Object ==========
// person.country = "Egypt";  

// console.log(person);  // Output: Egypt

// var newProperty = "email";
// person[newProperty] = "ali@example.com"; 
// console.log(person);

// console.log(person.email);  // Output: ali@example.com

// ========== 5. Deleting Properties ==========
// delete person.job;  
// console.log(person);


// console.log(person.job);  // Output: undefined

// ========== 6. Using Objects in a Real Scenario==========
// var user = {
//   username: "johnDoe",
//   password: "password123",
//   lastLogin: "2023-05-01",
//   isLoggedIn: false,
// };


// function displayUserInfo(userObj) {
//   console.log(`User Info:
//   Username: ${userObj.username}
//   Last Login: ${userObj.lastLogin}
//   Status: ${userObj.isLoggedIn ? "Logged In" : "Not Logged In"}`);
// }

// displayUserInfo(user);


// =============== . and [] ==============================
// var student = {
//   "student-name": "Ahmed",
//   age: 22
// };
// console.log(student.student-name);

// console.log(student["student-name"]);




// Accessing using square brackets
// console.log(student["student-name"]);  
// console.log(student.age);              

// ================== nested obj ==================
// var company = {
//   name: "Tech Solutions",
//   location: {
//     city: "Cairo",
//     country: "Egypt",
//     street: {
//         name:"abas",
//         boxno:"123"
//     }
//   },
  
// };
// console.log(company.location.street.name);



// console.log(company.location.country); // 

 // ======================= object methods ======================
//  var person = {
//   name: "Ali",
//   age: 25,
//   job: "Developer"
// };

// var xx = Object.keys(person); 
// console.log(xx); 


// var person = {
//   name: "Ali",
//   age: 25,
//   job: "Developer",
//   adress: {
//     name :"test"
//   }
// };

// let values = Object.values(person);
// console.log(values);


// let person = {
//   name: "Ali",
//   age: 25
// };

// Object.freeze(person);

// person.age = 30;  // This will not change 
// console.log(person.age);
// person.add = "cairo";
// console.log(person);

// person.job = "Developer";  // This will not add the 'job' property.
// console.log(person);  // Output: {name: "Ali", age: 25}


// Object.seal(person);

// person.age = 30;  // This will  change 
// console.log(person.age);
// person.address = "cairo";
// console.log(person);

// person.job = "Developer";  // This will not add the 'job' property.
// console.log(person);  // Output: {name: "Ali", age: 30}


// var person = {
//   name: "Ali",
//   age: 25
// };

// console.log(person.hasOwnProperty("name"));   // true
// console.log(person.hasOwnProperty("job"));  // false




// let person = {
//   name: "Ali",
//   age: 25
// };

// // Seal the object
// Object.seal(person);

// // Try modifying existing property
// person.age = 26;  // This will work because we are modifying an existing property
// person.job ="developer"
// console.log(person);  

// // Try adding a new property (this will fail)
// person.job = "Developer";  // This will not work
// console.log(person.job); 


// var friends = [ "ali","eman","sara","samy"] ;
// console.log(friends[3]);










// ================================ array ============================
// ========== 1. Creating an Array ==========
// var fruits = ["Apple", "Banana", "Orange", "Grapes"];
// console.log(fruits.length);

// // ========== 2. Accessing Array Elements ==========
// console.log(fruits[0]);  // Output: "Apple"
// console.log(fruits[1]);  // Output: "Banana"

// // ========== 3. Adding Elements to an Array ==========
// fruits.push("Pineapple"); 
// console.log(fruits);  

// fruits.unshift("Mango"); 
// console.log(fruits);  

// // ========== 4. Removing Elements from an Array ==========
// fruits.pop(); 
// console.log(fruits); 

// fruits.shift(); 
// console.log(fruits);

// // ========== 5. Finding an Element in an Array ==========
// var index = fruits.indexOf("Banana"); 
// console.log(index);  //

// var notFoundIndex = fruits.indexOf("Pineapple");  
// // console.log(notFoundIndex);  // Output: -1 (not found)


// // ========== 6. Iterating through the Array with forEach ==========

// fruits.forEach(function(fruit) {
//   console.log(fruit);  // Output: "Apple", "Banana", "Orange", "Grapes"
// });

// // ========== 7. Mapping an Array (Using `map`) ==========
// var upperCaseFruits = fruits.map(function(fruit) {

//   return fruit.toUpperCase();  // Converts each fruit to uppercase
// });

// console.log(upperCaseFruits);  // Output: ["APPLE", "BANANA", "ORANGE", "GRAPES"]
// console.log(fruits);  // Output: ["Apple", "Banana", "Orange", "Grapes"]


// var name = "Ahmed";
// console.log(name.length);

// console.log(fruits.length);

// console.log(fruits[fruits.length-1]);


// ========== 8. Filtering an Array (Using `filter`) ==========
// let longNamedFruits = fruits.filter(function(fruit) {
//   return fruit.length > 5;  
// });

// console.log(longNamedFruits);  // Output: ["Banana", "Orange"]
// console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]


// ========== 9. Finding (find / findIndex / includes / lastIndexOf) ==========

// var fruits = ["Apple", "Banana", "Orange", "Grapes", "Banana"];

// var found = fruits.find(function (f) { return f.startsWith("O"); }); 
// console.log(found); 

// var foundIndex = fruits.findIndex(function (f) { return f.length > 3; });
// console.log(foundIndex); 

// console.log(fruits.includes("Banana")); 
// console.log(fruits.lastIndexOf("Banana")); // last index contain this value


// ========== 10. (ES2023) (immutable methods) toSorted / toReversed / toSpliced / with ==========

// var nums = [3, 1, 2];

// var sortedNums = nums.toSorted(function (a, b) { return a - b; });
// console.log(sortedNums); 
// console.log(nums);      

// var reversedNums = nums.toReversed();
// console.log(reversedNums); // Output: [2, 1, 3]


// array.toSpliced(startIndex, deleteCount, ...itemsToAdd);
// var splicedCopy = nums.toSpliced(1, 1, 9); 
// console.log(splicedCopy); 
// console.log(nums);        

// var updated = nums.with(0, 99); // update only item on the index 0
// console.log(updated); 


// ========== 11. slice vs splice (mutable) ==========

// var letters = ["a", "b", "c", "d", "e"];

//// array.slice(startIndex, before this endIndex);
// var sliced = letters.slice(1, 4); 
// console.log(sliced);   
// console.log(letters);  

//// array.splice(startIndex, deleteCount, ...itemsToAdd);
// var spliced = letters.splice(2, 2); 
// console.log(spliced);  // Output: ["c","d"]
// console.log(letters); 


// ========== 12. sort ==========

// var nums = [100, 3, 20, 5];
// nums.sort(); 
// console.log(nums); 

// nums.sort(function (a, b) { return b - a; }); 
// console.log(nums); 

// var cities = ["cairo", "Alex", "giza"];
// cities.sort();
// console.log(cities); 


// ========== 13. some / every  >> return true or false==========

// var ages = [18, 22, 30];
// console.log(ages.some(function (a) { return a >= 30; })); 
// console.log(ages.every(function (a) { return a >= 18; }));


// ========== 14. reduce (Group By) ==========

// var nums = [1, 2, 3, 4];
// var sum = nums.reduce(function (acc, n) { return acc + n; }, 0);
// console.log(sum); 


// var users = [
//   { name: "Ali",  city: "CAI" },
//   { name: "Sara", city: "GZA" },
//   { name: "Mona", city: "CAI" },
// ];

// var byCity = users.reduce(function (acc, u) {
//   acc[u.city] = acc[u.city] || [];
//   acc[u.city].push(u);
  
//   return acc;
// }, {});
// console.log(byCity);


// ========== 15. flat / flatMap ==========

// var nested = [1, [2, [3]], 4];
// // console.log(nested.flat());   
// console.log(nested.flat(2));  

// var deepNested2 = [1, [2, [3, [4]]]];
// // console.log(deepNested2.flat(3));

// console.log(deepNested2.flat(Infinity));

// var phrases = ["a b r rrr", "c d"];
// var words = phrases.flatMap(function (s) { return s.split(" "); });
// console.log(words); 


// ========== 16. concat & spread ==========

// var a = [1, 2], b = [3, 4];
// var c1 = a.concat(b);
// var c2 = [].concat(a, b, [5]);
// var c3 = [...a, ...b];
// console.log(c1); 
// console.log(c2); 
// console.log(c3); 


// ========== 17. at() ==========

// var nums = [10, 20, 30, 40];
// console.log(nums.at(0));   
// console.log(nums.at(-1));  
// console.log(nums[nums.length - 1]); 


// ========== 18. keys / values / entries ==========
var arr = ["x", "y", "z"];
// for (var k of arr.keys())    { console.log("key:", k); }      
// for (var v of arr.values())  { console.log("val:", v); } 
// for (var kv of arr.entries()){ console.log(kv); }    


// ========== 20. Array.of / Array.from ==========

// var ofArr = Array.of(7, 8, 9); 
// console.log(ofArr);

// var fromStr = Array.from("ABC"); 
// console.log(fromStr); 

// Array.from with mapping
// var squares = Array.from([1,2,3], function (n) { return n * n; });
// console.log(squares); 



// ========== 19. join / toString ==========

// var nums = [1,2,3];
// console.log(nums.join("-")); 
// console.log(String(nums));  


