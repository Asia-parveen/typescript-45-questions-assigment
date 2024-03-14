//Q18- Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let favPlaces: string[] = ["newyork","dubai","srilinka","england","japan"];
// console.log(favPlaces);
// // make a copy of arry.....

// let copyOfArray = favPlaces.slice();
// let sortedArray = copyOfArray.sort();
// console.log(sortedArray);
// // print origional arry.....
// console.log(favPlaces);

// reverse the array...
let copyOfArray2 = favPlaces.slice();
let reverseOfArray = copyOfArray2.reverse();
console.log(reverseOfArray);

// // print origional arry.....
console.log(favPlaces);

// reverse origional array......
let reverseOfArray2 = favPlaces.reverse();
console.log(reverseOfArray2);
let againReverse = reverseOfArray2.reverse();
console.log(againReverse);

// sort origional array.....
let sortOriArray = favPlaces.sort();
console.log(sortOriArray);

let revSortedArray = sortOriArray.reverse();
console.log(revSortedArray);
 
