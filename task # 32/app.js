var currentUsers = ["Admin", "Earic", "Nadeem", "Rashid", "Farah"];
var newUsers = ["Admin", "Nadeem", "Fatima", "Ali", "Salman"];
var currentUsers_lower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers_lower.includes(newUser.toLowerCase())) {
        console.log("sorry ".concat(newUser, ",that name is taken"));
    }
    else {
        console.log("yes ".concat(newUser, ", is still in avaiable list"));
    }
}
