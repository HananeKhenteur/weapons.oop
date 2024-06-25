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
