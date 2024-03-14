//task 41 ,42 43
//task 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["ali","umar","hassan"];
// show_magicians( magician);
//task 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["ali", "umar", "hassan"];
// make_great( magicians2);
// show_magicians(magicians2);
// task 43
function make_great2(magicians) {
    var greatMegicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMegicians.push(magicians[i] + " the great");
    }
    return greatMegicians;
}
var magicians3 = ["ali", "umar", "hassan"];
var greatMegicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMegicians2);
