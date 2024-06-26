const { Weapon } = require('./projet_OOP');

describe('WeaponClass', () =>
{
    let sword;
    beforeEach(() =>
    {
        sword = new Weapon('sword', 10, 5);
    });

    test('should create a weapon with correct properties', () => {
        expect(sword.name).toBe('sword');
        expect(sword.damage).toBe(10);
        expect(sword.range).toBe(5);

    });
});

const { SlingShot } = require('./projet_OOP');


describe('SlingShot Class', () =>
{
    let slingShot;
    beforeEach(() =>
    {
        slingShot = new SlingShot('SlingShot', 10, 20);
    });
    test('should attack 6 times and check if it needs ammunition', () =>
    {
        for (let i = 0; i < 6; i++)
        {
            slingShot.attack();
        }

        expect(slingShot.needsAmmunition()).toBe(true);
    });
    test('should attack 6 times and check if it needs ammunition', () =>
    {
        for (let i = 0; i < 6; i++)
        {
            slingShot.attack();
        }

        expect(slingShot.needsAmmunition()).toBe(true);
    });
    test('should reload when out of stones and attack again', () =>
    {
        for (let i = 0; i < 6; i++)
        {
            slingShot.attack();
        }
        slingShot.prepareForAttack();

        if (slingShot.stones === 0)
        {
            slingShot.reload(5);
        }
        expect(slingShot.stones).toBe(5);
    });
});

const { Battlefield } = require('./projet_OOP');

describe('Battlefield', () =>
{
    it('should create Battlefield instance with correct terrain', () =>
    {
        const Terrain = new Battlefield('forest');
        expect(Terrain.terrain).toBe('forest');
    });

    it('describe method should return the correct terrain description', () =>
    {
        const battlefield = new Battlefield('desert');
        const description = battlefield.describe();
        expect(description).toBe('The battlefield terrain is desert.');
    });
});


const { Bow } = require('./projet_OOP');

describe('Bow', () => {
    let bow;

    beforeEach(() => {
        bow = new Bow('Bow', 20, 30, 'High', 3);
    });

    test('should perform attacks and manage ammunition', () => {
        console.log = jest.fn();
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 2');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 1');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 0');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow is out of arrows, needs more');
    });

    test('should reload correctly when out of arrows', () => {
        bow.arrows = 0;
        console.log = jest.fn();
        bow.reload();
        expect(console.log).toHaveBeenCalledWith('Bow is reloaded, arrows are now full at 3');
    });

    test('should log reloading process correctly', () => {
        bow.arrows = 0;
        console.log = jest.fn();
        bow.prepareForAttack();
        expect(console.log).toHaveBeenCalledWith('Bow needs more arrows');
        expect(console.log).toHaveBeenCalledWith('Bow is reloaded, arrows are now full at 3');
        expect(console.log).toHaveBeenCalledWith('Bow is ready to attack');
    });
});

const { CloseCombatWeapon } = require('./projet_OOP');


describe('CloseCombatWeapon Class', () =>
{
    test('should log attack message with correct damage and range', () =>
    {

        const consoleLogSpy = jest.spyOn(console, 'log');
        const katana = new CloseCombatWeapon('Katana', 15, 1);

        katana.attack();
        expect(consoleLogSpy).toHaveBeenCalledWith(`attacking with Katana at a distance of 1, causing 15 damage.`);

        consoleLogSpy.mockRestore();
    });

    test('should prepare for attack', () =>
    {
        const consoleLogSpy = jest.spyOn(console, 'log');
        const katana = new CloseCombatWeapon('Katana', 15, 1);
        katana.prepareForAttack();

        expect(consoleLogSpy).toHaveBeenCalledWith(` sharpen the Katana and attack`);
        consoleLogSpy.mockRestore();
    });
});

const { Firearm } = require('./projet_OOP');

