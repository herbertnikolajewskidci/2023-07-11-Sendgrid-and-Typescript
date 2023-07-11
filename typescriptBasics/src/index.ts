let alter: number = 42;

let text = "Hallo Welt";

let myName: string = "Joel";
myName.toLowerCase(); 

const coinFlip = Math.random() > 0.5;
console.log(coinFlip);

const canBuyBeer = Math.random() * 20 < 18 ? "nein" : "ja";

let foo: number = 42;

let userId: string | number = 12345;
userId = "u1773154315351";

enum role {
    ADMIN = "cn=exampleuser,example.com,ou=admin",
    MANAGER = "cn=exampleuser,example.com,ou=manager",
    EDITOR = "cn=exampleuser,example.com,ou=editor",
    USER = "cn=exampleuser,example.com,ou=user",
}
// const myRole: role = role.ADMIN
// console.log(myRole)

const user = {
    id: 0,
    name: "Leoj Nenotlep",
};

const appUser: { id: number; name: string } = {
    id: 1,
    name: "Leonard Nimoy",
};

type pet = {
    id?: number;
    name: string;
};
const rauli: pet = { name: "Rauli" };
console.log(rauli.name);

function getPet(id: number, name?: string): pet {
    return rauli;
}
const somePet = getPet(123);

function log(nachricht: string): void {
    console.log(nachricht);
}
log("Hallo alle");


interface user {
    id: number;
    name: string;
}

class userAccount {
    id: number;
    name: string;
    constructor(id: number | string, name: string) {
        this.id = Number(id);
        this.name = name;
    }
}

const joel: user = new userAccount("1337", "Leoj");
console.log(joel);