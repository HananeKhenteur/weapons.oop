const { Firearm } = require('./projet_OOP');

describe('Firearm class', () =>
{
    let gun;

    beforeEach(() =>
    {
        gun = new Firearm('Gun', 25, 50, 6);
    });

    test('should perform attacks and manage ammunition', () =>
    {
        for (let i = 0; i < 6; i++) {
            gun.attack();
        }
        expect(gun.currentAmmo).toBe(0);
        expect(gun.needsAmmunition()).toBe(true);
        gun.attack();
        expect(gun.currentAmmo).toBe(0);
        gun.prepareForAttack();
        expect(gun.currentAmmo).toBe(6);
        expect(gun.needsAmmunition()).toBe(false);
        gun.attack();
        expect(gun.currentAmmo).toBe(5);
    });

    test('should reload correctly when out of ammo', () =>
    {

        for (let i = 0; i < 6; i++)
        {
            gun.attack();
        }
        expect(gun.currentAmmo).toBe(0);
        expect(gun.needsAmmunition()).toBe(true);
        gun.prepareForAttack();
        expect(gun.currentAmmo).toBe(6);
        expect(gun.needsAmmunition()).toBe(false);
    });

    test('should log reloading process correctly', () =>
    {

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        gun.reload();

        expect(consoleSpy).toHaveBeenCalledWith(`${gun.name} is reloaded, Ammo is now full at ${gun.magazineSize}`);
        consoleSpy.mockRestore();
    });
});