describe('Firearm', () => {
    it('should create Firearm instance with correct properties', () =>
    {
        const firearm = new Firearm('gun', 100, 50, 10);
        expect(firearm.name).toBe('gun');
        expect(firearm.damage).toBe(100);
        expect(firearm.range).toBe(50);
        expect(firearm.magazineSize).toBe(10);
        expect(firearm.currentAmmo).toBe(10);
    });

    it('should return true for needsAmmunition', () =>
    {
        const firearm = new Firearm('gun', 100, 50, 10);
        expect(firearm.needsAmmunition()).toBe(true);
    });

    it('should log attack message and decrease ammo', () =>
    {
        const firearm = new Firearm('gun', 100, 50, 10);
        console.log = jest.fn();
        firearm.attack();
        expect(console.log).toHaveBeenCalledWith('gun fires a shot, dealing 100 damage. Ammo left: 9.');
        expect(firearm.currentAmmo).toBe(9);
    });

    it('should log reload message', () =>
    {
        const firearm = new Firearm('gun', 100, 50, 10);
        firearm.currentAmmo = 0;
        console.log = jest.fn();
        firearm.reload();
        expect(console.log).toHaveBeenCalledWith('gun is reloaded, Ammo is now full at 10');
        expect(firearm.currentAmmo).toBe(10);
    });
});

const { Fighter, Shield } = require('./projet_OOP');


describe('Fighter Class', () =>
{
    let sword, axe, shield, fighter1, fighter2;

    beforeEach(() =>
    {
        sword = { name: "Sword", damage: 10 };
        axe = { name: "Axe", damage: 15 };
        shield = new Shield("Round Shield", 5);
        fighter1 = new Fighter("Ragnar", 50, sword);
        fighter2 = new Fighter("Lagertha", 30, axe);
    });

    test('Fighter properties should be set correctly', () =>
    {
        expect(fighter1.name).toBe("Ragnar");
        expect(fighter1.health).toBe(50);
        expect(fighter1.weapon).toBe(sword);
        expect(fighter1.shield).toBeNull();

    });

    test('attack method should reduce target health', () =>
    {
        fighter1.attack(fighter2);
        expect(fighter2.health).toBe(20);
    });

    test('defend method should reduce health based on attacker s weapon', () =>
    {
        fighter2.defend(fighter1);
        expect(fighter2.health).toBe(20);
    });

    test('defend method should set health to 0 if damage exceeds health', () =>
    {
        fighter2.health = 10;
        fighter2.defend(fighter1);
        expect(fighter2.health).toBe(0);
    });

    test('changeWeapon method should update weapon', () =>
    {
        fighter1.changeWeapon(axe);
        expect(fighter1.weapon).toBe(axe);
    });

    test('potion method should heal if health is 5 or less', () =>
    {
        fighter2.health = 5;
        fighter2.potion();
        expect(fighter2.health).toBe(25);
    });

    test('potion method should not heal if health is greater than 5', () =>
    {
        fighter1.health = 10;
        fighter1.potion();
        expect(fighter1.health).toBe(10);
    });

    test('equipShield method should set shield', () =>
    {
        fighter1.equipShield(shield);
        expect(fighter1.shield).toBe(shield);
    });

    test('removeShield method should unset shield', () =>
    {
        fighter2.equipShield(shield);
        fighter2.removeShield();
        expect(fighter2.shield).toBeNull();
    });
});


describe('Shield', () =>
{
    it('should create the class with appropriate properties', () =>
    {
        const shield = new Shield('Iron Shield', 50);
        expect(shield.name).toBe('Iron Shield');
        expect(shield.defense).toBe(50);
    });

    it('should block damage correctly', () =>
    {
        const shield = new Shield('Wooden Shield', 30);
        const remainingDamage = shield.block(40);
        expect(remainingDamage).toBe(10);
    });

    it('should block all damage if defense is higher than damage', () =>
    {
        const shield = new Shield('Diamond Shield', 100);
        const remainingDamage = shield.block(40);
        expect(remainingDamage).toBe(0);
    });

    it('should block no damage if defense is zero', () =>
    {
        const shield = new Shield('Broken Shield', 0);
        const remainingDamage = shield.block(40);
        expect(remainingDamage).toBe(40);
    });
});

