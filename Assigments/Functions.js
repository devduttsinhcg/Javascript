// A function is a reusable block of code designed to perform a specific task.
// Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure
// Easier debugging

//________________________________________________________________________________________________________________________________________________

function greet() {
    return "Welcome to CodingGita!";
}

console.log(greet("Ashish"));
console.log(greet("Devdutt"));

//________________________________________________________________________________________________________________________________________________

// JavaScript moves variable declarations to the top of their scope before executing code.

// But only the declaration is moved, not the assignment.

greet();  // Works

function greet() {
    console.log("Hello students of CodingGita");
}

//________________________________________________________________________________________________________________________________________________

let calculateAverage = function (a, b, c) {
    return (a + b + c) / 3;
}
calculateAverage(90, 70, 80)

//________________________________________________________________________________________________________________________________________________

// Parameters
// Variables defined inside the function definition.

// Example:

// function add(a, b) {}
// a and b are parameters.

// Arguments
// Actual values passed while calling the function.

// add(10, 20);
// 10 and 20 are arguments.

function multiply(x, y) {
    return x * y;
}
console.log(multiply(12, 5));

//________________________________________________________________________________________________________________________________________________

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(24));
console.log(isEven(17));

//________________________________________________________________________________________________________________________________________________

function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));

//________________________________________________________________________________________________________________________________________________

function greet() {
    console.log("Hello!");
}

let resultm = greet();

console.log(resultm);

//________________________________________________________________________________________________________________________________________________

const calculateSimpleInterest = function(principal, rate, time) {
    return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));

//________________________________________________________________________________________________________________________________________________

function studentMessage(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentMessage("Rahul", 85));
console.log(studentMessage("Priya", 92));

//________________________________________________________________________________________________________________________________________________

let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

function displayCourse() {
    console.log("Course:", course);
}

displayAge();
displayCourse();

// console.log(age);

//________________________________________________________________________________________________________________________________________________

function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
           " with average " + average;
}

console.log(analyzeStudent("Rahul", 80, 90, 70));
console.log(analyzeStudent("Priya", 95, 85, 90));

//________________________________________________________________________________________________________________________________________________

function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }

    return name + " total marks: " + total();
}

console.log(studentReport("Rahul", 80, 85, 90));

//________________________________________________________________________________________________________________________________________________

function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = "";

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student: " + name +
           "\nTotal Marks: " + total +
           "\nAverage: " + average +
           "\nResult: " + result;
}

console.log(generateReport("Rahul", 80, 70, 90));
console.log(generateReport("Priya", 30, 35, 25));

//________________________________________________________________________________________________________________________________________________

function sumOfThree(a, b, c) {
    return a + b + c;
}

function averageOfTwo(x, y) {
    return (x + y) / 2;
}

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function fullName(first, last) {
    return first + " " + last;
}

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(80, 100));
console.log(maxOfTwo(45, 72));
console.log(fullName("Rahul", "Sharma"));

//________________________________________________________________________________________________________________________________________________

const calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));

//________________________________________________________________________________________________________________________________________________

function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));

//________________________________________________________________________________________________________________________________________________

const celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));

//________________________________________________________________________________________________________________________________________________

const calculate = function(a, b) {
    return a + b;
};

console.log(calculate(5, 3));

//________________________________________________________________________________________________________________________________________________

function calculateBill(price, quantity) {
    function total() {
        return price * quantity;
    }

    return "Total bill: " + total();
}

console.log(calculateBill(150, 4));

//________________________________________________________________________________________________________________________________________________

function processStudent(name, m1, m2, m3) {

    function calculateTotal() {
        return m1 + m2 + m3;
    }

    function calculateAverage() {
        return calculateTotal() / 3;
    }

    let total = calculateTotal();
    let average = calculateAverage();
    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student: " + name +
           "\nTotal: " + total +
           "\nAverage: " + average +
           "\nResult: " + result;
}


function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher";
    } else if (avg2 > avg1) {
        return "Second average is higher";
    } else {
        return "Both averages are equal";
    }
}


console.log(processStudent("Rahul", 80, 90, 70));
console.log(processStudent("Priya", 95, 85, 90));
console.log(processStudent("Amit", 30, 35, 25));


console.log(compareAverages(80, 90));
console.log(compareAverages(85, 85));

//________________________________________________________________________________________________________________________________________________

//-------------------------------------------------------------------SCOPE------------------------------------------------------------------------

//________________________________________________________________________________________________________________________________________________

var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();

