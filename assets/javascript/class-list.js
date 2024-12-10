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
        this.effect
    }
}

// Item Class
class Item extends Reward {
    constructor(name, description, rarity, type, level) {
        super(name, description, rarity, effect);
        this.type = type
        this.level = level;
    }
}

// Weapons
let rustyShortSword = new Item("Rusty Short Sword", "An old, rusted sword with a dull blade.", "common", (player) => player.damage += 1, "weapon", 1);

let wornMagicStaff = new Item("Worn Magic Staff", "A simple staff with faded enchantments.", "common", (player) => player.damage += 1, "weapon", 1);

let flameDagger = new Item("Flame Dagger", "A dagger that glows with a fiery aura.", "uncommon", (player) => player.damage += 1, "weapon", 2);

let frostMace = new Item("Frost Mace", "A heavy mace that radiates freezing cold.", "rare", (player) => player.damage += 1, "weapon", 3);

let stormblade = new Item("Stormblade", "A legendary sword crackling with lightning energy.", "epic", (player) => player.damage += 1, "weapon", 5);

//Helmets
let leatherHood = new Item("Leather Hood", "A basic hood made of worn leather.", "common", (player) => player.defense += 1, "helmet", 1);

let ironHelmet = new Item("Iron Helmet", "A simple helmet offering minimal protection.", (player) => player.defense += 1, "common", "helmet", 1);

let runedHelmet = new Item("Runed Helmet", "A helmet engraved with faintly glowing runes.", "uncommon", (player) => player.defense += 1, "helmet", 2);

let guardianHelmet = new Item("Guardian’s Helmet", "A sturdy helmet for vigilant defenders.", "rare", (player) => player.defense += 1, "helmet", 3);

let dragonsteelHelmet = new Item("Dragonsteel Helmet", "A helmet forged from dragonsteel, offering unmatched protection.", "epic", (player) => player.defense += 1, "helmet", 5);


//Armor
let leatherJerkin = new Item("Leather Jerkin", "A simple jerkin made of hardened leather.", "common", (player) => player.health += 1, "armor", 1);

let chainmailArmor = new Item("Chainmail Armor", "A basic chainmail offering decent protection.", "common", (player) => player.health += 1, "armor", 1);

let armoredRobe = new Item("Armored Robe", "A robe reinforced with leather plates.", "uncommon", (player) => player.health += 1, "armor", 2);

let shadowArmor = new Item("Shadow Armor", "A dark armor that blends into the shadows.", "rare", (player) => player.health += 1, "armor", 3);

let titanArmor = new Item("Titan Armor", "A legendary armor forged by ancient titans.", "epic", (player) => player.health += 1, "armor", 5);

//Shoes
let wornBoots = new Item("Worn Boots", "Old, scuffed boots that have seen better days.", "common", (player) => player.dodgeChance += 1, "shoes", 1);

let lightSandals = new Item("Light Sandals", "Simple sandals for quick movement.", "common", (player) => player.dodgeChance += 1, "shoes", 1);

let windrunnerBoots = new Item("Windrunner Boots", "Boots enchanted with the power of wind.", "uncommon", (player) => player.dodgeChance += 1, "shoes", 2);

let wandererBoots = new Item("Wanderer’s Boots", "Sturdy boots for long journeys.", "rare", (player) => player.dodgeChance += 1, "shoes", 3);

let phantomShoes = new Item("Phantom Shoes", "Shoes that let the wearer move like a ghost.", "epic", (player) => player.dodgeChance += 1, "shoes", 5);