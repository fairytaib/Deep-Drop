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
    constructor(name, description, rarity, effect) {
        this.name = name
        this.description = description
        this.rarity = rarity
        this.effect = effect
    }
}

// Item Class
class Item extends Reward {
    constructor(name, description, rarity, effect, type, level) {
        super(name, description, rarity, effect);
        this.type = type;
        this.level = level;
    }
}
const items = {
    weapons: [{
            name: "Rusty Short Sword",
            description: "An old, rusted sword with a dull blade.",
            rarity: "common",
            effect: 2,
            type: "weapon",
            level: 1
        },
        {
            name: "Worn Magic Staff",
            description: "A simple staff with faded enchantments.",
            rarity: "common",
            effect: 2,
            type: "weapon",
            level: 1
        },
        {
            name: "Flame Dagger",
            description: "A dagger that glows with a fiery aura.",
            rarity: "uncommon",
            effect: 2,
            type: "weapon",
            level: 2
        },
        {
            name: "Frost Mace",
            description: "A heavy mace that radiates freezing cold.",
            rarity: "rare",
            effect: 2,
            type: "weapon",
            level: 3
        },
        {
            name: "Stormblade",
            description: "A legendary sword crackling with lightning energy.",
            rarity: "epic",
            effect: 2,
            type: "weapon",
            level: 5
        }
    ],

    helmets: [{
            name: "Leather Hood",
            description: "A basic hood made of worn leather.",
            rarity: "common",
            effect: 2,
            type: "helmet",
            level: 1
        },
        {
            name: "Iron Helmet",
            description: "A simple helmet offering minimal protection.",
            rarity: "common",
            effect: 2,
            type: "helmet",
            level: 1
        },
        {
            name: "Runed Helmet",
            description: "A helmet engraved with faintly glowing runes.",
            rarity: "uncommon",
            effect: 2,
            type: "helmet",
            level: 2
        },
        {
            name: "Guardian’s Helmet",
            description: "A sturdy helmet for vigilant defenders.",
            rarity: "rare",
            effect: 2,
            type: "helmet",
            level: 3
        },
        {
            name: "Dragonsteel Helmet",
            description: "A helmet forged from dragonsteel, offering unmatched protection.",
            rarity: "epic",
            effect: 2,
            type: "helmet",
            level: 5
        }
    ],

    armors: [{
            name: "Leather Jerkin",
            description: "A simple jerkin made of hardened leather.",
            rarity: "common",
            effect: 2,
            type: "armor",
            level: 1
        },
        {
            name: "Chainmail Armor",
            description: "A basic chainmail offering decent protection.",
            rarity: "common",
            effect: 2,
            type: "armor",
            level: 1
        },
        {
            name: "Armored Robe",
            description: "A robe reinforced with leather plates.",
            rarity: "uncommon",
            effect: 2,
            type: "armor",
            level: 2
        },
        {
            name: "Shadow Armor",
            description: "A dark armor that blends into the shadows.",
            rarity: "rare",
            effect: 2,
            type: "armor",
            level: 3
        },
        {
            name: "Titan Armor",
            description: "A legendary armor forged by ancient titans.",
            rarity: "epic",
            effect: 2,
            type: "armor",
            level: 5
        }
    ],

    shoes: [{
            name: "Worn Boots",
            description: "Old, scuffed boots that have seen better days.",
            rarity: "common",
            effect: 2,
            type: "shoes",
            level: 1
        },
        {
            name: "Light Sandals",
            description: "Simple sandals for quick movement.",
            rarity: "common",
            effect: 2,
            type: "shoes",
            level: 1
        },
        {
            name: "Windrunner Boots",
            description: "Boots enchanted with the power of wind.",
            rarity: "uncommon",
            effect: 2,
            type: "shoes",
            level: 2
        },
        {
            name: "Wanderer’s Boots",
            description: "Sturdy boots for long journeys.",
            rarity: "rare",
            effect: 2,
            type: "shoes",
            level: 3
        },
        {
            name: "Phantom Shoes",
            description: "Shoes that let the wearer move like a ghost.",
            rarity: "epic",
            effect: 2,
            type: "shoes",
            level: 5
        }
    ]
};