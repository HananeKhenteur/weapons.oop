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
        console.log(` sharpen ${this.name} and attack`);
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
        this.tension= tension;
        this.arrows= arrows;
    }
    attack() 
    {
        if (this.arrows > 0) 
        {
            this.arrows--;
            console.log(`${this.name} shoots an arrow, causing ${this.damage} damage. Arrows left: ${this.arrows}.`);
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
        console.log(`${this.name} is now ready for attack`);
    }
}
class SlingShot extends Weapon 
{
    constructor(name, damage, range) 
    {
        super(name, damage, range);
        this.stones = 10; 
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
    reload(stones)
    {
        this.stones += stones;
        console.log(`${this.name} is reloaded with ${stones} stones, total stones now is ${this.stones}`);
    }
}
class Fighter 
    {
    constructor(name, health, weapon) 
    {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }

    attack(target) 
    {
        const damageDealt = this.weapon.damage;
        target.health -= damageDealt;
        console.log(`${this.name} attacks ${target.name} for ${damageDealt} damage`);
    }

    defend(attacker) 
    {
        const damageReceived = attacker.weapon.damage;
        this.health -= damageReceived;
    
        console.log(`${this.name} defends himself against ${attacker.name}s attack and loses ${damageReceived} health`);

        if (this.health <= 0)
        {
            console.log(`${this.name} is defeated`);
        }
    }

    changeWeapon(newWeapon) 
    {
        this.weapon = newWeapon;
        console.log(`${this.name} has changed weapon to ${this.weapon.name}`);
    }

    potion(healingAmount) 
    {
        const healingAmount = 20; 
        this.health += healingAmount;
        console.log(`${this.name} drinks a healing potion and gains ${healingAmount} of health`);
    }
}
class Shield {
    constructor(name, defense) {
        this.name = name;
        this.defense = defense;
    }

    block(damage) {
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

    describe() 
    {
        console.log(`The battlefield terrain is ${this.terrain}.`);
    }
}

