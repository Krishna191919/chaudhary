// 1.logical operator(AND(&&), OR(||),NOT(!))
// //And operator(&&)(both condition should be true)
// let a=true;
// let b=true;
// if(a&&b){
//     console.log("Access granted");
    
// } else {
//     console.log("Access denied");
    
// }

// //OR operator(||)(at least one condition should be true)
// let faculty="science";
// let gpa=3.0;
// if(faculty||gpa){
//     console.log("Access Granted for Btech");
// } else{
//     console.log("Access Denied for Btech");
// }

// //NOT operator(!)(convert true to false & vice versa)
// let isLoggedIn = false;

// if (!isLoggedIn) {
//     console.log("Please log in.");
// } else {
//     console.log("Welcome back!");
// }
// Output: Please log in.


// 2. comparison operator(==,===,!=,!==,>,<,>=,<=)
// let c=20;
// let d=20;
// console.log(c==d);
// console.log(c===d);
// console.log(c!=d);
// console.log(c!==d);
// console.log(c>d);
// console.log(c<d);
// console.log(c>=d);
// console.log(c<=d);
// 3. Arithmatic operator(+,-,*,/,%)

// let a=20;
// let b=10;
// let sum=a+b;
// let subtraction=a-b;
// let multiply=a*b;
// let divide =a/b;
// let reminder=a%b;
// console.log(sum);
// console.log(subtraction);
// console.log(multiply);
// console.log(divide);
// console.log(reminder);


// let a=50;
// let b=40;
// let operator="*";
// switch(operator){
// case'+':console.log(a+b);
// break;
// case'*':console.log(a*b);
// break;
// case'-':console.log(a-b);
// break;
// case'/':console.log(a/b);
// break;
// case'%':console.log(a%b);
// break;
//}

// 4. bitwise operator






// 5. increament/decrement operator
// 6.assignment operator (=,+=,-=,*=,/=,%=)
// let e=50;
// console.log(e=e+1);
// console.log(e+=1);
// console.log(e-=1);
// console.log(e*=1);
// console.log(e/=1);
// console.log(e%=1);

// 7.ternary operators
//const age=18;
// let canvote=(age>=18)?console.log("yes u can vote"):console.log("you are not eligible");


//wap to check if the student is pass or not, student is passed when they goet above 40% or 2.4 gpa

// let total=40;
// let gpa1=1.82;
// let result=(total>=40||gpa1>=2.4)?console.log("student is pass"):console.log("student is fail");



// Homework(JS-Training)
// 1. Write a program to determine the grade of a student based on their marks:
//     * Marks >= 90: A
//     * Marks >= 75: B
//     * Marks >= 50: C
//     * Else: F
//   ANSWER👇:
// Let marks=78 ;
// if(marks>=90){console.log("A Grade!!");
// } else if (marks>=75){console.log("B Grade!!");} else if (marks>=){console.log(" C Grade!!");} else {console.log("Fail!!");}
// // output:B Grade!!
 

// 2. Write a program that takes a year as input and checks whether it is a leap year.
// ANSWER👇:
// Let year=2020;
// if(year%4==0){console.log("it's leap year");} else{console.log("it's not leap year")}
// // output: it's leap year 

// //3. Write a program to simulate a simple calculator using a switch statement. The user enters two numbers and an operator (+, -, *, /).
// //ANSWER👇:
// Let a=40;
// Let b=50;
// Let operator="*";
// Switch(operator){
// case'*'=console.log(a*b);
// break;
// case'+'=console.log(a+b);
// break;
// case'-'=console.log(a-b);
// break;
// case'/'=console.log(a/b);
// default {console.log("Invalid operator");
// }



// let day = 3;
// if (day === 1){
// console.log("its a sunday");
// }
// else if (day === 2){
//     console.log("its a monday");
// }
// else if (day === 3){
//     console.log("its a tuesday");
// }
// else if (day === 4){
//     console.log("its a wednesdayday");
// }
// else if (day === 5){
//     console.log("its a thursday");
// }
// else if (day === 6){
//     console.log("its a fridayday");
// }
// else if (day === 7){
//     console.log("its a saturdayday");
// }
// else {
//     console.log("not a valid date")
// }



// // wap to check if a given number is even or odd

// let num = 1;
// if (num % 2 == 0){
//     console.log("it is a even number");
// }
// else{
//     console.log("it is a odd number")
// }


// // wap to determine whether a person is eligibele fpr vote or not

// let age = 17;

// if (age>=18){
//     console.log("you are eligible for vote");}
//     else{
//         console.log("you are not eligible for vote");
//     }

//     // wap to check whether it is positive or negative or zero.


//     let number = 1;
//     if (number>0){
//         console.log("it is a positve number");
//     }
//     else if (number<0){
//         console.log("it is a negative number");
//     }
//     else if(number === 0) {
//         console.log("it is a zero")
//     }
//     else {
//         console.log("unvalid number")
//     }



// let year=2024;
// if(year%4===0){console.log("its leap year");
// } else{console.log("its not leap year");
// }

//switch case!!
// switch(expression){
//     case value1:
//         // code block
//         break;
//         case value2:
//             //code block
//             break;
//             case value3:
//                 //code block
//                 break;
//                 default:
//                     break;
// }


//type conversion parseInt!!
// let day = 1;
// let dayName=parseInt(day);
// switch (dayName) {
//     case 1:
//         dayName = `${day}. Sunday`;
//         break;
//     case 2:
//         dayName =`${day}. Monday`;
//         break;
//     case 3:
//         dayName = `${day}. Tuesday`;
//         break;
//     case 4:
//         dayName = `${day}. Wednesday`;
//         break;
//     case 5:
//         dayName = `${day}. Thusday`;
//         break;
//     case 6:
//         dayName = `${day}. Friday`;
//         break;
//     case 7:
//         dayName = `${day}. Saturday`;
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// console.log(dayName);





