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
