// let info = [
//   { name: "ahmed", city: "CIA" },
//   { name: "mona", city: "GZA" },
//   { name: "sayed", city: "CIA" },
// ];

/*                                      Task3:
Create a simple application to manage student information using arrays and objects. This 
application should perform the following tasks:
1. Create an array of students.
a. Each student should be an object with the following properties:
i. name (String): Student's name.
ii. age (Number): Student's age.
iii. grade (String): Student's grade.
iv. isGraduated (Boolean): Whether the student has graduated or not.
2. Calculate the average age of all the students in the array using a for loop.

a. Calculate the number of students who have graduated (where isGraduated
= true).
b. Calculate the number of students who have not graduated (where 
isGraduated = false).
3. Use the Object.keys() and Object.values() methods:
a. Display Object.keys() for each student.
b. Display Object.values() for each student.
4. Add a new student to the array.
a. Add a new student object to the array.
5. Delete the isGraduated property from all students using the delete keyword and 
display the updated student objects.
6. Display the following information :
a. Student names.
b. Average age.
c. Number of graduated and non-graduated students.

*/
// let sum = 0;
// let avrg;
// let gradCount = 0;

// let students = [
//   { name: "Aly", age: 22, grade: "A", isgraduated: true },
//   { name: "mahy", age: 19, grade: "B", isgraduated: false },
//   { name: "noor", age: 28, grade: "C", isgraduated: true },
//   { name: "masyed", age: 24, grade: "A", isgraduated: true },
//   { name: "youseef", age: 23, grade: "B", isgraduated: false },
// ];

// //2. Calculate the average age of all the students in the array using a for loop.
// students.forEach((student) => {
//   sum += student.age;
// });

// // OR
// for (let i = 0; i < students.length; i++) {
//   sum += students[i].age;
// }

// avrg = sum / students.length;
// console.log(avrg);

// // a. Calculate the number of students who have graduated (where isGraduated= true).
// for (let i = 0; i < students.length; i++) {
//   if (students[i].isgraduated) {
//     gradCount++;
//   }
// }

// console.log(gradCount);

// b. Calculate the number of students who have not graduated (where  isGraduated = false).
// for (let i = 0; i < students.length; i++) {
//   if (!students[i].isgraduated) {
//     gradCount++;
//   }
// }

// console.log(gradCount);

// //3. Use the Object.keys() and Object.values() methods:
// //a. Display Object.keys() for each student.
// for (let i = 0; i < students.length; i++) {
//   console.log(Object.keys(students[i]));
// }

// //  b. Display Object.values() for each student.
// for (let i = 0; i < students.length; i++) {
//   console.log(Object.values(students[i]));
// }

// // 4. Add a new student to the array.
// // a. Add a new student object to the array.
// students.push({ name: "mayer", age: 25, grade: "A", isgraduated: true });
// console.log(students);

// // b. Add a new property called email to the new student object and set it to an email address.
// students[students.length - 1].email = "mayer@gmail.com";
// console.log(students);

// // 5. Delete the isGraduated property from all students using the delete keyword and
// //display the updated student objects.

// for (let i = 0; i < students.length; i++) {
//   delete students[i].isgraduated;
// }
// console.log(students);

// // 6. Display the following information :
// //a. Student names.
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// //b. Average age.
// console.log("Avrage age : ", avrg);

// //c. Number of graduated and non-graduated students.
// console.log("Num of Graduated : ", gradCount);
// console.log("Num of Non-Graduated : ", gradCount);

///////////////////////////////////////////////////////////

/*         Task 1: Word Counter
Description:
Ask the user to input a sentence. Count the total number of words and print each word 
along with its number of letters.
Input:
let sentence = "JavaScript is fun";
Expected Output:
Total words: 3
JavaScript => 10 letters
is => 2 letters
fun => 3 letters
*/

// let sentence = window.prompt("please Enter A sentence");
// let wordArray = sentence.split(" ");

// //  Count the total number of words
// console.log(wordArray.length);

// // print each word along with its number of letters.
// wordArray.forEach((word) => {
//   console.log(word, word.length);
// });

////////////////////////////////////////////////////////////

/*       Task 2: Group Users by Age
Description:
Given an array of users (objects), categorize them into age groups:
• "Young": age < 25
• "Middle": 25 <= age <= 40
• "Old": age > 40
Input:
let users = [
 {name: "Ali", age: 22},
 {name: "Sara", age: 28},
 {name: "Mona", age: 35},
 {name: "Ahmed", age: 45}
];
Expected Output:
{
 "Young": [{name: "Ali", age: 22}],
 "Middle": [{name: "Sara", age: 28}, {name: "Mona", age: 35}],
 "Old": [{name: "Ahmed", age: 45}]
}
 
*/

// let users = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 28 },
//   { name: "Mona", age: 35 },
//   { name: "Ahmed", age: 45 },
// ];

// users.forEach((user) => {
//   if (user.age < 25) {
//     console.log("Young: ", user);
//   } else if (user.age >= 25 && user.age <= 40) {
//     console.log("Middle: ", user);
//   } else if (user.age > 40) {
//     console.log("Old: ", user);
//   }
// });

//////////////////////////////////////////////////////////////
/*               Task 3: Flatten and Count Products
Description:
Given an array of categories, each containing products (nested arrays), do the following:
1. Flatten all products into a single array.
2. Count how many times each product appears.
3. Return an object where the keys are product names and values are their counts.
Input:
let categories = [
 {category: "Fruits", products: ["Apple", "Banana", "Apple"]},
 {category: "Vegetables", products: ["Carrot", "Apple"]},
 {category: "Dairy", products: ["Milk", "Cheese"]}
];
Expected Output:
{
 "Apple": 3,
 "Banana": 1,
 "Carrot": 1,
 "Milk": 1,
 "Cheese": 1}
*/

// // 1. Flatten all products into a single array.
// let categories = [
//   { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
//   { category: "Vegetables", products: ["Carrot", "Apple"] },
//   { category: "Dairy", products: ["Milk", "Cheese"] },
// ];

// const allProducts = categories.flatMap((category) => category.products);
// // console.log(allProducts);

// let productCount = {};
// for (const product of allProducts) {
//   productCount[product] = (productCount[product] || 0) + 1;
// }

// console.log(productCount);
