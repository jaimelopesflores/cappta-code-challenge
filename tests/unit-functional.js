const expect = require('chai').expect;

let field = {
    cols: 5,
    rows: 5
}

// Probe JSON
let probe = {
    x: 3,
    y: 3,
    direction: 'E'
}

describe('When probe', () => {

    it('Turn left, it should point to N', () => {
        return;
    });

    it('Move, it should be x=3, y=4', () => {
        return;
    });

    it('Turn right 2 times, it should point to S', () => {
        return;
    });

    it('Move 3 times, it should be x=3, y=1', () => {
        return; 
    });

    it('Turn right (with lowercase direction), it should point to W', () => {
        return;
    });
});

it ('Should not mutate the original probe JSON', () => {
    return;
})