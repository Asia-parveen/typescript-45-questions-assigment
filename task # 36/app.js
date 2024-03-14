// function make_shirt(size: number , label: string){
// return `}My shirt size is ${size} and label is ${label `;
// }
// let myFuncation = make_shirt(36 , " Today is sunday");
// //how to print it on consol
// console.log(myFuncation);
//2nd method of making funcation
var make_shirt = function (size, label) {
    return "My shirt size is ".concat(size, " and label is ").concat(label);
};
var myFuncation = make_shirt(36, "Today is sunny day");
console.log(myFuncation);
