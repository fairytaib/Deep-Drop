// Basis Character Class for Monster and Player
class Character {
    constructor(name, health, damage, attackSpeed, defense, dodgeChance, critChance) {
        this.name = name
        this.health = health
        this.damage = damage
        this.attackSpeed = attackSpeed
        this.defense = defense
        this.dodgeChance = dodgeChance
        this.critChance = critChance
    }

    attack(enemy) {
        const actualDamage = this.calculateDamage(enemy.defense);
        console.log(`${this.name} attacks ${enemy.name} for ${actualDamage} damage!`);
        return actualDamage;
    }

    calculateDamage(monsterDefense) {
        return Math.max(0, this.damage - monsterDefense);
    }

    dodge() {
        return Math.random() < this.dodge;
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} has ${this.health} HP left.`);
    }
}

// Player Classes
// Refine Stats later on
const knight = new Character(playerName, 50, 5, 5000, 50, 5, 5)

const ranger = new Character(playerName, 25, 25, 1, 25, 1, 1)

const assassin = new Character(playerName, 25, 25, 1, 25, 1, 1)

// Monster Classes
// Refine Stats later on
let slime = new Character("Slime", 25, 25, 10000, 25, 1, 1)

let swarmOfRats = new Character("Swarm of Rats", 25, 25, 1, 25, 1, 1)

let kobold = new Character("Kobold", 25, 25, 1, 25, 1, 1)

let goblin = new Character("Goblin", 25, 25, 1, 25, 1, 1)

let skeletonWarrior = new Character("Skeleton Warrior", 25, 25, 1, 25, 1, 1)

let orc = new Character("Orc", 25, 25, 1, 25, 1, 1)

let harpie = new Character("Harpie", 25, 25, 1, 25, 1, 1)

let troll = new Character("Troll", 25, 25, 1, 25, 1, 1)

let fireElemental = new Character("Fire Elemental", 25, 25, 1, 25, 1, 1)

let boss = new Character("Boss", 25, 25, 1, 25, 1, 1)

export const monsterList = [slime, swarmOfRats, kobold, goblin, skeletonWarrior, orc, harpie, troll, fireElemental, boss]
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
        this.type = type
        this.level = level;
    }
}

//Numbers are just examples
// Weapons
const rustyShortSword = new Item("Rusty Short Sword", "An old, rusted sword with a dull blade.", "common", (player) => player.damage += 1, "weapon", 1);

const wornMagicStaff = new Item("Worn Magic Staff", "A simple staff with faded enchantments.", "common", (player) => player.damage += 1, "weapon", 1);

const flameDagger = new Item("Flame Dagger", "A dagger that glows with a fiery aura.", "uncommon", (player) => player.damage += 1, "weapon", 2);

const frostMace = new Item("Frost Mace", "A heavy mace that radiates freezing cold.", "rare", (player) => player.damage += 1, "weapon", 3);

const stormblade = new Item("Stormblade", "A legendary sword crackling with lightning energy.", "epic", (player) => player.damage += 1, "weapon", 5);

//weapons in a List
const weaponList = [rustyShortSword, wornMagicStaff, flameDagger, frostMace, stormblade]

//Helmets
const leatherHood = new Item("Leather Hood", "A basic hood made of worn leather.", "common", (player) => player.defense += 1, "helmet", 1);

const ironHelmet = new Item("Iron Helmet", "A simple helmet offering minimal protection.", (player) => player.defense += 1, "common", "helmet", 1);

const runedHelmet = new Item("Runed Helmet", "A helmet engraved with faintly glowing runes.", "uncommon", (player) => player.defense += 1, "helmet", 2);

const guardianHelmet = new Item("Guardian’s Helmet", "A sturdy helmet for vigilant defenders.", "rare", (player) => player.defense += 1, "helmet", 3);

const dragonsteelHelmet = new Item("Dragonsteel Helmet", "A helmet forged from dragonsteel, offering unmatched protection.", "epic", (player) => player.defense += 1, "helmet", 5);

//weapons in a List
const helmList = [leatherHood, ironHelmet, runedHelmet, guardianHelmet, dragonsteelHelmet]

//Armor
const leatherJerkin = new Item("Leather Jerkin", "A simple jerkin made of hardened leather.", "common", (player) => player.health += 1, "armor", 1);

const chainmailArmor = new Item("Chainmail Armor", "A basic chainmail offering decent protection.", "common", (player) => player.health += 1, "armor", 1);

const armoredRobe = new Item("Armored Robe", "A robe reinforced with leather plates.", "uncommon", (player) => player.health += 1, "armor", 2);

const shadowArmor = new Item("Shadow Armor", "A dark armor that blends into the shadows.", "rare", (player) => player.health += 1, "armor", 3);

const titanArmor = new Item("Titan Armor", "A legendary armor forged by ancient titans.", "epic", (player) => player.health += 1, "armor", 5);

//armor in a List
const armorList = [leatherJerkin, chainmailArmor, armoredRobe, shadowArmor, titanArmor]

//Shoes
const wornBoots = new Item("Worn Boots", "Old, scuffed boots that have seen better days.", "common", (player) => player.dodgeChance += 1, "shoes", 1);

const lightSandals = new Item("Light Sandals", "Simple sandals for quick movement.", "common", (player) => player.dodgeChance += 1, "shoes", 1);

const windrunnerBoots = new Item("Windrunner Boots", "Boots enchanted with the power of wind.", "uncommon", (player) => player.dodgeChance += 1, "shoes", 2);

const wandererBoots = new Item("Wanderer’s Boots", "Sturdy boots for long journeys.", "rare", (player) => player.dodgeChance += 1, "shoes", 3);

const phantomShoes = new Item("Phantom Shoes", "Shoes that const the wearer move like a ghost.", "epic", (player) => player.dodgeChance += 1, "shoes", 5);

//shoes in a List
const shoeList = [wornBoots, lightSandals, windrunnerBoots, wandererBoots, phantomShoes]
//

export const allItemRewardsList = [weaponList, armorList, helmList, shoeList]
//Numbers have to be edited
//Skill Class

class Skill extends Reward {
    constructor(name, description, rarity, effect) {
        super(name, description, rarity, effect)
    }
}

//Knight Skills
let shieldwall = new Skill("Shieldwall", "You take 15% less damage", "common", "Insert Function")

let unyieldingWill = new Skill("Unyielding Will", "The Knight has a 10% chance to survive a lethal attack and continue fighting with full HP", "rare", "Insert Function")

//Assassin Skills
let blindingSpeed = new Skill("Blinding Speed", "Increases attack speed by 10% if the fight lasts longer than 10 seconds", "common")

let deadlyPrecision = new Skill("Deadly Precision", "The first attack deals 200% damage.", "common", "Insert Function")

//Ranger Skills
let targetedWeakness = new Skill("Targeted Weakness", "The Ranger deals 20% extra damage to enemies when their HP falls below 30%", "common", "Instert Function")

let repairProtocol = new Skill("Repair Protocol", "Regenerates 2% of maximum HP when you dodge", "common", "insert function")

//Available to All Classes
let longshot = new Skill("Longshot", "Decrease attackspeed by 50% for 500% Damage", "common", "Insert Function")

let dodgeRoll = new Skill("Dodge Roll", "All characters gain an additional 5% chance to dodge an attack", "common", "Insert Function")

let bloodyDetermination = new Skill("Bloody Determination", "Increases damage by 15% when HP falls below 25%.", "common", "insert function")

let pathOfBalance = new Skill("Path of Balance", "Gain 10% additional attack and defense as long as their HP remains above 75%.", "common", "insert function")

// Fighting System
//Player chooses Class

export function fight(player, monster, onFightEnd) {
    console.log(`The battle between ${player.name} and ${monster.name} begins!`);

    function playerAttackTurn() {
        if (player.health <= 0 || monster.health <= 0) return;

        const playerDamage = player.attack(monster);
        if (!monster.dodge()) {
            monster.takeDamage(playerDamage);
        } else {
            console.log(`${monster.name} dodged the attack!`);
        }

        if (monster.health > 0) {
            setTimeout(playerAttackTurn, player.attackSpeed);
        } else {
            console.log(`${monster.name} has been defeated!`);
            onFightEnd();
        }
    }

    function monsterAttackTurn() {
        if (player.health <= 0 || monster.health <= 0) return;

        const monsterDamage = monster.attack(player);
        if (!player.dodge()) {
            player.takeDamage(monsterDamage);
        } else {
            console.log(`${player.name} dodged the attack!`);
        }

        if (player.health > 0) {
            setTimeout(monsterAttackTurn, monster.attackSpeed);
        } else {
            console.log(`${player.name} has been defeated!`);
            onFightEnd();
        }
    }

    // Starte beide Angriffsrunden gleichzeitig
    setTimeout(playerAttackTurn, player.attackSpeed);
    setTimeout(monsterAttackTurn, monster.attackSpeed);
}

// Kampf starten
//fight(player, monster);