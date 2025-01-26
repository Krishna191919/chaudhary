// types of function
// a. Normal function without parameter
function greet0(){
  console.log("namaste");
}
greet0();

// b. parameterized function
function multiply(a,b){
  let result=a*b;
  console.log(result);
}
multiply(10,20);

// area of circle !!
function area(R){
  const pi=3.14;
  let areaofcircle=pi*R*R;
  console.log(areaofcircle);
}area(9);

// volume of cuboid!!
function cuboid(l,b,h){
  let volumeofcuboid=l*b*h;
  console.log(volumeofcuboid);
  
}
cuboid(10,15,9);

// c.arrow function 
const area1 = (R) => {
  const pi=3.14;
   areaofcircle=pi*R*R;
  console.log(areaofcircle);
} 
area1(9);

// 1.function declaration
function greet(name1,name2){
    console.log("hello "+ name1+name2);
    
} greet("krishna sir ","sanjog sir");


// sum two number
function sum(a,b){
    console.log(a+b);
} 
sum(10,20);
sum(30,20);

// multiplication num
function multi(a,b){
    return a*b;
} 
let a=multi.toString(10,20);
console.log(a);


/ 2.function expression 
// name(); // call function 
// function name (){
//     console.log("hello world");
// }
// // wap to check the number is even or odd!!
// function evenorodd1 (a){
//     if (a%2===0){
//         console.log(`${a} is even number`);
//     } else{
//         console.log(`${a} is odd number`);
//     }
// } evenorodd1(15);
// //        OR
// function evenorodd2(b){
//     if (b%2===0){
//         return`${b} is even number`;
// } else{
//     return`${b} is oddd number`;
// }
// } let result=evenorodd2(10);
// console.log(result);
//       OR

// const greet = function(name) {
//     console.log("Hello, " + name + "!");
//   };
  
//   greet("Lumbini"); // Output: Hello, Lumbini!
  

// 3. arrow function
// const greet1 = (name) => {
//     console.log("Hello, " + name + "!");
//   };
  
//   greet1("Lumbini"); // Output: Hello, Lumbini!

 
  
  

