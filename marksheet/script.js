alert("Hi, I will find your percentage :");
let name = prompt("Enter your FullName :");
let totalMarks = prompt("Enter your TotalMarks :");
let obtainedMarks = prompt("Enter your ObtainedMarks :");
let teacherRemarks = " ";

let percent = (obtainedMarks / totalMarks) * 100;

let grade = " ";

if (percent >= 90) {
  grade = "A";
  teacherRemarks = "You are Excellent in your studies";
} else if (percent >= 80) {
  grade = "B";

  teacherRemarks = " You are Good in your studies  but, Keep it up";
} else if (percent >= 70) {
  grade = "C";
  teacherRemarks = "Keep it up";
} else if (percent >= 60) {
  grade = "D";
  teacherRemarks = "You are Need to Improve";
} else if (percent >= 50) {
  grade = "E";
  teacherRemarks = "You are Very Weak";
} else {
  grade = "F";
  teacherRemarks = "You are Fair in your studies";
}

let studentName = document.getElementById("student-name");

studentName.innerHTML = name;

let totalMarksDisplay = document.getElementById("total-marks");

totalMarksDisplay.innerHTML = totalMarks;

let obtainedMarksDisplay = document.getElementById("obtained-marks");

obtainedMarksDisplay.innerHTML = obtainedMarks;

let percentageDisplay = document.getElementById("percentage");

percentageDisplay.innerHTML = percent + "%";

let gradeDisplay = document.getElementById("grade");

gradeDisplay.innerHTML = grade;

let remarks = document.getElementById("remarks");

remarks.innerHTML = teacherRemarks;

if (!name && !totalMarks && !obtainedMarks) {
  alert("Please fill all fields");
  studentName.innerHTML = "Namalom afrad";
  totalMarksDisplay.innerHTML = "batay hi nahi ";
  obtainedMarksDisplay.innerHTML = "ye bhi nahi batay";
  percentageDisplay.innerHTML = "kesy nikalo  jb marks hi nahi batay ";
  gradeDisplay.innerHTML = "Z";
  remarks.innerHTML = "nOt of this school ";
} else {
}
