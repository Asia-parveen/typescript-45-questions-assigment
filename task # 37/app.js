// function my_shirt(size : string , label: string){
// return size + label;
// }
// let myFun = my_shirt("large" , "i love typescript");
// console.log( myFun);
//making large as default
// function my_shirt( label: string , size : string = "large" ){
//     return size + label;
//     }
//     let myFun = my_shirt("i love typescript");
//     console.log( myFun);
//making medium as default
// function my_shirt( label: string , size : string = "medium" ){
//     return size + label;
//     }
//     let myFun = my_shirt(" I love typescript");
//     console.log( myFun);
// shirt of any size
function my_shirt(label, size) {
    return size + label;
}
var myFun = my_shirt(" any size", "I love typescript");
console.log(myFun);
