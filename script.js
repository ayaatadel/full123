// var x="name";

// function => blockof code 
// code => use in more than place
// code => function => functionName


// var num1=15;
// var num2=100;
// console.log((num1+num2));
// var num1=15;
// var num2=20;
// console.log((num1+num2));
// var num1=50;
// var num2=100;
// console.log((num1+num2));

// function summation() {  // void => print
//     console.log(num1+num2);
// }

// summation();

// function summation() // return => non parameter function
// {
//     return num1+num2;
// }
// // summation();
// var result=summation();
// console.log(result);
{/* <img src=""></img> */}

// var num1;
// var num2;
// function summation( num1,num2 ) // paramerters
// { 
//     return num1+num2;
// }
// var result=summation(5,10)
// console.log(result);

// method
/** prompt=> function  => string => number =>+ */

// function multipy(number) {
//     var i=13;
//     var arr=[];
//     while(i--)
//     {
//       arr[i]= i*number
//     }
//     return arr;
// }
// var multiNumber=+prompt("enter your multiplication number");

// // console.log(multipy(multiNumber));
// document.writeln(multipy(multiNumber));


/** array => index => 0 
 * length ==> number of array elements
 */

// var arr=[1,2,3];

// arr[0]=> 1
// length of array=>3

/** methods  
 * put data => first , end => push
 * delete data => first , end => pop
*/

// var arr=[];
// /*** 5  10 20 */
// arr.push(5);
// arr.push(10);
// arr.push(20);
// // document.write(arr);
// arr.push("ayaat");
// document.write(arr);
/** shift  => add from start*/
// arr.unshift("adel");
// document.write(arr,"<br>");

// /** delete */
// /** end => pop */
// arr.pop();
// document.write(arr);
// /** delete from start => shift */
// arr.shift();
// document.write("<br>",arr);

/** lenght */

//  document.writeln(arr,"<br>",arr.length);

// for (let index = 0; index < arr.length; index++) {
//    var element = arr[index];
//     document.writeln(element);
// }

// concst two arrays => concat
// var arr2=[12,15,13];
// var arr3=arr.concat(arr2);
// document.writeln(arr3);



// var arr=[1,2,9];
// // var arr2=arr;
// document.writeln("array 1 : =>",arr,"<br>","array :2 =>",arr2,"<br>");

// arr2.push(15);
// document.writeln("array 1 : =>",arr,"<br>","array :2 =>",arr2,"<br>");

/** spread operator => ... */

// var arr=[1,2,9];
// var arr2=[...arr];
// document.writeln("array 1 : =>",arr,"<br>","array :2 =>",arr2,"<br>");

// arr2.push(15);
// document.writeln("array 1 : =>",arr,"<br>","array :2 =>",arr2,"<br>");



//* splice add  replace , remove =>override on array elements

// var arr=[1,2,3,4];
// remove
// arr.splice(0,3);  
// document.write(arr);
// add
// arr.splice(0,0,15);  
// document.write(arr);
// replace
// arr.splice(0,1,15);  
// document.write(arr);

//** slice =>  */
// var arr=[1,2,3,4];
// arr.slice(0,1,25);  
/**
 * sort
 * reverse
 * splice
 * slice
 * for in  ==> index
 * for of  => value
 */

// var arr=[1,12,35,10];
// sort => override on array elements
// sort => 1,10,12,35
// reverese => override on array elements
// document.write("array sorted : =>",arr.sort(),"<br>");
// document.write("array reversed after sorted : =>",arr.reverse());
// document.write("<br>",arr);

// var arr=[1,12,35,10];
/** splice slice */
// slice => return specific elements of array (start,end)=>ignore end => return => start to end-1
//=> splice

// var arr2=arr.slice(0,3);
// document.write(arr2);

// document.write(arr.slice(1,3));
// document.write("<br>",arr);

/** splice  => add , remove , repalce */
// var arr=[1,12,35,10];
// var arr2=["ayaat","ahmed","ibrahiem"];
// // add splice(start,0,value)
// // document.write("array before splice => ",arr,"<br>");
// // document.write(arr.splice(1,0,...arr2,15,20,25));
// arr.splice(0,0,...arr2,15,20,25)
// document.write("array after splice add => ",arr,"<br>");

// /** replce */

// arr.splice(1,2,"mohammed","khaled")
// document.write("array after splice replace => ",arr,"<br>");
// /** delete */

// arr.splice(1,3) // start,count of deleted elements
// document.write("array after splice delete => ",arr,"<br>");

/** loop => array => 
 * for
 * while
 * do-while
 */
var data=[15,12,"ayaat","mahmoud",true];
// for(var i=0;i<array.length;i++)
// {
//   document.write(array[i] ," ");
// }

/** for in => index, for of */

// for (var index in data) {
//     // document.write(index ," ");
//     document.write(data[index] ," ");
// }

// for (const element of data) {
//      document.write(element ," ");
// }

/// task => file => function => data from users
/** 
 * //////////  search => with code
 * for each 
 * includes => method
 * anonomes function
 * arrow function
 * filter , map => different between them
 */