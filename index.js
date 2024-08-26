// cannot be a reserved keyword

// should be meaning full/
//cannot start with a number
//cannot contain a space or hypen(-)
//Are case-sensitive
//should be camlecase


// Primitive data types

// console.log('Hello World');

// function aame(a, b) {
//   var c = a + b;
//   return c;  // Return the result so it can be used
// }

// var a = Number(prompt("Enter a number."));
// var b = Number(prompt("Enter another number"));

// var result = aame(a, b);
// console.log("The sum is: " + result);  // Output the result



/////////// Adding two numbers/////

// function add(a,b){
//     var c = a + b;
//     return c;
// }

// var a = Number(prompt("Enter a first number."));
// var b = Number(prompt("Enter a second number."));

// result = add(a,b);
// console.log(result);


//////////// Object of student ////////

// const student ={
//     firstName: "Aayush",
//     lastName: "Shahi",
//     age:20,
// };
// console.log(` My Name is ${student.firstName} ${student.lastName}. I am ${  student.age} years old.`);


// Object inside objects of Javascript of Students ////

// const student ={
//     firstName: "Aayush",
//     lastName: "Shahi",
//     age:20,
//     address:{
//         street: "pasikot",
//         state: "kathmandu",
//         ward: "04",
//     }
// };

// console.log(` My name is ${student.firstName} ${student.lastName}. I am ${student.age} years old. I live in ${student.address.state}.`);


////////// Object Methods ///////////

// const student ={
//     firstName: "Aayush",
//     lastName: "Shahi",
//     age:20,
    
// fullName:function(){
//     return ` Hello my name is ${this.firstName} ${this.lastName}.` ;
// }
// };
// console.log(student.fullName());


// Making addition and subtraction from object method

// const calculator ={
//     a:20,
//     b:20,
//     add: function(){
//         return this.a+ this.b;
//     }
// };

// console.log(calculator.add());

/// another way /////////

//  const calculator ={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
// };

// console.log(calculator.add(2,3));
// console.log(calculator.sub(5,2));

//// Object constructor ////

// function Person(first,last,age){
//     this.firstName= first;
//     this.lastName= last;
//     this.age= age;
// }
// Person.prototype.getdetail = function(){
//     return ` My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. `;
// }

// const student = new Person("Aayush","Shahi",20);
// console.log(student.getdetail());


// let a = "AAYUSH";
// let length = a.at(3); 
// let length1 = a.length;
// let length2 = a.charAt(3);
// console.log(length);
// console.log(length1);
// console.log(length2);



//Sum of Two Numbers: Write a function that takes two numbers and returns their sum.



// function sum(a, b) {
//   var c = a + b;
//   return c;  // Return the result so it can be used
// }

// var a = Number(prompt("Enter a number."));
// var b = Number(prompt("Enter another number"));

// var result = sum(a, b);
// console.log("The sum is: " + result);  // Output the result


//Find the Largest Number: Create a function that takes an array of numbers and returns the largest number.

// function largest(a){
//     return Math.max.apply(null,a);
// }
// const array = [10,20,30,40,50];
// result = largest(array);
// console.log("The largest element in the array is", result);



//Reverse a String: Write a function that reverses a given string.

// function reverse(a){
//     const rev = a.split('').reverse().join('');
//     return rev;
// }

// const str = (prompt("Enter a String"));
// result = reverse(str);
// console.log("The reverse of the string is", result);



// Count Vowels: Write a function that counts the number of vowels in a given string.


// function vowel(a){
//     let count =0;
//     vow = "aeiouAEIOU";

//     for (let i=0; i<a.length; i++){
//         if(vow.includes(a[i])){
//             count ++;
//         }
//     }
//     return count;
// }

// const inputString = prompt("Enter a string:");
// const vowelCount = vowel(inputString);
// console.log("The number of vowels in the string is:",vowelCount);


// Check Even or Odd: Create a function that checks whether a number is even or odd.


// function check(a){
//     if(a%2==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }

// const a = Number(prompt("Enter a number: "));
// const result = check(a);
// console.log("The entered number is", result);


// Factorial: Write a function to find the factorial of a given number.

// function fact(a){
//     if(a<0){
//         return "Factorial cannot be found of negative number";
//     }
//     let result = 1;
//     for(let i=2;i<=a;i++){
//         result*=i;
//     }
//     return result;
// }

// const a = Number(prompt("Enter a number:"));
// const result = fact(a);
// console.log("The factorial of the given number is",result);


// Generate a Random Number: Write a function that generates a random number between 1 and 100.

// function rand(){

// return Math.floor(Math.random() * 100) + 1;
// }


// const randomNumber = rand();
// console.log("The random number from 1 to 100 is",randomNumber);



// let a =[1,2,3,4,5,6,87,,9,10];
// let newar= a.slice(3,8);
// console.log(newar);
// console.log("Hello world");

