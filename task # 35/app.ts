//Q35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


//print only names.

let animalsNames: string[] = ["goat","camel","sheep","cow"];
// for(let i=0; i<animalsNames.length; i++){
//     console.log(animalsNames[i]);
    
// }
for(let i of  animalsNames){
    console.log(i);
    
}
//print message 
for(let j of animalsNames){
    console.log(`${j} is a Domestic animals`);
    
}

console.log(`\nAll these animals ${animalsNames[0]}, ${animalsNames[1]}, ${animalsNames[2]}, and ${animalsNames[3]}  meat is hilal in islam.}`);
