// Array are collection of element of with different data types !!
// Array are mutable in nature!!

// syntax 
// const var_name= [item 1,item2,item3.....item n]

//example:
// const array_item =['fruit','vegetable',200,1.5,true]
// console.log(array_item[0]);
// console.log(array_item[1]);
// console.log(array_item[2]);
// console.log(array_item[3]);
// console.log(array_item[4]);

// let array=[];
// array[0]="fruit";
// array[1]=123;
// array[2]=12.5;
// array[3]=true
// array[4]='vegetable';
// console.log(array_item);

// // Array methodes!!
// 1.push 
//let course = ['c','sd','is']
//course.push("isp");
//console.log(course);

// 2.pop
// let course1 = ['c','sd','is']
//  course.pop('is')
// console.log(course);

// 3.concat
//concat methode
// let fruits=[350];
// let newarray=array_item.concat(fruits);
// console.log(newarray);

// 4.splice
//removing elements
let fruits0 = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2); // Removes 2 elements starting at index 1
console.log(fruits); // ['apple', 'date']

// adding elements
let fruits1 = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(2, 0, 'kiwi', 'lemon'); // Adds 'kiwi' and 'lemon' at index 2 without removing any elements
console.log(fruits); // ['apple', 'banana', 'kiwi', 'lemon', 'cherry', 'date']

// replacing elements
let fruits2 = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2, 'kiwi', 'lemon'); // Removes 2 elements starting at index 1 and adds 'kiwi' and 'lemon'
console.log(fruits); // ['apple', 'kiwi', 'lemon', 'date']

// removing elements from the starting of number!!
let fruits3 = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1); // Removes all elements starting from index 1
console.log(fruits); // ['apple']

// 5.slice
const fruit=['apple','banana','mango','pineapple'];
const array=fruit.slice(1,3);// print starting value from 1 and befor ending 3!! 
console.log(array);

// 6.shift
const delitem1 =['fruit','vegetable',200,1.5,true];
delitem1.shift();// delete items from first value of array
console.log(delitem1);

// 7.unshift
const additem=['apple','banana','mango'];
additem.unshift("pineple");// add value from the starting in array
console.log(additem);


// length methode!!
const array_item =['fruit','vegetable',200,1.5,true];
let size=array_item.length;// show the size of arrat elements
console.log(size);



//push methode 
// array_item.push("krishna"); add krishna at last in array
// console.log(array_item);

//pop methode
let removeditem=array_item.pop();
console.log(removeditem);

//concat methode
let fruits=[350];
let newarray=array_item.concat(fruits);
console.log(newarray);

//at()
console.log(newarray.at(1));// print the value of array where 1 defined!!

//.toString()
console.log(array_item.toString());// convert value into string or delete the (''or"") symnbols from them!!

//.join("sign")
console.log(array_item.join("+"));// add sign or words between array values

// changing elements using index
let num=[1,2,3,4,5];
console.log(num);
num[0]="ram";// replace the value of array 
console.log(num);







