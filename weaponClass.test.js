const { Weapon } = require('./projet_OOP');

describe('WeaponClass', () =>
{
    let sword;
    beforeEach(() =>
    {
        sword = new Weapon('sword', 10, 5);
    });

    test('should create a weapon with correct properties', () =>
    {
        expect(sword.name).toBe('sword');
        expect(sword.damage).toBe(10);
        expect(sword.range).toBe(5);

    });
});
