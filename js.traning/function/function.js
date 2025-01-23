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

  //4. higher order function
  function greet3(name) {
    name="Hello"+ name ;
  }
  
  function processUserInput(callback) {
    let name = "Lumbini";
    console.log(callback(name));
  }
  processUserInput(greet3); // Output: Hello, Lumbini!
  
  

