// Basis Character Class for Monster and Player
class Character {
    constructor(health, damage, attackSpeed, defense, dodgeChance) {
        this.health = health
        this.damage = damage
        this.attackSpeed = attackSpeed
        this.defense = defense
        this.dodgeChance = dodgeChance
    }

    attack() {
        console.log("attack")
    }
}

// Player Classes
// Refine Stats later on
let knight = new Character(25, 25, 1, 25, 1)
let ranger = new Character(25, 25, 1, 25, 1)
let assassin = new Character(25, 25, 1, 25, 1)

// Monster Classes
// Refine Stats later on
let slime = new Character(25, 25, 1, 25, 1)
let swarmOfRats = new Character(25, 25, 1, 25, 1)
let kobold = new Character(25, 25, 1, 25, 1)
let goblin = new Character(25, 25, 1, 25, 1)
let skeletonWarrior = new Character(25, 25, 1, 25, 1)
let orc = new Character(25, 25, 1, 25, 1)
let harpie = new Character(25, 25, 1, 25, 1)
let troll = new Character(25, 25, 1, 25, 1)
let fireElemental = new Character(25, 25, 1, 25, 1)
let boss = new Character(25, 25, 1, 25, 1)

// Basis Reward Class for Items and Skills
class Reward {
    constructor(name, description, rarity) {
        this.name = name
        this.description = description
        this.rarity = rarity
    }
}

// Item Class
class Item extends Reward {
    constructor(name, description, rarity, type, level) {
        super(name, description, rarity);
        this.type = type
        this.level = level;
    }
}

let rustyShortsword