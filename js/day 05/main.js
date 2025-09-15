// const headEl = document.getElementById("productHead");
// const btnEl = document.querySelector("#btn");

// headEl.style.color = "black";

// headEl.classList.add("modHead");
// headEl.classList.replace("productHead", "modHead");

// btnEl.addEventListener("click", () => {
//   headEl.classList.toggle("productHead");
// });

/*
1. As a user, I want to input my daily fitness data (steps, distance, calories) so that I 
can keep track of my progress.
• Acceptance Criteria:
a. I should be able to enter the number of steps I've walked today.
b. I should be able to enter the distance I've covered in kilometers.
c. I should be able to input the number of calories I've burned today.
d. There should be an input field for each of these metrics (steps, distance, 
calories)

2. As a user, I want to view my total tracked data (steps, distance, and calories) 
dynamically on the webpage.
• Acceptance Criteria:
a. After inputting my data, the totals for steps, distance, and calories burned
should update immediately.
b. The updated values should be displayed on the screen in a clear format.

*/

const steps = document.getElementById("steps");
const distance = document.getElementById("distance");
const colories = document.getElementById("calory");
const btn = document.getElementById("btn");

const stepsDisplay = document.getElementById("steps-display");
const distanceDisplay = document.getElementById("distance-display");
const colaryDisplay = document.getElementById("colory-display");

btn.addEventListener("click", () => {
  console.log(stepsDisplay.textContent);

  stepsDisplay.textContent = +stepsDisplay.textContent + +steps.value;
  // distanceDisplay.textContent += +distance.value;
  // colaryDisplay.textContent += +colories.value;
});
