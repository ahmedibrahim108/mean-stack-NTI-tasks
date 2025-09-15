let age = Number(prompt("Please Enter Your Age"));

// function checkAge(age) {
//   let compareAge = 60;

//   if (age < compareAge) {
//     console.log("Your Age Blow Than 60");
//   } else if (age > compareAge) {
//     console.log("Your Age More Than 60");
//   } else {
//     console.log("Your Age equal to 60");
//   }
// }

// checkAge(age);

function checkAge(age) {
  let compareAge = 60;

  let result =
    age < compareAge
      ? "Your Age Blow Than 60"
      : age > compareAge
      ? "Your Age More Than 60"
      : "Your Age equal to 60";

  console.log(result);
}

checkAge(age);

console.log(x);

function x() {
  console.log(10);
}

var x = 6;
