/* Task 1 - Variables & Data Types */

const lastName = "Akoniyon";
console.log("Last Name: " + lastName);
let firstName = "Aliu";
console.log("First Name: " + firstName);
const age = 30;
console.log("Age: " + age);
const studentId = "STU-001";
console.log("Student Id: " + studentId);
const gpa = 3.48;
console.log("GPA: " + gpa);
let isEnrolled = true;
console.log("Enrol Status: " + isEnrolled);
const graduationDate = null;
console.log("Graduation Date: " + graduationDate);

 firstName = "Alex";
 console.log("Nickname: " + firstName);

/* Task 2 - Operators */

let totalScore = 0;
 console.log("Starting Score: " + totalScore);
 
 totalScore = totalScore + 45;
 console.log("Total Score: " + totalScore);
 
 totalScore += 30;
 console.log("Total Score: " + totalScore);
 
 totalScore = totalScore - 5;
 console.log("Total Score: " + totalScore);
 
 totalScore = totalScore * 2;
 console.log("Total Score: " + totalScore);
 
 totalScore++;
 console.log("Total Score: " + totalScore);
 console.log("Remainder when divided by 7: " + (totalScore % 7));
 
 
 
 /* Task 3 - Conversion */
 
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

/*Using parseInt because studentAge should be a whole number and not decimals.*/

studentAge = parseInt(studentAge);
console.log("Student Age: " + studentAge + " (Type: " + typeof studentAge + ")");

/*Using parseFloat because examScore may contain decimals.*/

examScore = parseFloat(examScore);
console.log("Exam Score: " + examScore + " (Type: " + typeof examScore + ")");

/*Using Number as passMark should be a number, not a string.*/

passMark = Number(passMark);
console.log("Pass Mark: " + passMark + " (Type: " + typeof passMark + ")");

/*Using String as studentName should be name, not a number. */

studentName = String(studentName);
console.log("Student Name: " + studentName + " (Type: " + typeof studentName + ")");
 
 
 console.log("is exam score greater than pass mark? " + (examScore > passMark));
 
 
 /* Task 4 - Conditional Statements */
 
 let score = 73;
 
 /*
 if(score >= 70){
  console.log("Score: " + score + " | Grade: A - Distinction");
 } else if (score >= 60) {
  console.log("Score: " + score + " | Grade: B - Merit");
 }else if (score >= 50) {
  console.log("Score: " + score + " | Grade: C - Pass");
 }else if (score >= 40) {
  console.log("Score: " + score + " | Grade: D - Near Pass");
 }else {
   console.log("Score: " + score + " | Grade: F - Fail");
 }
 */
 
 /*
 score = 65;
 
 if(score >= 70){
  console.log("Score: " + score + " | Grade: A - Distinction");
 } else if (score >= 60) {
  console.log("Score: " + score + " | Grade: B - Merit");
 }else if (score >= 50) {
  console.log("Score: " + score + " | Grade: C - Pass");
 }else if (score >= 40) {
  console.log("Score: " + score + " | Grade: D - Near Pass");
 }else {
   console.log("Score: " + score + " | Grade: F - Fail");
 }
 */
 
 score = 35;
 
if (score >= 70) {
 console.log("Score: " + score + " | Grade: A - Distinction");
} else if (score >= 60) {
 console.log("Score: " + score + " | Grade: B - Merit");
} else if (score >= 50) {
 console.log("Score: " + score + " | Grade: C - Pass");
} else if (score >= 40) {
 console.log("Score: " + score + " | Grade: D - Near Pass");
} else {
 console.log("Score: " + score + " | Grade: F - Fail");
}
 
