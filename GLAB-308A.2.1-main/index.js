// THIS IS A RETRY FILE

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea"
}
},
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}


console.log(adventurer.inventory[0]);

for (item of adventurer.inventory){
    console.log(item);
}

adventurer.roll();


class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.MAX_HEALTH = 100;
        
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
  
}

let robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();


class Adventurer extends Character {
  constructor (name, role, style, stats, MAX_HEALTH, ROLES) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    this.style = style;
    this.stats = stats;
    this.MAX_HEALTH = MAX_HEALTH;
    ROLES = ["Wizard", "Fighter", "Healer"];
    if(role!== ROLES[0] && role!== ROLES[1] && role!== ROLES[2]){
        // Put a random number picker here, between 0 to 2, to determine give robin a random class, if they don't have one... maybe use "grater than .5"
        // or less then to decided?
        let num = Math.random();
        if (num > 2/3){
            this.role = ROLES[0];
        }
        else if(num>1/3){
            this.role = ROLES[1];
        } else{
            this.role = ROLES[2];
        }
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
duel(Adventurer, self){
    let round = 1;
    let results=[];
    let opponent = Adventurer;
    self = self;
    while(true){
        
        let rollSelf = super.roll();
        let rollOpponent = opponent.roll();
        //console.log(rollSelf, rollOpponent)
        if(rollSelf>rollOpponent){
            self.health-=1;
            results.push({health_self: self.health, roll_self: rollSelf, health_opponent: opponent.health, roll_opponent: rollOpponent, round: round})
            if(self.health === 50){
                results.push({winner: opponent.name});
                break;
            }
        } else if(rollSelf<rollOpponent){
            opponent.health-=1;
            results.push({health_self: self.health, roll_self: rollSelf, health_opponent: opponent.health, roll_opponent: rollOpponent, round: round})
            // I have these push statements here instead of after the if/else statements so that I can log the health at 50, not 51.
            if(opponent.health === 50){
                results.push({winner: self.name});
                break;
                
            }
            round+=1;
        }

    }
    console.log(results)
    Adventurer.health = 100;
    self.health = 100; 
    //These two reset both their HP to 100 after the duel, as to not cause issues later.
  }
}


class Companion extends Character {
  constructor (name, bite, love, stats, MAX_HEALTH) {
    super(name);
    this.bite = bite;
    this.love = love;
    this.stats = stats;
    this.MAX_HEALTH = MAX_HEALTH;
    this.inventory.push("");
  }
  // Adventurers have the ability to smell for secrets.
  smell () {
    console.log(`${this.name} is smelling for secrets...`);
    super.roll();
  }
}

robin = new Adventurer("Robin"); //REDECLARATION TO NEW CLASSES
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
let flea = robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin.role);

//robin.scout()
//robin.duel(robin, robin)



class AdventurerFactory {  
    constructor(role, oldRole, subject){ // Had to modify it since it wasn't working
        this.role = role;
        this.oldRole = oldRole;
        this.oldRole = this.role;
        this.adventurers = [];
        this.subject=subject;
        this.subject.role = role;
        
    }
    create(role){
        return new Adventurer(role);
    }
  //generate (name) {
  //  const newAdventurer = new Adventurer(name, this.role); 
  //  This code from the assignment errors out for some reason, I'm able to set the class properly with my code that I modified for it.
  //  this.adventurers.push(newAdventurer);
  //}
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

//const healers = new AdventurerFactory("Healer");
//robin = healers.generate("Robin");


crow = new Adventurer("Crow"); //REDECLARATION TO NEW CLASSES
crow.inventory = ["sword", "shield", "potion"];

    

new AdventurerFactory("Healer", robin.role, robin).create;
//robin = healers.generate("Robin");

robin.duel(crow, robin);
console.log(robin.role); 

crow.companion = new Adventurer("GoldFish");
crow.companion.role = "Healer";
crow.companion.type = "Fish";

crow.duel(crow.companion, crow)

let doggo = flea.companion = new Companion("Doggo");
new AdventurerFactory("Fighter", flea.companion.role, flea.companion);

flea.companion.type = "Dog";


crow.companion.duel(doggo, crow.companion);


class Dragon extends Character {
  constructor (name, bite, hate, age, stats, MAX_HEALTH) {
    super(name);
    this.bite = bite;
    this.hate = hate;
    this.age = age;
    this.stats = stats;
    this.inventory.push("Gold");
  }
  // Adventurers have the ability to smell for secrets.
  fire () {
    console.log(`${this.name} is going to blow out fire...`);
    super.roll();
  }
}

let red_dragon = new Dragon("Red Dragon");
red_dragon.bite = "Extreme";
red_dragon.hate = "Moderate";
red_dragon.age = "OLD";


crow.duel(red_dragon, crow)