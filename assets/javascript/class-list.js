// Basis Character Class for Monster and Player
export class Character {
    constructor(name, maxHealth, health, damage, attackSpeed, defense, dodgeChance, critChance) {
        this.name = name
        this.maxHealth = maxHealth
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
    new Character("Slime", 25, 25, 5, 2000, 2, 5, 0),
    new Character("Swarm of Rats", 30, 30, 7, 1800, 3, 10, 0),
    new Character("Kobold", 35, 35, 10, 1500, 5, 15, 5),
    new Character("Goblin", 40, 35, 12, 1200, 6, 20, 10),
    new Character("Skeleton Warrior", 50, 50, 15, 1000, 8, 10, 15),
    new Character("Orc", 60, 60, 20, 900, 10, 5, 20),
    new Character("Harpie", 45, 45, 18, 1100, 7, 25, 10),
    new Character("Troll", 80, 80, 25, 800, 15, 5, 10),
    new Character("Fire Elemental", 70, 70, 30, 700, 10, 10, 25),
    new Character("Boss", 100, 100, 50, 500, 20, 0, 30)

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
    // Weapons
    new Item("Rusty Short Sword", "Increases damage by 1, but its dull blade makes it less effective than other weapons.", "common", (player) => player.damage += 1, "weapon", 1, "./assets/images/items/weapons/rusty-short-sword.webp"),
    new Item("Worn Magic Staff", "Adds 1 to damage, channeling faint magical energy to enhance attacks.", "common", (player) => player.damage += 1, "weapon", 1, "./assets/images/items/weapons/worn-magic-staff.webp"),
    new Item("Flame Dagger", "Increases damage by 1, its fiery aura adds a burning effect to your strikes.", "uncommon", (player) => player.damage += 1, "weapon", 2, "./assets/images/items/weapons/flame-dagger.webp"),
    new Item("Frost Mace", "Adds 1 to damage, with its freezing cold slowing enemies upon impact.", "rare", (player) => player.damage += 1, "weapon", 3, "./assets/images/items/weapons/frost-mace.webp"),
    new Item("Stormblade", "Increases damage by 1, crackling with lightning to deliver powerful strikes.", "epic", (player) => player.damage += 1, "weapon", 5, "./assets/images/items/weapons/stormblade.webp"),

    // Helmets
    new Item("Leather Hood", "Adds 1 to defense, offering minimal protection against weak attacks.", "common", (player) => player.defense += 1, "helmet", 1, "./assets/images/items/helmets/leather-hood.webp"),
    new Item("Iron Helmet", "Increases defense by 1, providing basic protection for the wearer.", "common", (player) => player.defense += 1, "helmet", 1, "./assets/images/items/helmets/iron-helmet.webp"),
    new Item("Runed Helmet", "Boosts defense by 1 with faintly glowing runes enhancing its protective capabilities.", "uncommon", (player) => player.defense += 1, "helmet", 2, "./assets/images/items/helmets/rune-helmet.webp"),
    new Item("Guardian’s Helmet", "Adds 1 to defense, designed for those who stand firm against incoming attacks.", "rare", (player) => player.defense += 1, "helmet", 3, "./assets/images/items/helmets/guardian-helmet.webp"),
    new Item("Dragonsteel Helmet", "Increases defense by 1, its legendary craftsmanship providing unmatched protection.", "epic", (player) => player.defense += 1, "helmet", 5, "./assets/images/items/helmets/dragonsteel-helmet.webp"),

    // Armor
    new Item("Leather Jerkin", "Adds 1 to health, offering basic resistance against physical damage.", "common", (player) => player.health += 1, "armor", 1, "./assets/images/items/armor/leather-jerkin.webp"),
    new Item("Chainmail Armor", "Boosts health by 1, providing decent protection against stronger blows.", "common", (player) => player.health += 1, "armor", 1, "./assets/images/items/armor/chainmail-armor.webp"),
    new Item("Armored Robe", "Increases health by 1, blending mobility with added protection.", "uncommon", (player) => player.health += 1, "armor", 2, "./assets/images/items/armor/armored-robe.webp"),
    new Item("Shadow Armor", "Adds 1 to health, allowing the wearer to blend into the shadows and avoid detection.", "rare", (player) => player.health += 1, "armor", 3, "./assets/images/items/armor/shadow-armor.webp"),
    new Item("Titan Armor", "Boosts health by 1, its legendary durability shielding against powerful attacks.", "epic", (player) => player.health += 1, "armor", 5, "./assets/images/items/armor/titan-armor.webp"),

    // Shoes
    new Item("Worn Boots", "Increases dodge chance by 1, offering slight agility despite their age.", "common", (player) => player.dodgeChance += 1, "shoes", 1, "./assets/images/items/shoes/worn-boots.webp"),
    new Item("Light Sandals", "Boosts dodge chance by 1, improving movement speed and evasion.", "common", (player) => player.dodgeChance += 1, "shoes", 1, "./assets/images/items/shoes/light-sandals.webp"),
    new Item("Windrunner Boots", "Adds 1 to dodge chance, their enchantment enhancing the wearer’s speed.", "uncommon", (player) => player.dodgeChance += 1, "shoes", 2, "./assets/images/items/shoes/windrunner-boots.webp"),
    new Item("Wanderer’s Boots", "Boosts dodge chance by 1, their sturdy design aiding long journeys and evasion.", "rare", (player) => player.dodgeChance += 1, "shoes", 3, "./assets/images/items/shoes/wanderers-boots.webp"),
    new Item("Phantom Shoes", "Increases dodge chance by 1, making the wearer almost ghost-like in movement.", "epic", (player) => player.dodgeChance += 1, "shoes", 5, "./assets/images/items/shoes/phantom-shoes.webp")
];

//Numbers have to be edited
//Skill Class

export class Skill extends Reward {
    constructor(name, description, rarity, effect, image, triggerCondition = () => true) {
        super(name, description, rarity, effect, image)
        this.triggerCondition = triggerCondition
        this.isApplied = false
    }

