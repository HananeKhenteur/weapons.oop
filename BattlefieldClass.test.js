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
