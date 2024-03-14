//Q19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let myGuest: string[] = ["Ms huma","Ms fatima","Mr mubasil","Ms farah","Mr ali"];

console.log(`i am inviting ${myGuest.length} number of myguest who inviting to the dinner are following.\n `);

for(let i=0; i < myGuest.length; i++ ){
    console.log(`${i + 1 }. ${myGuest[i]}! you are inviting to dinner`);
}