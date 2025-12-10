// ASSIGNMENT 2: PART A (Basic Revision)
// ==========================================

// 1. Sum of two numbers
console.log("\n--- Q1: Sum of two numbers ---");
let numA = 50;
let numB = 100;
let sum = numA + numB;
console.log("The sum is:", sum);


// 2. Print "Hello <name>"
console.log("\n--- Q2: Hello Name ---");
let userName = "Gaurav";
console.log("Hello", userName);


// 3. Even/Odd check
console.log("\n--- Q3: Even or Odd ---");
let checkNum = 7;
if (checkNum % 2 === 0) {
    console.log(checkNum, "is Even");
} else {
    console.log(checkNum, "is Odd");
}


// 4. Celsius to Fahrenheit
// Formula: (C * 9/5) + 32
console.log("\n--- Q4: Celsius to Fahrenheit ---");
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F");


// 5. Max among 3 numbers
console.log("\n--- Q5: Max of 3 numbers ---");
let n1 = 10, n2 = 50, n3 = 25;
if (n1 >= n2 && n1 >= n3) {
    console.log("Max is:", n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("Max is:", n2);
} else {
    console.log("Max is:", n3);
}


// 6. Find string length
console.log("\n--- Q6: String Length ---");
let text = "JavaScript";
console.log("The length of '" + text + "' is:", text.length);


// 7. Toggle boolean
// Toggling means changing true to false, or false to true
console.log("\n--- Q7: Toggle Boolean ---");
let isLightOn = true;
console.log("Before toggle:", isLightOn);
isLightOn = !isLightOn; // The '!' symbol flips the value
console.log("After toggle:", isLightOn);


// 8. Concatenate strings
console.log("\n--- Q8: Concatenate Strings ---");
let firstName = "Gaurav";
let lastName = "Singh";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);


// 9. Positive/Negative/Zero
console.log("\n--- Q9: Positive, Negative or Zero ---");
let numberVal = -5;
if (numberVal > 0) {
    console.log(numberVal, "is Positive");
} else if (numberVal < 0) {
    console.log(numberVal, "is Negative");
} else {
    console.log("Number is Zero");
}


// 10. var/let/const example
console.log("\n--- Q10: var vs let vs const ---");
var x = 10;   // Function scoped
let y = 20;   // Block scoped (Recommended)
const z = 30; // Constant (Cannot be changed)
console.log("var:", x, "let:", y, "const:", z);
// z = 40; // This line would cause an error because z is const


// 11. Multiplication table (for number 5)
console.log("\n--- Q11: Multiplication Table of 5 ---");
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// 12. Sum of first 10 natural numbers
console.log("\n--- Q12: Sum of first 10 numbers ---");
let totalSum = 0;
for (let i = 1; i <= 10; i++) {
    totalSum = totalSum + i;
}
console.log("Sum of 1 to 10 is:", totalSum);


// 13. Switch-case -> Day name
console.log("\n--- Q13: Switch Case (Day Name) ---");
let dayNumber = 3; // 1=Mon, 2=Tue, 3=Wed...
switch (dayNumber) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}


// 14. Function -> Factorial
console.log("\n--- Q14: Factorial Function ---");
function getFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log("Factorial of 5 is:", getFactorial(5));


// 15. Function -> Voting eligibility
console.log("\n--- Q15: Voting Eligibility ---");
function checkVotingAge(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}
console.log("Age 20:", checkVotingAge(20));
console.log("Age 16:", checkVotingAge(16));