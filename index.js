const index = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text :(`Hi, my name is ${index.name} and my school is in ${index.school}`),
    e : "oO",
    T : "U"

}));