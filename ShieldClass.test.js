const { Shield } = require('./projet_OOP');

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