    applyEffect(player, enemy) {
        if (this.triggerCondition(player, enemy) && !this.isApplied) {
            this.effect(player, enemy); // Applies the skill's effect if the condition is met
            this.isApplied = true
        }
    }

}

export const knightSkills = [
    new Skill("Shieldwall", "Reduces incoming damage by 15%, fortifying your defenses against attacks.", "common", (player) => player.defense = (player.defense || 0) + 0.15, "./assets/images/skills/knight-skills/shieldwall.webp", (player, enemy) => true),
    new Skill("Unyielding Will", "Grants a 10% chance to survive a lethal attack and restore full HP, keeping the fight alive.", "rare", (player) => unyieldingWill(player), "./assets/images/skills/knight-skills/unyielding-will.webp", (player) => player.health === 1 && Math.random() <= 0.1)
];

function unyieldingWill(player) {
    let survive = Math.floor(Math.random() * 101)
    if (player.health == 1 && survive >= 10) {
        player.health = player.maxHealth
    }
}

export const assassinSkills = [
    new Skill("Blinding Speed", "Increases all Stats by 10%", "common", (player) => blindingSpeed(player), "./assets/images/skills/assassin-skills/blinding-speed.webp", (player) => true),

];

function blindingSpeed(player) {
    player.damage *= 1.1
    player.attackSpeed *= 1.1
    player.defense *= 1.1
    player.dodgeChance += 10
    player.critChance += 10
}

// }

export const rangerSkills = [
    new Skill("Targeted Weakness", "Deals 20% extra damage to enemies with less than 30% HP, exploiting their vulnerabilities.", "common", (enemy) => targetedWeakness(enemy), "./assets/images/skills/ranger-skills/targeted-weakness.webp", (player, enemy) => enemy.health <= enemy.maxHealth * 0.3),
    new Skill("Repair Protocol", "Restores 2% of your maximum HP each time you successfully dodge an attack, enhancing survivability.", "common", (player) => repairProtocol(player), "./assets/images/skills/ranger-skills/repair-protocol.webp", (player) => true)
];

function targetedWeakness(enemy) {
    if (enemy.healt <= (enemy.maxHealth * 0.3)) {
        enemy.defense *= 0.8
    }
}

function repairProtocol(player) {
    // Speichere die ursprüngliche Dodge-Funktion
    const originalDodge = player.dodge.bind(player);

    // Überschreibe die Dodge-Funktion des Spielers
    player.dodge = function () {
        const dodged = originalDodge(); // Aufruf der ursprünglichen Dodge-Funktion

        if (dodged) {
            const healAmount = player.maxHealth * 0.02;
            player.health = Math.min(player.health + healAmount, player.maxHealth); // HP überschreiten Maximum nicht
            console.log(`${player.name} successfully dodged and restored ${healAmount.toFixed(2)} HP!`);
        }

        return dodged; // Rückgabe, ob ausgewichen wurde
    };
}



export const universalSkills = [
    new Skill("Longshot", "Reduces attack speed by 50%, but increases damage dealt by 200%, ideal for calculated and powerful strikes.", "common", (player) => longshot(player), "./assets/images/skills/universal-skills/longshot.webp", (player, enemy) => true),
    new Skill("Dodge Roll", "Adds an additional 5% chance to dodge attacks, improving your evasive capabilities.", "common", "Insert Function", "./assets/images/skills/universal-skills/dodge-roll.webp", (player) => true),
    new Skill("Bloody Determination", "Increases damage by 15% when your HP falls below 25%, turning desperation into power.", "common", (player) => dogdeRoll(player), "./assets/images/skills/universal-skills/bloody-determination.webp", (player) => player.health <= player.maxHealth * 0.25),
    new Skill("Path of Balance", "Grants 10% additional attack and defense as long as your HP remains above 75%, maintaining strength while healthy.", "common", (player) => pathOfBalance(player), "./assets/images/skills/universal-skills/path-of-balance.webp", (player) => player.health >= player.maxHealth * 0.75)
];

function longshot(player) {
    player.damage *= 2
    player.attackSpeed *= 0.5
}

function dogdeRoll(player) {
    player.dodge += 5
}

function pathOfBalance(player) {
    if (player.hp >= (player.maxHealth * 0.75)) {
        player.damage *= 1.1
    }
}

// Fighting System
//Player chooses Class

export function activateSkills(player) {
    playerAvailableSkills.forEach(skill => {
        if (skill.effect) {
            skill.effect(player); // Wendet den Effekt auf den Spieler an
        }
    });
}

export function fight(player, monster, onFightEnd) {
    console.log(`The battle between ${player.name} and ${monster.name} begins!`);

    function playerAttackTurn() {
        if (player.health <= 0 || monster.health <= 0) return;

        playerAvailableSkills.forEach(skill => {
            if (skill.type == 'Skill') {
                skill.applyEffect(player, monster);
            }
            console.log("Skill Check successful")
        });

        const playerDamage = player.attack(monster);

        if (!monster.dodge()) {
            monster.takeDamage(playerDamage);
        } else {
            console.log(`${monster.name} dodged the attack!`);
        }

        // Apply all player skills


        updateHealthDisplay(player, monster);

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

        // Apply all monster effects if needed (extendable for monster skills)
        updateHealthDisplay(player, monster);

        if (player.health > 0) {
            setTimeout(() => monsterAttackTurn, monster.attackSpeed); // Pass function reference properly
        } else {
            console.log(`${player.name} has been defeated!`);
            onFightEnd();
        }
    }

    // Start both attack turns
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

export let playerAvailableFightingStyle = [{
        name: "Aggressive Attacker",
        description: "Increases attack speed by 15%, but reduces defense by 20%, making the character faster but more vulnerable.",
        effect: (player) => {
            player.attackSpeed *= 1.15; // Increases attack speed by 15%
            player.defense *= 0.8; // Reduces defense by 20%
        }
    },
    {
        name: "Defensive Tank",
        description: "Boosts defense by 30%, reducing incoming damage, but lowers attack speed by 25%, making attacks less frequent.",
        effect: (player) => {
            player.defense *= 1.3; // Increases defense by 30%
            player.attackSpeed *= 0.75; // Decreases attack speed by 25%
        }
    },
    {
        name: "Critical Fighter",
        description: "Increases critical hit chance by 50%, allowing for powerful strikes, but lowers attack speed by 20%, resulting in slower attacks.",
        effect: (player) => {
            player.critChance = (player.critChance || 0) + 0.5; // Increases critical hit chance by 50%
            player.attackSpeed *= 0.8; // Reduces attack speed by 20%
        }
    },
    {
        name: "Skillful Dodger",
        description: "Improves dodge chance by 20%, enhancing evasiveness, but decreases physical damage dealt by 15%.",
        effect: (player) => {
            player.dodgeChance = (player.dodgeChance || 0) + 0.2; // Increases dodge chance by 20%
            player.damage *= 0.85; // Reduces physical damage by 15%
        }
    }
];


export let playerAvailableSkills = []