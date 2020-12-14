// //1. ways to print in js
//     //alert("me");
//    // document.write("this is doc write");

//     //2. JavaScript console API
//     console.log("hello world",8+9,"other log");
//    console.warn("fuck u");
//    console.error("this is an error");
//   // console.clear();


//   //3. JS variables
//   //what is variable?? containers to store data values.
//   var n1=34;
//   var n2=89;
//   console.log(n1+n2);

//4. Data types in JS
//String
var str1 = "this is a string";
var str2 = "also a string";
//numbers
var num1 = 78;
var num2 = 89.8;
//Objects
var marks = {
    ravi: 89,
    shubham: 34,
    moahan: 49
}

//Booleans
var a = true; var b = false;
//console.log(a ,b);

var und = undefined;
var c;
var n = null;
//console.log(und,c,n);

/*
At a very high level there are two data types in Js
1.Primitive data type:undefined,null,number,string,boolean,symbol
2. Reference data type:arrays and objects
*/
//5.Arrays
var arr = [1, 2, 3, "om", 5];
//console.log(arr);

//6. Function in JS
function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(6, 4);
c2 = avg(4, 8);
//console.log(c1,c2);

//7. Conditionals 

var age = 1;
//if(age>8)
// console.log("You are not a kid");
//else
//  console.log("You are a kid");

//if-else Ladder
// if(age<2)
//    console.log(" infant");
//    else if(age<26)
//    console.log("young dude");
//    else
//    console.log("Ready to marry");

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
//  for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     // if(i==3)
//     //  break;
//      if(i==5)
//      continue;
//}
// arr.forEach(function(element){
//    console.log(element);
// })


// const ac = 0;
// ac++;

let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

let MyArr=["fan","camera",34,null,true];
//Array methods
// console.log(MyArr.length);
//MyArr.pop();
// console.log(MyArr);
// MyArr.push("harry");
// MyArr.shift();
// const newlen=MyArr.unshift("harry");
// console.log(MyArr);
// console.log(newlen);

// String in JS
let str="Harry is a good boy good";
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good"));
// console.log(str.slice(0,5));
// console.log(str.replace("Harry","Naveli"));

let MyDate= new Date();
console.log(MyDate);
console.log(MyDate.getTime());
console.log(MyDate.getFullYear());
console.log(MyDate.getDay());