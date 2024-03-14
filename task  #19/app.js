var myGuest = ["Ms huma", "Ms fatima", "Mr mubasil", "Ms farah", "Mr ali"];
console.log("i am inviting ".concat(myGuest.length, " number of myguest who inviting to the dinner are following.\n "));
for (var i = 0; i < myGuest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myGuest[i], "! you are inviting to dinner"));
}
