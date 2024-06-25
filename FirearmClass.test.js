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
