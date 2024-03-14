//Q42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let megicionsNames : string[] = ["Nadeem", "Umar", "Hassan","Hamaza"];
function show_megicions(greet : string){
    for (let item of megicionsNames ){
        console.log(greet , item);
        
    }
};
show_megicions("Hello, How are you Mr.");

//2nd time funcation calling

show_megicions("Hello, ");

