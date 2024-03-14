//Q13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// let vehicle: string[] = ["Alto","honda city","Mehran","Honda"];
// vehicle.map((items) => console.log(`I would like to own a ${items}`)); 

// task #14 (Guest list)

//Q14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// let guestList: string[] = ["Ms sadia"," Ms Fatima","Mr umar","Mr mubasil"];
// for(let i = 0; i < guestList.length ; i++ ){
//     console.log(`${guestList[i]}! you are invited to the dinner \n`);
// }

// using map method
// guestList.map((items) =>{
//     console.log(`${items }! you are invited to the dinner party.\n`);
// })

// task #15......

//Q15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


// let guestList: string[] = ["Ms sadia"," Ms Fatima","Mr umar","Mr mubasil"];
// console.log(`${guestList[2]}! can not come to the dinner party for some reason`);

// guestList[2] = "Nazia";
// console.log("New Guest List who are coming to the dinner party \n");
// for(let i =0; i <guestList.length; i++ ){
//     console.log(`${i + 1}. ${guestList[i]} `);
// }

// task #16.......
//Q16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ["Ms sadia"," Ms Fatima","Mr umar","Mr mubasil"];
console.log(guestList);
console.log(`I invited some more new friends `);

// add friend in start.
guestList.unshift(` Ms Shazia`);
// [ ' Ms Shazia', 'Ms sadia', ' Ms Fatima', 'Mr umar', 'Mr mubasil' ];
console.log(guestList);


// add friend in middle...
guestList.splice(2,0,"bilal");
console.log(guestList);

// add friend in last.....
guestList.push("Rabia");
console.log(guestList);

// print friendlist with message....

for(let i=0; i < guestList.length; i++){
    console.log(`Dear ${guestList[i]}! you are invited to the dinner party. `);
}



