var guestList = ["Ms sadia", " Ms Fatima", "Mr umar", "Mr mubasil", "Mr ali", "Ms huma"];
console.log("Dear guests Table is not available i cant invite only two guest now \n");
// remove last four guests....
var guest1 = guestList.pop();
console.log("sorry  ".concat(guest1, " you are not invited!"));
var guest2 = guestList.pop();
console.log("sorry  ".concat(guest2, " you are not invited!"));
var guest3 = guestList.pop();
console.log("sorry  ".concat(guest3, " you are not invited!"));
var guest4 = guestList.pop();
console.log("sorry  ".concat(guest4, " you are not invited!"));
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], " you are still invited."));
}
guestList.pop();
guestList.pop();
console.log(guestList);
