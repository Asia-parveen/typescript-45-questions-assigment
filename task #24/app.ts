//Q24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


// check equality...

// let myCity = "Karachi";
// console.log(myCity == "Karachi");         //true  equal to
// console.log(myCity !== "karachi");        // true  not equal to

// numerics..........

// let num = 50;
// console.log(num == 50);      //true    equal to
// console.log(num !== 100);    //true    not equal to
// console.log(num > 20);       //true    greater then
// console.log(num < 20);       //false    less then 
// console.log(num <= 20);       //false    less then equal to 
// console.log(num >= 20);       //true     greater then equal to


// and &&    or ||

// let num1 = 20;
// let num2 = 10;
// console.log(num1 >= 10 && num2 == 10);


// let myNum1 = 30;
// let myNum2 = 40;
// console.log(myNum1 == 30 || myNum2 !== 40 );

let myArray = ["usman", 2 , 4];
let myString = "faiza";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
