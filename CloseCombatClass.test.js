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
