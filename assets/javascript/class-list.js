// Basis Character Class for Monster and Player
export class Character {
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
        return Math.random() < this.dodge / 100;
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} has ${this.health} HP left.`);
    }
}

// Monster Classes
// Refine Stats later on
export const monsterList = [
    new Character("Slime", 25, 5, 2000, 2, 5, 0),
    new Character("Swarm of Rats", 30, 7, 1800, 3, 10, 0),
    new Character("Kobold", 35, 10, 1500, 5, 15, 5),
    new Character("Goblin", 40, 12, 1200, 6, 20, 10),
    new Character("Skeleton Warrior", 50, 15, 1000, 8, 10, 15),
    new Character("Orc", 60, 20, 900, 10, 5, 20),
    new Character("Harpie", 45, 18, 1100, 7, 25, 10),
    new Character("Troll", 80, 25, 800, 15, 5, 10),
    new Character("Fire Elemental", 70, 30, 700, 10, 10, 25),
    new Character("Boss", 100, 50, 500, 20, 0, 30)

]

export const originalMonsterList = monsterList.map(monster => ({
    name: monster.name,
    health: monster.health,
    damage: monster.damage,
    attackSpeed: monster.attackSpeed,
    defense: monster.defense,
    dodgeChance: monster.dodgeChance,
    critChance: monster.critChance
}));
// Basis Reward Class for Items and Skills
class Reward {
    constructor(name, description, rarity, effect, image) {
        this.name = name
        this.description = description
        this.rarity = rarity
        this.effect = effect
        this.image = image
    }
}

// Item Class
class Item extends Reward {
    constructor(name, description, rarity, effect, type, level, image) {
        super(name, description, rarity, effect, image);
        this.type = type
        this.level = level;
    }
}

export const allItemsList = [
    //Weapons
    new Item("Rusty Short Sword", "An old, rusted sword with a dull blade.", "common", (player) => player.damage += 1, "weapon", 1, "./assets/images/items/weapons/rusty-short-sword.webp"),
    new Item("Worn Magic Staff", "A simple staff with faded enchantments.", "common", (player) => player.damage += 1, "weapon", 1, "./assets/images/items/weapons/worn-magic-staff.webp"),
    new Item("Flame Dagger", "A dagger that glows with a fiery aura.", "uncommon", (player) => player.damage += 1, "weapon", 2, "./assets/images/items/weapons/flame-dagger.webp"),
    new Item("Frost Mace", "A heavy mace that radiates freezing cold.", "rare", (player) => player.damage += 1, "weapon", 3, "./assets/images/items/weapons/frost-mace.webp"),
    new Item("Stormblade", "A legendary sword crackling with lightning energy.", "epic", (player) => player.damage += 1, "weapon", 5, "./assets/images/items/weapons/stormblade.webp"),
    //Helmet
    new Item("Leather Hood", "A basic hood made of worn leather.", "common", (player) => player.defense += 1, "helmet", 1, "./assets/images/items/helmets/leather-hood.webp"),
    new Item("Iron Helmet", "A simple helmet offering minimal protection.", "common", (player) => player.defense += 1, "helmet", 1, "./assets/images/items/helmets/iron-helmet.webp"),
    new Item("Runed Helmet", "A helmet engraved with faintly glowing runes.", "uncommon", (player) => player.defense += 1, "helmet", 2, "./assets/images/items/helmets/rune-helmet.webp"),
    new Item("Guardian’s Helmet", "A sturdy helmet for vigilant defenders.", "rare", (player) => player.defense += 1, "helmet", 3, "./assets/images/items/helmets/guardian-helmet.webp"),
    new Item("Dragonsteel Helmet", "A helmet forged from dragonsteel, offering unmatched protection.", "epic", (player) => player.defense += 1, "helmet", 5, "./assets/images/items/helmets/dragonsteel-helmet.webp"),
    //Armor
    new Item("Leather Jerkin", "A simple jerkin made of hardened leather.", "common", (player) => player.health += 1, "armor", 1, "./assets/images/items/armor/leather-jerkin.webp"),
    new Item("Chainmail Armor", "A basic chainmail offering decent protection.", "common", (player) => player.health += 1, "armor", 1, "./assets/images/items/armor/chainmail-armor.webp"),
    new Item("Armored Robe", "A robe reinforced with leather plates.", "uncommon", (player) => player.health += 1, "armor", 2, "./assets/images/items/armor/armored-robe.webp"),
    new Item("Shadow Armor", "A dark armor that blends into the shadows.", "rare", (player) => player.health += 1, "armor", 3, "./assets/images/items/armor/shadow-armor.webp"),
    new Item("Titan Armor", "A legendary armor forged by ancient titans.", "epic", (player) => player.health += 1, "armor", 5, "./assets/images/items/armor/titan-armor.webp"),
    //Shoes
    new Item("Worn Boots", "Old, scuffed boots that have seen better days.", "common", (player) => player.dodgeChance += 1, "shoes", 1, "./assets/images/items/shoes/worn-boots.webp"),
    new Item("Light Sandals", "Simple sandals for quick movement.", "common", (player) => player.dodgeChance += 1, "shoes", 1, "./assets/images/items/shoes/light-sandals.webp"),
    new Item("Windrunner Boots", "Boots enchanted with the power of wind.", "uncommon", (player) => player.dodgeChance += 1, "shoes", 2, "./assets/images/items/shoes/windrunner-boots.webp"),
    new Item("Wanderer’s Boots", "Sturdy boots for long journeys.", "rare", (player) => player.dodgeChance += 1, "shoes", 3, "./assets/images/items/shoes/wanderers-boots.webp"),
    new Item("Phantom Shoes", "Shoes that let the wearer move like a ghost.", "epic", (player) => player.dodgeChance += 1, "shoes", 5, "./assets/images/items/shoes/phantom-shoes.webp")
]
//Numbers have to be edited
//Skill Class

class Skill extends Reward {
    constructor(name, description, rarity, effect, image) {
        super(name, description, rarity, effect, image)
    }
}

export const knightSkills = [
    new Skill("Shieldwall", "You take 15% less damage", "common", "Insert Function", "./assets/images/skills/knight-skills/shieldwall.webp"),
    new Skill("Unyielding Will", "The Knight has a 10% chance to survive a lethal attack and continue fighting with full HP", "rare", "Insert Function", "./assets/images/skills/knight-skills/unyielding-will.webp")
];

export const assassinSkills = [
    new Skill("Blinding Speed", "Increases attack speed by 10% if the fight lasts longer than 10 seconds", "common", "Insert Function", "./assets/images/skills/assassin-skills/blinding-speed.webp"),
    new Skill("Deadly Precision", "The first attack deals 200% damage.", "common", "Insert Function", "./assets/images/skills/assassin-skills/deadly-precision.webp")
];

export const rangerSkills = [
    new Skill("Targeted Weakness", "The Ranger deals 20% extra damage to enemies when their HP falls below 30%", "common", "Insert Function", "./assets/images/skills/ranger-skills/targeted-weakness.webp"),
    new Skill("Repair Protocol", "Regenerates 2% of maximum HP when you dodge", "common", "Insert Function", "./assets/images/skills/ranger-skills/repair-protocol.webp")
];

export const universalSkills = [
    new Skill("Longshot", "Decrease attackspeed by 50% for 500% Damage", "common", "Insert Function", "./assets/images/skills/universal-skills/longshot.webp"),
    new Skill("Dodge Roll", "Character gain an additional 5% chance to dodge an attack", "common", "Insert Function", "./assets/images/skills/universal-skills/dodge-roll.webp"),
    new Skill("Bloody Determination", "Increases damage by 15% when HP falls below 25%.", "common", "Insert Function", "./assets/images/skills/universal-skills/bloody-determination.webp"),
    new Skill("Path of Balance", "Gain 10% additional attack and defense as long as their HP remains above 75%.", "common", "Insert Function", "./assets/images/skills/universal-skills/path-of-balance.webp")
];

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

        updateHealthDisplay(player, monster)

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

        updateHealthDisplay(player, monster)

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

function updateHealthDisplay(player, monster) {
    const playerHealth = document.getElementById("player-hp");
    const monsterHealth = document.getElementById("monster-hp");

    if (playerHealth) {
        playerHealth.textContent = player.health;
    }

    if (monsterHealth) {
        monsterHealth.textContent = monster.health;
    }
}

export let playerAvailableItems = []

export let playerActiveSkill;

export let playerAvailableFightingStyle = [{
        name: "Aggressive Attacker",
        description: "The character focuses on continuous physical attacks, disregarding defense.",
        effect: (player) => {
            player.attackSpeed *= 1.15; // Erhöht die Angriffsgeschwindigkeit um 15%
            player.defense *= 0.8; // Verringert die Verteidigung um 20%
        }
    },
    {
        name: "Defensive Tank",
        description: "The character prioritizes defense, aiming to minimize damage while attacking rarely.",
        effect: (player) => {
            player.defense *= 1.3; // Reduziert eingehenden Schaden um 30%
            player.attackSpeed *= 0.75; // Verringert die Angriffsgeschwindigkeit um 25%

        }
    },
    {
        name: "Critical Fighter",
        description: "The character aims to perform few but highly damaging attacks.",
        effect: (player) => {
            player.critChance = (player.critChance || 0) + 0.5; // Erhöht die Chance auf Chrit Angriff um 50%
            player.attackSpeed *= 0.8; // Verringert die Angriffsgeschwindigkeit um 20%
        }
    },
    {
        name: "Skillful Dodger",
        description: "The character focuses on evading attacks and uses quick movements to control the fight.",
        effect: (player) => {
            player.dodgeChance = (player.dodgeChance || 0) + 0.2; // Erhöht die Ausweichchance um 20%
            player.damage *= 0.85; // Verringert den physischen Schaden um 15%
        }
    }
];

export let playerAvailableSkills = []