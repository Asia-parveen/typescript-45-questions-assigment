// let users: string [] = ["admin","earic" ,"umar", "hassan", "zanib"];
// for(let user of users){
//     if(user === "admin"){
// console.log("Hello admin, would you like to see a student report?");
//     }else{
//         console.log(`Hello ${user}, Thanku for loggin again`)
//     }
// }
var users = ["earic", "umar", "hassan", "zanib", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a student report?");
    }
    else {
        console.log("Hello ".concat(user, ", Thanku for loggin again"));
    }
}
