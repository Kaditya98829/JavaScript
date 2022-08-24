import fetch from 'node-fetch';
// //----------------------------------------Conditional Statements----------------------------------------////
// /*if statement*/

// let age="25";                                           
// if(age==25){
// console.log("Adult");
// }
// /*if statement*/
// //if else//
// if(age==15){
//     console.log("Adult");
// }
// else{
//     console.log("Teen");
// }
// //if else//

// /*else-if*/

// let newAge = 10;
// if(newAge>=18){
//     console.log("You are Adult Now");
// }
// else if( newAge<=17 && newAge>=13){
//     console.log("You are Teen now")
// }
// else{
//     console.log("See your Adhar Card");
// }
// /*else-if*/

// //Switch-Statement//
// var grade ='B';

// switch (grade) {
//    case 'A': 
//    console.log("Good job");
//    break;

//    case 'B': console.log("Pretty good");
//    break;

//    case 'C': console.log("Passed");
//    break;

//    case 'D': console.log("Not so good");
//    break;

//    case 'F': console.log("Failed");
//    break;

//    default: 
//    console.log("See Your Report Card");
// }
// //Switch-Statement//
// //----------------------------------------Conditional Statements----------------------------------------////

// //-----------------------------------------------Arrays--------------------------------------------------///
// /* Array Declaration */
// // let arr=['Hello','Bhai','Vro'];
// // arr.reverse()
// // console.log(arr);


// // const arr1= new Array('Yin','Yang','Li-Xion',2,5);
// // console.log(arr1[4]);
// /* Array Declaration */


// //-----------------------------------------------Arrays--------------------------------------------------///
// /*Array Methods*/

// //to String
// // const l1= new Array(1,2,3);
// // let n= l1.toString();
// // console.log(l1.toString());
// // console.log(typeof(n));
// //to String


// //join
// // const l1= new Array(1,2,3);
// // let n = l1.join("/");

// // console.log(n);
// //join

// // push or pop
// // const fruit= ['orange','lemon'];
// // let add = fruit.push('kiwi','Anaar');
// // let pop =fruit.pop(); //remode and add on last element
// // console.log(fruit) 


// // push or pop

// //shift
// // const ar = ['Helo','hi','see ya'];
// // let shft = ar.shift();
// // console.log(ar); //shift out first value + shift the index number also


// //shift


// //unshift

// // const arr = ['Hello','Mango','car']
// // const un= arr.unshift("Jelly");
// // console.log(arr[2]);  //add new value at the begining and also shifts the index

// //unshift

// // const arr =['1','2']
// // arr[0]="Heloo!";

// // console.log(arr);

// // const arr = [1,2,3,4,5]
// // arr[arr.length]="hello";
// // console.log(arr);


// // let arr = [1,2,3,4]
// //  delete arr[0];
// // console.log(arr);

// //merging arrys
// // let arr1 = [1,2,3,4,5];
// // let arr2 = [6,7,8,9,10];
// // let arr3 = [6,7,8,9,10];

// // let c=arr1.concat(arr2,arr3);
// // console.log(c);

// //merging arrys


// /*Array Methods*/

// //map, filter ,reduce method
// // let num=[4,16]

// // let c =num.map(Math.sqrt)
// // console.log(c); //map used to access the array objects

// // const double=(num)=>{
// //     return num*2;
// // }
// // const tripple=(num)=>{
// //     return num*3;
// // }
// // const binary=(num)=>{
// //     return num.toString(2);
// // }
// // const isOdd =(x)=>{
// //     return x%2;
// // }
// // const isEven =(x)=>{
// //     return x%2===0;
// // }
// // const greater = (x)=>{
// //     return x>4;
// //}

// // const inp = [1,2,3,4,25];
// // const out = inp.map(isOdd);
// // console.log(out);
// // const out = inp.filter(isEven);
// // const out = inp.map(double).filter(greater);
// // console.log(out);

// const inp = [1,23,4];

// // function findsum(){
// //     let sum=0;
// //     for(let i=0;i<inp.length;i++){
// //         sum= sum+inp[i];
// //     }
// //     return sum;
// // }
// // console.log(findsum(inp));

// // const out= inp.reduce((acc,curr)=>{
// //  acc=acc+curr;
// //  return acc;
// // },)
// // console.log(out);


// //find max value


// // function maxVal(){
// //     let max= inp[0];
// //     for(let i =0; i<inp.length;i++){
// //         if(inp[i]>max){
// //         max=inp[i];
// //         }
       
// //     }
// //     return max;
// // }
// // console.log(maxVal(inp));

// // const out = inp.reduce((acc,curr)=>{
// //     if(curr>acc)
// //     {
// //         acc=curr;
// //     }
// //     return acc;
// // },0)
// // console.log(out);

// // find Min value

// // function minVal(){
// //     let min= inp[0];
// //     for(let i =0; i<inp.length;i++){
// //         if(inp[i]<min){
// //         min=inp[i];
// //         }
       
// //     }
// //     return min;
// // }
// // console.log(minVal(inp));

// // const out = inp.reduce((acc,curr)=>{
// //     if(curr>acc)
// //     {
// //         acc=curr;
// //     }
// //     return acc;
// // })
// // console.log(out);
// //map , filter ,reduce method



// //find method of Array

// // const arr = ['hello',"dict",'list'];

// // const res= arr.find(findName);

// // function findName(x){
// //  return x=="hello";
// // }
// // console.log(res);


// // const person=[
// //     {
// //         name:"Aditya",
// //         age:22,
// //     },
// //     {
// //         name:"Vishal",
// //         age:24,
// //     }
// // ]

// // console.log(person[0].name);
// // function findName(x){
// //     return x;
// //     // return x.name ==='Vishal';
// // }
// // const res= person.find(findName);
// // console.log(res);

// //find method of Array
// //-----------------------------------------------Arrays--------------------------------------------------///


// //-----------------------------------------Functions-----------------------------------------------------//

// function sum(a,b){
//   return a+b;
// }
// function multi(a,b){
//   return a*b;
// }
// function divide(a,b){
//   return a/b;
// }

// console.log("The sum is :"+sum(10,50));
// console.log("The divide is :"+divide(100,50));
// console.log("The Multi is :"+multi(10,50));


// //arrow function

// const newSum=(a,b)=>{
//   return a+b;
// }
// console.log("Arrow function's Sum is : "+newSum(10,20));

// //arrow function

 let test;
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(async data => {
    test = await data.json();
console.log(test);


  })

// const test= 'https://jsonplaceholder.typicode.com/todos/1';

//load json data to js
