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
// 4.splice
// 5.slice
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







