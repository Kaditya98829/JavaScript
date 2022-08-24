// // /////////////////////////////////////////////////////////////Variables//////////////////////////////////////////

// // // // for(let i=0;i<=5;i++){
// // // //     for(let j=0;j<=i;j++){
// // // //             console.log("$");
// // // //     }
// // // //     console.log("\n");
// // // // }

// // // // for(i=0;i<=5;i++){
// // // //     console.log("*".repeat(i));
// // // // }

// // // str="hello"
// // // console.log(str.repeat(6));
// // // console.log("$".repeat(7));

// // //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Variables$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // //Let Introduced in ES6  instead of Var///
// // let a= 10;
// //  let b=2;
// //  let c = a+b;
// //  console.log(c);
// //  //Var///
// //  var x=1;
// //   var y = 5;
// //   var res = x+y*x+6/2;
// //   console.log("Result of x+y*x+6/2 is:\n"+res); //concatination

// //  //Var///

// //  //const

// // const m = 2;
// // const n =2;

// // // const o= m-n+m/n;

// // // console.log("Result of m-n+m/n is:\n"+o);

// // console.log(2+2/2);
// //  //const

// //  //undeclared Variables////
// //  k=90;
// //  l=10;
// //  console.log(90+10/2 );

// //  //undeclared Variables////

// //  /////////////////////////////////////////////////////////////Variables//////////////////////////////////////////

// // ////Diff Bw Var , Let and Const

// // let f =10;
// //  let g=f;

// //  f=40;
// //  h=f;
// //  console.log(h);

// //  //in var we can change the value after declaration

// // //  const q =10;
// // //  q=20;
// // //  console.log(q);

// // try {
// //     const q=20;
// //      q=10;
// //      console.log(q);
// // } catch (error) {
// //     console.log("const throws error if we reuse the same variable with another value");
// // }

// // ///var is the

// // ///Misc
// // console.log("8"+2+1-7);

// // ///Misc Examples?////////////////
// // let text1= "Hello";
// // // text1=text1+" "+"how Are u!"
// // text1 +=" "+"how Are u!"
// // console.log(text1);

// // let globalVar= "Hello i am Global Variable";
// // const fun = ()=>{
// //     console.log(globalVar);
// // }
// // fun();

// // function fun2 (){
// //     let local ="Hi am Local Variable";
// //     console.log(local);
// // }
// // fun2();

// // try {
// //     let global = "i am global";
// // const scope = ()=>{
// //    console.log(global)
// //    let local= "i am local";
// //       console.log(local);

// // }
// // console.log(local);
// // scope();
// // } catch (error) {
// //     console.log("Local Variables cant be accessed from outside");
// // }

// // ////////////////////////////////////////////////////Data Types///////////////////////////////////////////////

                                        ///// //strings ////////
// let a = "String";

// a = `Strings`;
// console.log(a);

// let b = "Hello"+18+9  //js read text from left to right so it treats number as strings.
// console.log(b);
// let c =19+10+"Bol Bhai"
// console.log(c);

// console.log("Text2"+" "+"Text1");

// console.log("Hello"+10-1);


// program to reverse a string

// function reverseString(str) {

    // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString =newString+ str[i];
//     }
//     return newString;
// }


// const string ="Aditya";

// console.log(reverseString(string));



// program to reverse a string
//1
// let a = "hello";
//  let b = [...a];
//  console.log(b);

//  let rev = b.reverse();
//   let joi = rev.join("");


//  console.log(joi);
 //2
//  const str ="Aditya"
//  const splitStr  = str.split("");
//  const revStr = splitStr.reverse();
//  const joinStr= revStr.join("");
//  console.log(joinStr);

                                                 // //strings //   ///



                                                // Numbers//////////
// let x = 100.00;
// console.log(x);

// x = 123e2; 
// console.log(x); 
                                                // Numbers//////////


                                                //Boolean//////////

// let x= 6;
// let y =6;
// console.log(x==y);

// let z= "6"
// console.log(x===z);

                                                //Boolean///////////

                                                //Array

// const arr = ["hello",1,"i am noobie",5];
// console.log(arr[1]);
                                                 //Array

                                                //Null //
// let a ="";

// console.log(a);
// console.log(typeof(a));

                                                //Null  //
 
                                                 //undefined//
//  let a ;
//  console.log(a);

// let a= undefined
// console.log(a);

// let x;

// if(x===undefined)
// console.log(x);
// else
// console.log(x);

                                                //undefined//
                                                   //Object//
// let a ={first:"Heloo Bhai", second:"Han Bhai Bolo"};
// console.log(a.first+"\n"+a.second)
                                                    
                                                   //Object//


// // ////////////////////////////////////////////////////Data Types///////////////////////////////////////////////


//////////////////////////////////////////////////////////////Loops///////////////////////////////////////////////


                                                          //for Loop// 
// for(a=5;a>=-5;a--){
    
// console.log(a);
// }

// for (let a =1; a<=5;a++){
//     console.log("The value`s are :"+" "+a)
// }
//




                                                         //for Loop// 

                                                         //for in//
//  let a =["hello","bhai","kya"];
//  console.log(a.length)

// const person={name:"Aditya",age:22}

// for(let x in person){
//     console.log(person[x])
//     // console.log(x+":"+person[x]);
// }
// const a =[1,2,3,4,5]
// for(let x in a){
//     console.log(a[x])
// }

                                                         //for in//

                                                         //for of//
// let a =['hello','van','car'];
// for(let x of a){
//     console.log(x);
// }

// let obj1= {name:"Bunty",age:47};
// for(let x in obj1){
//     console.log(x);
// }
// let str ="Langueage";
// for(var a of str){
//     console.log(a);
// }

                                                      //for of//

                                                         //switch Statement//
// let day = 77;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName); // Tuesday

                                                         //switch Statement//
        
                                                   //while //
//let a =0; 
// while ( a<10){
//     console.log(a);
//     a++;       //it runs until the condiction become  false
// }
// let a=1
// while(a<10)
// {
//     console.log(10*a);
//     a++;
// }
                                                         //while //
                                                         //do-while //
// let a= 1;
// do {
//     console.log(10*a);
//     a++;
// } while (a<a-1)

                                                         


                                                         //do-while //

//////////////////////////////////////////////////////////////Loops///////////////////////////////////////////////