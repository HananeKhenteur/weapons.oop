
const { Bow } = require('./projet_OOP');

describe('Bow', () => {
    let bow;

    beforeEach(() => {
        bow = new Bow('Bow', 20, 30, 'High', 3);
    });

    test('should perform attacks and manage ammunition', () => {
        console.log = jest.fn();
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 2');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 1');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow shoots an arrow, causing 20 damage. Arrows left: 0');
        bow.attack();
        expect(console.log).toHaveBeenCalledWith('Bow is out of arrows, needs more');
    });

    test('should reload correctly when out of arrows', () => {
        bow.arrows = 0;
        console.log = jest.fn();
        bow.reload();
        expect(console.log).toHaveBeenCalledWith('Bow is reloaded, arrows are now full at 3');
    });

    test('should log reloading process correctly', () => {
        bow.arrows = 0;
        console.log = jest.fn();
        bow.prepareForAttack();
        expect(console.log).toHaveBeenCalledWith('Bow needs more arrows');
        expect(console.log).toHaveBeenCalledWith('Bow is reloaded, arrows are now full at 3');
        expect(console.log).toHaveBeenCalledWith('Bow is ready to attack');
    });
});
