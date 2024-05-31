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
const testWeapon = () =>
{

    let sword = new Weapon('Sword', 10, 5);
    sword.attack();
    console.log(`Needs ammunition: ${sword.needsAmmunition()}`);
    sword.prepareForAttack();
    console.log('');
}
testWeapon();
