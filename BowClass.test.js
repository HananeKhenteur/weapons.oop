const { Bow } = require('./projet_OOP');

describe('Bow class', () =>
{
    let bow;

    beforeEach(() =>
    {

        bow = new Bow('Bow', 20, 30, 'High', 3);
    });

    test('should perform attacks and manage ammunition', () =>
    {

        for (let i = 0; i < 3; i++)
        {
            bow.attack();
        }

        expect(bow.arrows).toBe(0);
        expect(bow.needsAmmunition()).toBe(true);
        bow.prepareForAttack();

        expect(bow.arrows).toBe(3);
        expect(bow.needsAmmunition()).toBe(false);


        bow.attack();
        expect(bow.arrows).toBe(2);
    });

    test('should reload correctly when out of arrows', () =>
    {

        for (let i = 0; i < 3; i++)
        {
            bow.attack();
        }
        expect(bow.arrows).toBe(0);
        expect(bow.needsAmmunition()).toBe(true);
        bow.prepareForAttack();

        expect(bow.arrows).toBe(3);
        expect(bow.needsAmmunition()).toBe(false);
    });

    test('should log reloading process correctly', () =>
    {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        bow.reload();

        expect(consoleSpy).toHaveBeenCalledWith(`${bow.name} is reloaded, arrows are now full at ${bow.arrows}`);
        expect(consoleSpy).toHaveBeenCalledWith(`${bow.name} is ready to attack`);

        consoleSpy.mockRestore();
    });
});
