function describe_city(nameofcity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
// 3 cities 
var city1 = describe_city("karachi");
var city2 = describe_city("Lahore");
var city3 = describe_city("Multan");
var city4 = describe_city("Bubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
