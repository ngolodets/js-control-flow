//Write a program that will print the letter grade, given a variable with a test score.
//Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

//Your program should have a variable to store the letter grade (an integer between 0 and 100)

var testScore = 40;

if (testScore <= 100 && testScore >=90) {
    console.log("You got an A!");
} else if (testScore >= 80) {
    console.log("You got a B!");
} else if (testScore >= 70) {
    console.log("You got a C...");
} else if (testScore >= 60) {
    console.log("You got a D :(");
} else {
    console.log("You failed (((");
}