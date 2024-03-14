//Q36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// function make_shirt(size: number , label: string){
// return `}My shirt size is ${size} and label is ${label `;
// }

// let myFuncation = make_shirt(36 , " Today is sunday");

// //how to print it on consol
// console.log(myFuncation);


//2nd method of making funcation

let make_shirt = (size , label) => {
    return `My shirt size is ${size} and label is ${label}`
}
let myFuncation = make_shirt(36 , "Today is sunny day");
console.log( myFuncation);
