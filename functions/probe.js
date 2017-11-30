const { clone } = require('.');

module.exports = {

    move(probe, land={ cols: null, rows: null }) {

        let newProbe = clone(probe);

        function persistLand () {

            if (newProbe.x < 0) newProbe.x = 0;
            else if (newProbe.x > land.cols) newProbe.x = land.cols;
            else if (newProbe.y < 0) newProbe.y = 0;
            else if (newProbe.y > land.rows) newProbe.y = land.rows;
        }

        switch(newProbe.direction.toUpperCase()) {
            case 'N': newProbe.y += 1; break;
            case 'W': newProbe.x -= 1; break;
            case 'S': newProbe.y -= 1; break;
            case 'E': newProbe.x += 1; break;
            default: null;
        }

        persistLand();

        return newProbe
    },

    turn(probe, to) {

        let newProbe = clone(probe);
        let newTo = to.toUpperCase();

        switch(newProbe.direction.toUpperCase()) {
            case 'N': newProbe.direction = (newTo === 'L' ? 'W' : (newTo === 'R' ? 'E' : newProbe.direction)); break;
            case 'W': newProbe.direction = (newTo === 'L' ? 'S' : (newTo === 'R' ? 'N' : newProbe.direction)); break;
            case 'S': newProbe.direction = (newTo === 'L' ? 'E' : (newTo === 'R' ? 'W' : newProbe.direction)); break;
            case 'E': newProbe.direction = (newTo === 'L' ? 'N' : (newTo === 'R' ? 'S' : newProbe.direction)); break;
            default: newProbe.direction;
        }

        return newProbe
    },

    toString(probe) {
        return `${probe.x} ${probe.y} ${probe.direction}`
    }
}