const expect = require('chai').expect;
const Probe = require('../class/probe')

// Probe Object x = 1, y = 2, direction = N , land = { cols: 5, rows: 5 }
let probe = new Probe(1, 2, 'N', { cols: 5, rows: 5 });

describe('When probe (object)', () => {

    it('Turn left, it should point to W', () => {

        probe.turn('L'); // turn left
        expect(probe.direction).to.be.equal('W');
    });

    it('Move, it should be x=0, y=2', () => {

        probe.move(); // move
        expect(probe.x).to.be.equal(0)
        expect(probe.y).to.be.equal(2)
    });

    it('Turn right 2 times, it should point to E', () => {
        
        probe.turn('R'); // turn right
        probe.turn('R'); // turn right
        expect(probe.direction).to.be.equal('E')
    });

    it('Move 3 times, it should be x=3, y=2', () => {
        
        probe.move(); // move
        probe.move(); // move
        probe.move(); // move
        expect(probe.x).to.be.equal(3)
        expect(probe.y).to.be.equal(2)
    });

    it('Turn right (with lowercase direction), it should point to S', () => {
        
        probe.turn('r') // turn right
        expect(probe.direction).to.be.equal('S')
    });
});