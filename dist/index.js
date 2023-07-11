"use strict";
let alter = 42;
let text = "Hallo Welt";
let myName = "Joel";
myName.toLowerCase();
const coinFlip = Math.random() > 0.5;
console.log(coinFlip);
const canBuyBeer = Math.random() * 20 < 18 ? "nein" : "ja";
let foo = 42;
let userId = 12345;
userId = "u1773154315351";
var role;
(function (role) {
    role["ADMIN"] = "cn=exampleuser,example.com,ou=admin";
    role["MANAGER"] = "cn=exampleuser,example.com,ou=manager";
    role["EDITOR"] = "cn=exampleuser,example.com,ou=editor";
    role["USER"] = "cn=exampleuser,example.com,ou=user";
})(role || (role = {}));
// const myRole: role = role.ADMIN
// console.log(myRole)
const user = {
    id: 0,
    name: "Leoj Nenotlep",
};
const appUser = {
    id: 1,
    name: "Leonard Nimoy",
};
const rauli = { name: "Rauli" };
console.log(rauli.name);
function getPet(id, name) {
    return rauli;
}
const somePet = getPet(123);
function log(nachricht) {
    console.log(nachricht);
}
log("Hallo alle");
class userAccount {
    constructor(id, name) {
        this.id = Number(id);
        this.name = name;
    }
}
const joel = new userAccount("1337", "Leoj");
console.log(joel);
