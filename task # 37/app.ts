//Q37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


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
function my_shirt( label: string , size : string ){
    return size + label;
    }
    
    let myFun = my_shirt(" any size", "I love typescript");
    console.log( myFun);