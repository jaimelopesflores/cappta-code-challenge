const expect = require('chai').expect;

// Probe Object x = 1, y = 2, direction = N , land = { cols: 5, rows: 5 }

describe('When probe', () => {

    it('Turn left, it should point to W', () => {

        // turn left
        expect(direction).to.be.equal('W')
    });

    it('Move, it should be x=0, y=2', () => {

        // move
        expect(x).to.be.equal(0)
        expect(y).to.be.equal(2)
    });

    it('Turn right 2 times, it should point to E', () => {
        
        // turn right
        // turn right
        expect(direction).to.be.equal('E')
    });

    it('Move 3 times, it should be x=3, y=2', () => {
        
        // move
        // move
        // move
        expect(x).to.be.equal(3)
        expect(y).to.be.equal(2)
    });

    it('Turn right (with lowercase direction), it should point to S', () => {
        
        // turn right
        expect(direction).to.be.equal('S')
    });
});