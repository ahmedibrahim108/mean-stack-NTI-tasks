// function getAvrage(num1, num2) {
//   return (num1 + num2) / 2;
// }

// console.log(getAvrage(3, 3));

// const eventName = prompt("Enter Event Name");
// const eventCounter = Number(prompt("Enter Event Counter in ms"));

// const timer = setTimeout(() => {
//   alert(eventName);
// }, eventCounter);

const counter = document.getElementById("counter");
const display = document.getElementById("display")

const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", () => {
  const eventName = document.getElementById("eventName").value;
  const eventTimer = Number(document.getElementById("eventCount").value);

  counter.textContent = `Your coming event  ${eventName} is about ${eventTimer}`;
});

const count = 0;
for(let)