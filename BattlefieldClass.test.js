const { Battlefield } = require('./projet_OOP');

describe('Battlefield', () => {
    it('should describe the terrain correctly', () =>
    {
        const battlefield = new Battlefield('forest');
        expect(battlefield.describe()).toBe('The battlefield terrain is forest');
    });

    it('should create the class with appropriate properties', () =>
    {
        const battlefield = new Battlefield('Rocky Mountains');
        expect(battlefield.terrain).toBe('Rocky Mountains');
    });
});
