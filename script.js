// CPIT 405 - Lab 4: JavaScript Fundamentals
// Complete the tasks in README.md in order.

// Task 1: Check the JavaScript Connection
console.log("JavaScript is connected!");

// Task 2: Variables
const studentName = "Shahad Alshahrani";
const major = "Information Technology";
let gpa = 4.83;
let isEnrolled = true;

console.log(studentName);
console.log(major);
console.log(gpa);
console.log(isEnrolled);

// Task 3: Data Types
console.log(typeof studentName); // string
console.log(typeof major);       // string
console.log(typeof gpa);         // number
console.log(typeof isEnrolled);  // boolean

// Task 4: Strings
console.log(`My name is ${studentName} and my major is ${major}.`);
console.log(studentName.length);
console.log(studentName.toUpperCase());
console.log(major.includes("Technology"));

// Task 5: Object
const student = {
    name: "Shahad Alshahrani",
    major: "Information Technology",
    gpa: 4.83,
    enrolled: true
};

console.log(student.name);
console.log(student.major);
console.log(student.gpa);
console.log(student.enrolled);

// Task 6: Array
let skills = ["HTML", "CSS", "Git"];

console.log(skills[1]);
console.log(skills.length);
skills.push("JavaScript");
console.log(skills);

// Task 7: Conditional
if (gpa >= 4.5) {
    console.log("Excellent");
} else if (gpa >= 3.5) {
    console.log("Very Good");
} else {
    console.log("Keep improving");
}

// Task 8: Loop
for (let skill of skills) {
    console.log(skill);
}

// Task 9: Function
function introduceStudent(name, major) {
    return `My name is ${name} and I study ${major}.`;
}

console.log(introduceStudent(studentName, major));
