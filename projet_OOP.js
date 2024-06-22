class Weapon
{
    constructor(name, damage, range)
    {
        this.name = name;
        this.damage = damage;
        this.range = range;
    }

    attack() 
    {
        console.log(`${this.name} attacks, with a range of ${this.range}, causing ${this.damage} damage`);
    }

    needsAmmunition() 
    {
        return false;
    }

    prepareForAttack() 
    {
        console.log(`${this.name} is ready to attack`);
    }
}
class CloseCombatWeapon extends Weapon 
{
    attack()  
    {
        console.log(`attacking with ${this.name} at a distance of ${this.range}, causing ${this.damage} damage.`);
    }

    prepareForAttack() 
    {
        console.log(` sharpen the ${this.name} and attack`);
    }
}
class Firearm extends Weapon 
{
    constructor(name, damage, range, magazineSize) 
    {
        super(name, damage, range);
        this.magazineSize = magazineSize;
        this.currentAmmo = magazineSize;
    }

    attack() 
    {
        if (this.currentAmmo > 0) 
        {
            this.currentAmmo--;
            console.log(`${this.name} fires a shot, dealing ${this.damage} damage. Ammo left: ${this.currentAmmo}.`);
        } else {
            console.log(`${this.name} is out of ammo!`);
        }
    }

    needsAmmunition() 
    {
        return true;
    }

    prepareForAttack() 
    {
        if (this.currentAmmo === 0) 
        {
            this.reload();
        }
         else 
        {
            console.log(`${this.name} is ready to fire`);
        }
    }

    reload() 
    {
        this.currentAmmo = this.magazineSize;
        console.log(`${this.name} is reloaded, Ammo is now full at ${this.magazineSize}`);
    }
}
class Bow extends Weapon
{
    constructor(name, damage, range, tension, arrows)
    {
        super(name, damage, range);
        this.tension = tension;
        this.arrows = arrows;
    }

    attack()
    {
        if (this.arrows > 0)
        {
            this.arrows--;
            console.log(`${this.name} shoots an arrow, causing ${this.damage} damage. Arrows left: ${this.arrows}`);
        }
        else
        {
            console.log(`${this.name} is out of arrows, needs more`);
        }
    }

    needsAmmunition()
    {
        return true;
    }

    prepareForAttack()
    {
        if (this.arrows === 0)
        {
            console.log(`${this.name} needs more arrows`);
            this.reload();
        }
        else
        {
            console.log(`${this.name} is ready to shoot`);
        }
    }

    reload()
    {
        this.arrows = 3; 
        console.log(`${this.name} is reloaded, arrows are now full at ${this.arrows}`);
        console.log(`${this.name} is ready to attack`);
    }
}
class SlingShot extends Weapon 
{
    constructor(name, damage, range) 
    {
        super(name, damage, range);
        this.stones = 5; 
    }

    attack() 
    {
        if (this.stones > 0) 
        {
            this.stones--;
            console.log(`${this.name} slings a stone, causing ${this.damage} damage. number of stones left is ${this.stones}.`);
        } 
        else 
        {
            console.log(`${this.name} is out of stones`);
        }
    }

    needsAmmunition() 
    {
        return true;
    }

    prepareForAttack() 
    {
        if (this.stones === 0) 
        {
            console.log(`${this.name} needs more stones`);
        } 
        else 
        {
            console.log(`${this.name} is ready to sling`);
        }
    }
    reload (stones)
    {
        this.stones+= stones;
        console.log(`${this.name} reloaded with ${stones} stones, total stones now is: ${this.stones}`);
    }
}
class Fighter {
    constructor(name, health, weapon, shield = null) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.shield = shield;
    }

    attack(target) {
        const damageDealt = this.weapon.damage;
        target.health -= damageDealt;
        console.log(`${this.name} attacks ${target.name} for ${damageDealt} damage`);
    }

    defend(attacker) {
        const damageReceived = attacker.weapon.damage;
        this.health -= damageReceived;

        console.log(`${this.name} defends against ${attacker.name}'s attack and loses ${damageReceived} health`);

        if (this.health <= 0) {
            console.log(`${this.name} is defeated`);
            this.health = 0;
        } else {
            console.log(`${this.name} has ${this.health} health left.`);
        }
    }

    changeWeapon(newWeapon) {
        this.weapon = newWeapon;
        console.log(`${this.name} has changed weapon to ${this.weapon.name}`);
    }

    potion() {
        const healingAmount = 20;
        if (this.health <= 5)
        {
            this.health += healingAmount;
            console.log(`${this.name} drinks a healing potion and gains ${healingAmount} health`);
        } else {
            console.log(`${this.name} cannot take the potion right now`);
        }
    }

    equipShield(shield)
    {
        this.shield = shield;
    }

    removeShield()
    {
        this.shield = null;
    }

}

class Shield {
    constructor(name, defense)
    {
        this.name = name;
        this.defense = defense;
    }

    block(damage)
    {
        const damageBlocked = Math.min(damage, this.defense);
        console.log(`The shield blocks ${damageBlocked} damage.`);
        return damage - damageBlocked;
    }
}

class Battlefield
{
    constructor(terrain)
    {
        this.terrain = terrain;
    }

    describe() {
        return `The battlefield terrain is ${this.terrain}.`;
    }
}

module.exports = Battlefield;

module.exports = { Weapon, CloseCombatWeapon, Firearm, Bow, SlingShot, Fighter, Shield, Battlefield };

