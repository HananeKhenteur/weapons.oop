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
        console.log(`${this.name} attacks, with a range of ${this.range}, causing ${this.damage} damage.`);
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
        console.log(`attacking with ${this.name} at a distance of ${this.range}, can cause ${this.damage} damage.`);
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
