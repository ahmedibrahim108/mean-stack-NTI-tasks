/*                           Task1:

1. Create an array of 10 numbers (it can include both positive and negative values).
2. Use a for loop to iterate through the array and calculate the sum of all positive
numbers.
3. Use continue to skip any negative values during the iteration.
4. Use console.log() to display:
a. The sum of positive numbers.
b. The sum of all numbers in the array (including both positive and negative).
5. Finally, modify the array by adding a new number at the end, and remove the first
element using the
*/

//////////////////////////////////solution////////////////////////

// //1. Create an array of 10 numbers (it can include both positive and negative values).
// const arr = [0, 2, -1, 8, 9, 11, 22, -9, -3, -4];
// let sum = 0;
// let allSum = 0;

// //2. Use a for loop to iterate through the array and calculate the sum of all positive numbers.
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }

// //3. Use continue to skip any negative values during the iteration.
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     continue;
//   }
//   sum += arr[i];
// }

// //4. Use console.log() to display:
// // a. The sum of positive numbers.

// console.log("the sum of all positive number = ", sum);

// //b. The sum of all numbers in the array (including both positive and negative).

// for (let i = 0; i < arr.length; i++) {
//   allSum += arr[i];
// }

// console.log("the sum of all numbers = ", allSum);

// //5. Finally, modify the array by adding a new number at the end, and remove the first
// //element using the

// arr.push(3);
// console.log(arr);

// arr.shift();
// console.log(arr);

/*----------------------------END Of Task One ------------------------*/

/*                           Task2:

1. Create an object representing a student with the following properties:
a. name (String).
b. age (Number).
c. grade (String).
d. isGraduated (Boolean).
2. Display the student's name and age using console.log().
3. Change the grade of the student to a new value (e.g., "A").
4. Use the Object.keys() method to display all the properties of the object.
5. Use the Object.values() method to display all the values of the object.
6. Add a new property called email to the object and set it to an email address.
7. Use the delete keyword to remove the isGraduated property from the object and
display the updated object
*/

//////////////////////////////////solution////////////////////////

// //1. Create an object representing a student with the following properties:
// let student = {
//   name: "ahmed",
//   age: 23,
//   grade: "B+",
//   isGraduated: true,
// };

// //2. Display the student's name and age using console.log().
// console.log("student name: ", student.name, "_", "student age: ", student.age);

// //3. Change the grade of the student to a new value (e.g., "A").
// student.grade = "A";
// console.log(student.grade);

// //4. Use the Object.keys() method to display all the properties of the object.
// console.log(Object.keys(student));

// //5. Use the Object.values() method to display all the values of the object.
// console.log(Object.values(student));

// //6. Add a new property called email to the object and set it to an email address.
// student.email = "ahmed123@gmail.com";
// console.log(student);

// //7. Use the delete keyword to remove the isGraduated property from the object and
// delete student.isGraduated;
// console.log(student);

/*----------------------------END Of Task Two ------------------------*/

/*                          Guess the Secret Number

Your mission is to design and implement a small game using JavaScript. The
computer will secretly select a number, and the player must try to find it. This task
will test your ability to use conditional statements and loops effectively.
Requirements:
● The program must secretly choose a number between 1 and 50.
● The player should be able to attempt multiple guesses until they find the correct
number.
● For every guess, the program must clearly inform the player if they are correct
or not.
● The program must keep track of the number of attempts made by the player.
● Once the player succeeds, the program should announce the result in a clear
and engaging way

*/

const min = 1;
const max = 50;
const secretNum = Math.floor(Math.random() * (max - min + 1));

let guess;
let counter = 0;
let running = true;

while (running) {
  guess = Number(prompt(`Guess A Number btween ${min} - ${max} `));

  if (isNaN(guess)) {
    alert("please Enter A vaild Number");
  } else if (guess < min || guess > max) {
    alert("please Enter A vaild Number");
  } else {
    counter++;
    if (guess < secretNum) {
      alert("To low , Try Again ");
    } else if (guess > secretNum) {
      alert("To high , Try Again ");
    } else {
      alert(
        `Correct the answer was ${secretNum} it tooks you ${counter} attemps to reach `
      );
      running = false;
    }
  }
}
