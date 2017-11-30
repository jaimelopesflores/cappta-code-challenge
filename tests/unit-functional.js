const expect = require('chai').expect;

let land = {
    cols: 5,
    rows: 5
}

// Probe JSON
let probe = {
    x: 3,
    y: 3,
    direction: 'E'
}

// Probe accumulator (mutable)
let probeAcc = {
    x: 3,
    y: 3,
    direction: 'E'
}

describe('When probe', () => {

    it('Turn left, it should point to N', () => {
        
        // turn left
        expect(direction).to.be.equal('N')
    });

    it('Move, it should be x=3, y=4', () => {
        
        // move
        expect(x).to.be.equal(3)
        expect(y).to.be.equal(4)
    });

    it('Turn right 2 times, it should point to S', () => {
        
        // turn right
        // turn right
        expect(direction).to.be.equal('S')
    });

    it('Move 3 times, it should be x=3, y=1', () => {
        
        // move
        // move
        // move
        expect(x).to.be.equal(3)
        expect(y).to.be.equal(1)
    });

    it('Turn right (with lowercase direction), it should point to W', () => {
        
        // turn right
        expect(direction).to.be.equal('W')  
    });
});

it ('Should not mutate the original probe JSON', () => {

    // turn left
    expect(probe).not.to.be.deep.equal(mutatedJson);
})