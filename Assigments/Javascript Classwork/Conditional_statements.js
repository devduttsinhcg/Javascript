let marks = 42;
let studentName = "Raju";
if (marks >= 30){
    console.log("${studentName} passed")
};

//_______________________________________________________________________________________________________________________________________________________

let number = -2;
if(number < 0){
    console.log("Negative")
};

//_______________________________________________________________________________________________________________________________________________________

let number1 = 4;
if(number1 % 2 == 0){
    console.log("Number is even.")
};

//_______________________________________________________________________________________________________________________________________________________

let temeprature =  31;
if (temeprature > 30){
    console.log("Warm environment.")
};

//_______________________________________________________________________________________________________________________________________________________

let age = 18;
if (age >= 18){
    console.log("Eligible to vote.")
};

//_______________________________________________________________________________________________________________________________________________________

let isLoggedIn = false;
if (isLoggedIn){
    console.log("User is allowed")
}else{
    console.log("User is not allowed")
};

//_______________________________________________________________________________________________________________________________________________________

let number2 = 8;
if (number2 > 0) {
    console.log("Positive numbeer")
} else if (number2 == 0) {
    console.log("Zero")
} else {
    console.log("Negative number")
};

//_______________________________________________________________________________________________________________________________________________________

let year = 2024;
if((year  % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
    console.log("Leap year")
}else{
    console.log("Not a leap year.")
};

//_______________________________________________________________________________________________________________________________________________________

let number3 = 8;

if (number3 > 0) {
    console.log("Positive numbeer")
} 
else if (number3 == 0) {
    console.log("Zero")
} 
else {
    console.log("Negative number")
};

//_______________________________________________________________________________________________________________________________________________________

let marksOfStudent = 39;

if (marksOfStudent >= 75 && marksOfStudent <= 100) {
    console.log("Distinction")
}
else if (marksOfStudent >=60) {
    console.log("Good")
}
else if (marks >= 35) {
    console.log("second-class")
}
else {
    console.log("Fail")
};

//_______________________________________________________________________________________________________________________________________________________

let ageOfPerson = -78;

if (ageOfPerson <= 12 && ageOfPerson > 0) {
    console.log("Ticket price is 100 Rs.")
}
else if (ageOfPerson <= 59 && ageOfPerson > 12) {
    console.log("Ticket price is 200 Rs.")
}
else if (ageOfPerson >= 60 && ageOfPerson <= 100) {
    console.log("Ticket price is 150 Rs")
}
else{
    console.log("Enter the valid age.")
};

//_______________________________________________________________________________________________________________________________________________________

let num1 = 23;
let num2 = 57;
let num3 = 99;

if (num1 > num2 && num1 > num3 ){
    console.log("${num1} is the greatest of all.")
}
else if (num2 > num1 && num2 > num3 ){
    console.log("${num2} is the greatest of all.")
}
else if (num3 > num2 && num3 > num1 ){
    console.log("${num3} is the greatest of all.")
}
else{
    console.log("TIE")
};

//_______________________________________________________________________________________________________________________________________________________

let number5 = -8;

if (number5 > 0) {
    if (number5 % 2 == 0){
        console.log("The number is positive and even.")
    }
    else{
        console.log("Number is positive and odd.")
    };
}
else{
    if (number5 % 2 == 0){
        console.log("Number is negative and even")
    }
    else {
        console.log("NUmber is negative and odd")
    };
};

//_______________________________________________________________________________________________________________________________________________________

let markOfStudent = 45;

if (markOfStudent >= 35) {
    if (markOfStudent >= 90) {
        console.log("Excellent")
    }
    else {
        console.log("Passed")
    };
}
else { 
    console.log("Fail")
};

//_______________________________________________________________________________________________________________________________________________________

//                                                          ****************************                                                                                                    
//                                                          |--------------------------|                                                
//                                                          |        SWITCHCASE        |                                               
//                                                          |--------------------------|                                              
//                                                          ****************************                                           
// ______________________________________________________________________________________________________________________________________________________

let day = 6;

switch (day) {

    case 1:
        console.log("Monday")
        break;
    
    case 2:
        console.log("Tuesday")
        break;
    
    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;
        
    case 5:
        console.log("Friday")
        break;
        
    case 6:
        console.log("Saturday")
        break;
        
    case 7:
        console.log("Sunday")
        break; 
        
    default:
        console.log("Invalid day number.")

};

//_______________________________________________________________________________________________________________________________________________________

let operator = "+";
let a = 10, b = 20;

switch (operator) {

    case "+":
        console.log("Addition of a and b is ${a + b}.")
        break;

    case "-":
        console.log("Subtraction of a and b is ${a - b}.")
        break;
        
    case "*":
        console.log("Multiplication of a and b is ${a * b}.")
        break;
        
    case "/":
        console.log("Division of a and b is ${a / b}.")
        break;
        
    case "%":
        console.log("Remainder of a and b is ${a % b}.")
        break;
        
    case "**":
        console.log("Exponentiation of a and b is ${a ** b}.")
        break;    
     
    default:
        console.log("Enter a valid operator.")    

};

//_______________________________________________________________________________________________________________________________________________________

let menuNumber = 4;

switch (menuNumber) {

    case 1:
        console.log("PIZZA")
        break;

    case 2:
        console.log("GARLIC-BREAD")
        break;
        
    case 3:
        console.log("PASTA")
        break;
        
    case 4:
        console.log("BURGER")
        break;  
        
    default:
        console.log("Enter a valid menu number.")

};

//_______________________________________________________________________________________________________________________________________________________

let mark = 34;

switch (true) {
    
    case mark >= 90 && mark <= 100:
        console.log("Grade = A")
        break;
    
    case mark >= 75 && mark <= 89:
        console.log("Grade = B")
        break;

    case mark >= 60 && mark <= 74:
        console.log("Grade = C")
        break; 
    
    case mark >= 35 && mark <= 59:
        console.log("Grade = D")
        break; 
    
    case mark >= 0 && mark <= 34:
        console.log("Fail")
        break;    
    
    default:
        console.log("Enter valid marks.")

};

//_______________________________________________________________________________________________________________________________________________________

let num = 13;

console.log( num % 2 == 0 ? "EVEN" : "ODD" );

//_______________________________________________________________________________________________________________________________________________________

let num4 = 0;
let result = ( num4 > 0 ? "Positive" : num4 == 0 ? "Zero" : "Negative" );

console.log(result);

//_______________________________________________________________________________________________________________________________________________________

let markOftheStudent = 99;
let resultOfTheStudent = ( markOftheStudent > 35 && markOftheStudent <= 100 ? "Pass" : markOftheStudent == 35 ? "Just Passed" : "Fail" );

console.log(resultOfTheStudent);

//_______________________________________________________________________________________________________________________________________________________

let num5 = 8;
let num6 = 7;

let r_e_s_u_l_t = ( num5 > num6 ? `${num6} is the mininimum number.` : num5 == num6 ? `Both are equal.` : `${num5} is the mininimum number.` );

console.log(r_e_s_u_l_t);

//_______________________________________________________________________________________________________________________________________________________

