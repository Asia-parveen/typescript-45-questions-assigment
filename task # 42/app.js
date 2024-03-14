var megicionsNames = ["Nadeem", "Umar", "Hassan", "Hamaza"];
function show_megicions(greet) {
    for (var _i = 0, megicionsNames_1 = megicionsNames; _i < megicionsNames_1.length; _i++) {
        var item = megicionsNames_1[_i];
        console.log(greet, item);
    }
}
;
show_megicions("Hello, How are you Mr.");
//2nd time funcation calling
show_megicions("Hello, ");