// City is the varaible assigned for the global scope.
// Country is the varaible assigned for functional scope.
// Yes both variables are assigned can be accesed through display.

//________________________________________________________________________________________________________________________________________________

var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

// college ==> global scope
// name and age ==> functional scope
// subject ==> functional scope

//________________________________________________________________________________________________________________________________________________

function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

// it will show reference error as number is not defined and var follows the rules of functional.

//________________________________________________________________________________________________________________________________________________

const globalVar = "Global";

function showVars() {
  const localVar = "Local";
  console.log(globalVar);
  console.log(localVar);
}

showVars();
console.log(globalVar);

//________________________________________________________________________________________________________________________________________________

var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// Output ==> I like Cricket
//            Cricket

//________________________________________________________________________________________________________________________________________________

var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);

// Output ==>  English
//             Gujarati
//             Gujarati

//________________________________________________________________________________________________________________________________________________

function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

// This code will not produce any error and output will be 75.

//________________________________________________________________________________________________________________________________________________

var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message); // this will cause an error cause message is not defined it is defined only inresepctive functinal scop.

//________________________________________________________________________________________________________________________________________________

let school = "Sunrise School";

function shoolName() {
    console.log(school)
};

function updateSchool() {
    school = "Green Valley School"
};

shoolName();
updateSchool();
console.log(school)

//________________________________________________________________________________________________________________________________________________

function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);

// output ==> 300;
//            Error

//________________________________________________________________________________________________________________________________________________

function employee() {
    var salary = 30000;
}
employee();
console.log(salary);

// Output ==> Error

//________________________________________________________________________________________________________________________________________________

var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

//________________________________________________________________________________________________________________________________________________

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();

// Output ==> 50 and 50
//            Yes. Each time calculate() runs, a new local execution context and a fresh local variable result are created in memory.
//            No. The local variable result is scoped to the function and is destroyed (garbage collected) once the function finishes executing. It cannot be accessed from outside the function.

//________________________________________________________________________________________________________________________________________________

function calculateArea() {
    let length = 8;
    let width = 4;
    
    let area = length * width;
    
    console.log("The area of the rectangle is: " + area);
}

calculateArea(); 

//________________________________________________________________________________________________________________________________________________

if (10 > 5) {
    var result = "Success";
}
console.log(result);

// Output ==> Success

//________________________________________________________________________________________________________________________________________________

var number = 1;
if (true) {
    var number = 2;
}
console.log(number);

// Output ==> 2

//________________________________________________________________________________________________________________________________________________

var message = "Start";
{
    var message = "End";
}
console.log(message);

// Output ==> End

//________________________________________________________________________________________________________________________________________________

if (false) {
    var result = 100;
}
console.log(result);

// Yes false will prevent var from being hoisted.

//________________________________________________________________________________________________________________________________________________

if (true) {
    var secret = "Hidden";
}
console.log(secret);

// Output ==> Hidden;

//________________________________________________________________________________________________________________________________________________

for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

// Output ==> 2 4 6 Final: 8

//________________________________________________________________________________________________________________________________________________

var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);

// Output ==> 1 2 3 Count: 4

//________________________________________________________________________________________________________________________________________________

var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);

// Output ==> 5 4 3 After loop 2

//________________________________________________________________________________________________________________________________________________

for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);

// Output ==> Item: 1 Item: 2 Item: 3 Last Item: 4

//________________________________________________________________________________________________________________________________________________

for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);

// Output ==> 1 2 3 4 error

//________________________________________________________________________________________________________________________________________________

function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();

// Output ==> 10 20 30 Final:4

//________________________________________________________________________________________________________________________________________________

function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);

// Output ==> 60 70 80 90 Error

//________________________________________________________________________________________________________________________________________________

function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

// Output ==> 5 6 7 FInal vAlue: 8 

//________________________________________________________________________________________________________________________________________________

function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();

// Output ==> error

//________________________________________________________________________________________________________________________________________________

function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log("After loop:", i); // Prints 6
}

printNumbers();
console.log(i); // ReferenceError

//________________________________________________________________________________________________________________________________________________

console.log(score);
var score = 90;
console.log(score);

// Output ==> undefined 90

//________________________________________________________________________________________________________________________________________________

var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

//________________________________________________________________________________________________________________________________________________

console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);

//________________________________________________________________________________________________________________________________________________

function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();

// Output ==> undefined 50

function calculate() {
    var total; 
    console.log(total); 
    total = 50; 
    console.log(total); 
}

calculate();

//________________________________________________________________________________________________________________________________________________

var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);