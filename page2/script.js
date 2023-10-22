let totalCredits = 0;
let totalGradePoints = 0;

function calculateGPA() {
  const courses = document.querySelectorAll(".course");
  let totalCreditsCalc = 0;
  let totalGradePointsCalc = 0;

  courses.forEach(course => {
    const creditHours = parseFloat(course.children[1].value);
    const gradePoint = parseFloat(course.children[2].value);

    if (!isNaN(creditHours) && !isNaN(gradePoint)) {
      totalCreditsCalc += creditHours;
      totalGradePointsCalc += creditHours * gradePoint;
    }
  });

  if (totalCreditsCalc > 0) {
    const gpa = (totalGradePointsCalc / totalCreditsCalc).toFixed(2);
    document.getElementById("gpa-value").textContent = gpa;
  } else {
    document.getElementById("gpa-value").textContent = "0";
  }

  totalCredits = totalCreditsCalc;
  totalGradePoints = totalGradePointsCalc;
  document.getElementById("total-credits-value").textContent = totalCredits;
}

function addCourse() {
  const courseList = document.querySelector(".course-list");
  const course = document.createElement("div");
  course.className = "course";
  course.innerHTML = `
    <input type="text" placeholder="Course Name">
    <input type="number" min="0" max="4" step="0.1" placeholder="Credit Hours">
    <input type="number" min="0" max="4" step="0.1" placeholder="Grade Point">
  `;
  courseList.appendChild(course);

  const creditInputs = document.querySelectorAll(".course input:nth-of-type(2)");
  creditInputs[creditInputs.length - 1].addEventListener("input", calculateGPA);

  const gradePointInputs = document.querySelectorAll(".course input:nth-of-type(3)");
  gradePointInputs[gradePointInputs.length - 1].addEventListener("input", calculateGPA);
}

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("button");
  addButton.addEventListener("click", addCourse);

  const creditInputs = document.querySelectorAll(".course input:nth-of-type(2)");
  creditInputs.forEach(input => input.addEventListener("input", calculateGPA));

  const gradePointInputs = document.querySelectorAll(".course input:nth-of-type(3)");
  gradePointInputs.forEach(input => input.addEventListener("input", calculateGPA));
});
