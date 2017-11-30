const expect = require('chai').expect;
const { clone } = require('../functions')
const { move, turn } = require('../functions/probe');

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

let probeAcc;

describe('When probe (functional)', () => {

    it('Turn left, it should point to N', () => {
        
        probeAcc = turn(probe, 'L') // turn left

        expect(probeAcc.direction).to.be.equal('N')
    });

    it('Move, it should be x=3, y=4', () => {
        
        probeAcc = move(probeAcc, land) // move
        
        expect(probeAcc.x).to.be.equal(3)
        expect(probeAcc.y).to.be.equal(4)
    });

    it('Turn right 2 times, it should point to S', () => {
        
        probeAcc = turn(probeAcc, 'R') // turn right
        probeAcc = turn(probeAcc, 'R') // turn right

        expect(probeAcc.direction).to.be.equal('S')
    });

    it('Move 3 times, it should be x=3, y=1', () => {
        
        probeAcc = move(probeAcc, land) // move
        probeAcc = move(probeAcc, land) // move
        probeAcc = move(probeAcc, land) // move

        expect(probeAcc.x).to.be.equal(3)
        expect(probeAcc.y).to.be.equal(1)
    });

    it('Turn right (with lowercase direction), it should point to W', () => {
        
        probeAcc = turn(probeAcc, 'r') // turn right

        expect(probeAcc.direction).to.be.equal('W')  
    });
});

it ('Should not mutate the original probe JSON', () => {

    let mutatedJson = move(clone(probe), land);
    
    expect(probe).not.to.be.deep.equal(mutatedJson);
})