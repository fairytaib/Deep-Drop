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


export const allItemsList = [
    //Weapons
    new Item("Rusty Short Sword", "An old, rusted sword with a dull blade.", "common", (player) => player.damage += 1, "weapon", 1),
    new Item("Worn Magic Staff", "A simple staff with faded enchantments.", "common", (player) => player.damage += 1, "weapon", 1),
    new Item("Flame Dagger", "A dagger that glows with a fiery aura.", "uncommon", (player) => player.damage += 1, "weapon", 2),
    new Item("Frost Mace", "A heavy mace that radiates freezing cold.", "rare", (player) => player.damage += 1, "weapon", 3),
    new Item("Stormblade", "A legendary sword crackling with lightning energy.", "epic", (player) => player.damage += 1, "weapon", 5),
    //Helmet
    new Item("Leather Hood", "A basic hood made of worn leather.", "common", (player) => player.defense += 1, "helmet", 1),
    new Item("Iron Helmet", "A simple helmet offering minimal protection.", "common", (player) => player.defense += 1, "helmet", 1),
    new Item("Runed Helmet", "A helmet engraved with faintly glowing runes.", "uncommon", (player) => player.defense += 1, "helmet", 2),
    new Item("Guardian’s Helmet", "A sturdy helmet for vigilant defenders.", "rare", (player) => player.defense += 1, "helmet", 3),
    new Item("Dragonsteel Helmet", "A helmet forged from dragonsteel, offering unmatched protection.", "epic", (player) => player.defense += 1, "helmet", 5),
    //Armor
    new Item("Leather Jerkin", "A simple jerkin made of hardened leather.", "common", (player) => player.health += 1, "armor", 1),
    new Item("Chainmail Armor", "A basic chainmail offering decent protection.", "common", (player) => player.health += 1, "armor", 1),
    new Item("Armored Robe", "A robe reinforced with leather plates.", "uncommon", (player) => player.health += 1, "armor", 2),
    new Item("Shadow Armor", "A dark armor that blends into the shadows.", "rare", (player) => player.health += 1, "armor", 3),
    new Item("Titan Armor", "A legendary armor forged by ancient titans.", "epic", (player) => player.health += 1, "armor", 5),
    //Shoes
    new Item("Worn Boots", "Old, scuffed boots that have seen better days.", "common", (player) => player.dodgeChance += 1, "shoes", 1),
    new Item("Light Sandals", "Simple sandals for quick movement.", "common", (player) => player.dodgeChance += 1, "shoes", 1),
    new Item("Windrunner Boots", "Boots enchanted with the power of wind.", "uncommon", (player) => player.dodgeChance += 1, "shoes", 2),
    new Item("Wanderer’s Boots", "Sturdy boots for long journeys.", "rare", (player) => player.dodgeChance += 1, "shoes", 3),
    new Item("Phantom Shoes", "Shoes that let the wearer move like a ghost.", "epic", (player) => player.dodgeChance += 1, "shoes", 5)
]
//Numbers have to be edited
//Skill Class

class Skill extends Reward {
    constructor(name, description, rarity, effect) {
        super(name, description, rarity, effect)
    }
}

export const knightSkills = [
    new Skill("Shieldwall", "You take 15% less damage", "common", "Insert Function"),
    new Skill("Unyielding Will", "The Knight has a 10% chance to survive a lethal attack and continue fighting with full HP", "rare", "Insert Function")
];

export const assassinSkills = [
    new Skill("Blinding Speed", "Increases attack speed by 10% if the fight lasts longer than 10 seconds", "common", "Insert Function"),
    new Skill("Deadly Precision", "The first attack deals 200% damage.", "common", "Insert Function")
];

export const rangerSkills = [
    new Skill("Targeted Weakness", "The Ranger deals 20% extra damage to enemies when their HP falls below 30%", "common", "Insert Function"),
    new Skill("Repair Protocol", "Regenerates 2% of maximum HP when you dodge", "common", "Insert Function")
];

export const universalSkills = [
    new Skill("Longshot", "Decrease attackspeed by 50% for 500% Damage", "common", "Insert Function"),
    new Skill("Dodge Roll", "All characters gain an additional 5% chance to dodge an attack", "common", "Insert Function"),
    new Skill("Bloody Determination", "Increases damage by 15% when HP falls below 25%.", "common", "Insert Function"),
    new Skill("Path of Balance", "Gain 10% additional attack and defense as long as their HP remains above 75%.", "common", "Insert Function")
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