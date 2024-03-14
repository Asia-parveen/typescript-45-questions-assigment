// let vehicle: string[] = ["Alto","honda city","Mehran","Honda"];
// vehicle.map((items) => console.log(`I would like to own a ${items}`)); 
// task #14 (Guest list)
// let guestList: string[] = ["Ms sadia"," Ms Fatima","Mr umar","Mr mubasil"];
// for(let i = 0; i < guestList.length ; i++ ){
//     console.log(`${guestList[i]}! you are invited to the dinner \n`);
// }
// using map method
// guestList.map((items) =>{
//     console.log(`${items }! you are invited to the dinner party.\n`);
// })
// task #15......
// let guestList: string[] = ["Ms sadia"," Ms Fatima","Mr umar","Mr mubasil"];
// console.log(`${guestList[2]}! can not come to the dinner party for some reason`);
// guestList[2] = "Nazia";
// console.log("New Guest List who are coming to the dinner party \n");
// for(let i =0; i <guestList.length; i++ ){
//     console.log(`${i + 1}. ${guestList[i]} `);
// }
// task #16.......
var guestList = ["Ms sadia", " Ms Fatima", "Mr umar", "Mr mubasil"];
console.log(guestList);
console.log("I invited some more new friends ");
// add friend in start.
guestList.unshift(" Ms Shazia");
// [ ' Ms Shazia', 'Ms sadia', ' Ms Fatima', 'Mr umar', 'Mr mubasil' ];
console.log(guestList);
// add friend in middle...
guestList.splice(2, 0, "bilal");
console.log(guestList);
// add friend in last.....
guestList.push("Rabia");
console.log(guestList);
// print friendlist with message....
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], "! you are invited to the dinner party. "));
}
