const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const input = document.getElementById("input").value;
});

console.log(input);

let secretNum = Math.floor(Math.random() * 50) + 1;
// let enterNum = Number(
//   prompt("Please Guess The Secret Number NB(from 1 to 50)")
// );

let count = 0;

// for (; secretNum != enterNum; ) {
//   count++;

//   if (secretNum == enterNum) {
//     console.log("Succeeds");
//     break;
//   } else {
//     console.log("please Try Again");
//   }
// }

console.log(count);
