// BattlefieldClass.test.js
const { Battlefield } = require('./projet_OOP'); // Adjust the path as needed

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
