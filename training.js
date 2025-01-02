Homework(JS-Training)
1. Write a program to determine the grade of a student based on their marks:
    * Marks >= 90: A
    * Marks >= 75: B
    * Marks >= 50: C
    * Else: F
  ANSWER👇:
Let marks=78 ;
if(marks>=90){console.log("A Grade!!");
} else if (marks>=75){console.log("B Grade!!");} else if (marks>=){console.log(" C Grade!!");} else {console.log("Fail!!");}
// output:B Grade!!
 

2. Write a program that takes a year as input and checks whether it is a leap year.
ANSWER👇:
Let year=2020;
if(year%4==0){console.log("it's leap year");} else{console.log("it's not leap year")}
// output: it's leap year 

3. Write a program to simulate a simple calculator using a switch statement. The user enters two numbers and an operator (+, -, *, /).
ANSWER👇:
Let a=40;
Let b=50;
Let operator="*";
Switch(operator){
case'*'=console.log(a*b);
break;
case'+'=console.log(a+b);
break;
case'-'=console.log(a-b);
break;
case'/'=console.log(a/b);
default {console.log("Invalid operator");
}