// const date = new Date();
// console.log(date.getFullYear());

    //declaration //condition check  //incerement

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// Table from 1 to 10

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value: ${i}`)
// for (let j = 0; j <=10; j++) {
//     console.log(`inner loop ${j} value: ${i}`)
//     console.log(i + "*" +j + '='+ i*j)
// }    
// }


// let myArray = ["Flash","Baatman","Superman"]
// myArray.push("HERo"); 
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// Break 

// for (let index =1; index<=20; index++) {
//     if(index ==5){
//         console.log(`Detected 5`);
//     break;
//    }
// console.log(`value of i is${index}`)
// }



// and continue

// for (let index =1; index<=20; index++) {
//     if(index ==5){
//         console.log(`Detected 5`);
//     continue;
//    }
// console.log(`value of i is${index}`)
// }



/////////////////////// While Loop

// let index =0;
// while (index <=10){
//     console.log(`Value of index is ${index}`);
//     index = index +2;
// }

// let myArray = ["Falsh","Hero","Superman"]
// let arr = 0;

// while(arr <myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr++;
// }

///// do while

// let score =1;
// do {
//     console.log(`Score is ${score}`)
//     score++
// } while (score <=10);

/////For off in Array

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// /////For off in String

// const nam = "Aayush";
// for (const name of nam) {
//     if(name =="y"){
//         continue
//     }
//     console.log(name)
// }

///// Maps it is object it is a collection of the key and values there is no duplicate valur

// const map = new Map();
// map.set('NE',"Nepal");
// map.set('USA',"United States of America");
// map.set('IN',"India");
// map.set('NE',"Nepal");

// // console.log(map);

// for (const [key,value]of map) {
//     console.log(key,':-',value);
// }

// const myObject = {
//     Game1: "FF", 
//     Game2: "PES",
// }
// for (const [key,value]of myObject) {
//    console.log(key,':-',value);

// }

/////// For object we used the for in insted of forof
// const myObject ={
//     name: "Aayush",
//     caste: "Shahi",
//     address: "KTM"
// }
// for (const key in myObject) {
//     console.log(`${key} :${myObject[key]}`)
//    //console.log((`${key} shortcut is for ${myObject[key]}`));
// }


// for in used for object


// const a =["a","b","c","d","e"];
// for (const key in a) {
//     console.log(a[key]);
// }


// const map = new Map();
// map.set('NE',"Nepal");
// map.set('USA',"United States of America");
// map.set('IN',"India");
// map.set('NE',"Nepal");

// for (const key in map) {

//     console.log(key);
// }


//////////// For each

//const coding = ["Java", "Js", "ruby", "python"];
// coding.forEach( function (item){
//     console.log(item) 

// })

// coding.forEach((item) => {
//     console.log(item)
// });

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

// const myCoding = [
//     {
//         languageName: "Java",
//         languageFileNAme: "java",
//     },
//     {
//         languageName: "Javascript",
//         languageFileNAme: "js",
//     },
//     {
//         languageName: "python",
//         languageFileNAme: "py",
//     },
// ]
// myCoding.forEach( (item) =>{
//     console.log(item.languageName);
// })


// const value = coding.forEach((item) => {
//     console.log(item);
//     r//eturn item
// })


//const myNums = [1,2,3,4,5,6,7,8,9,10];

// // const a =myNums.filter((num) => num>4) ///  no need of return implicit
// const a = myNums.filter((num) =>{          ///  Need of return keyword explicit
//     return num >4
// })
// console.log(a)



// const a = [1,32,34,5];
// // for (const key in a) {
// //     console.log(a[key]);
// // }

// // for (const key of a) {
// //     console.log(key);
// // }

// const myNums=[1,2,3,4,5,6,]

// const newNums= []
// myNums.forEach((item) =>{
//     if(item>4){
//         newNums.push(item);
//     }
// })
// console.log(newNums);


// const books = [
//     { title: "CS", genre: "Fiction",edition:2024
// },
//    { title: "MATH", genre: "Soultion",edition:2022
// },
// { title: "Social", genre: "History",edition:1999
// },
// { title: "Nepali", genre: "History",edition:2023
// },
// ]
// let userBooks =books.filter((item) =>item.genre ==="Soultion")
// userBooks =books.filter((item)=> { 
//     if(item.edition>=2023 && item.genre==="History"){
//         return item
//     }
// }); 
// console.log(userBooks)


// const myNumber = [1,2,3,4,5,6,7];

//const newNums = myNumber.map((num)=> {return num+10})

// const newNums = myNumber
//                 .map((num)=> num*10)
//                 .map((num) =>num+1)
//                 .filter((num)=> num>=40)
// console.log(newNums);


//////////////REDUCE/////////////////


const  myNums=[1,2,3]

// const initialValue=0;

// const total =myNums.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curr ${curr}`)
//     return acc + curr
// },initialValue)
// console.log(total);

// const total = myNums.reduce((acc,curr)=> acc+curr,0)
// console.log(total);

const shoppingCart =[
    {itemName: "Js cousse", price:299},
    {itemName: "Cs cousse", price:999},
    {itemName: "py cousse", price:5000},
    {itemName: "date cousse", price:1299},
]

const result =shoppingCart.reduce((acc,curr)=> acc+curr.itemName,0)
console.log(result);
