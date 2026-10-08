let name1 = prompt("Enter your name:");
let age1 = parseInt(prompt("Enter your age:"));
let cgpa = parseFloat(prompt("Enter CGPA:"));
let studentStatus = (prompt("Active ? (true/false)") === "true");
let grade = prompt("Enter grade:").charAt(0);
console.log("Name: " + name1);
console.log("Age: " + age1);
console.log("Cgpa: " + cgpa);
console.log("Status: " + studentStatus);
console.log("Grade: " + grade);
let courses = [
    "Web Technology",
    "OOP",
    "Database"
];

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

let marks = parseInt(prompt("Enter student's marks:"));

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}

function showStudent(name, age) {
    console.log("Student Name: " + name1);
    console.log("Student Age: " + age1);
}

showStudent(name1, age1);

let students = [];

for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student name:");
}

console.log("Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}