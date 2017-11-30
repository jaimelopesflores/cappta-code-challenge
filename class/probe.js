module.exports = class Probe {

    constructor(x, y, direction, land) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.land = land;
    }

    turn(to) {
        to = to.toUpperCase()
        switch(this.direction.toUpperCase()) {
            case 'N': this.direction = (to === 'L' ? 'W' : (to === 'R' ? 'E' : this.direction)); break;
            case 'W': this.direction = (to === 'L' ? 'S' : (to === 'R' ? 'N' : this.direction)); break;
            case 'S': this.direction = (to === 'L' ? 'E' : (to === 'R' ? 'W' : this.direction)); break;
            case 'E': this.direction = (to === 'L' ? 'N' : (to === 'R' ? 'S' : this.direction)); break;
            default: this.direction;
        }
    }

    persistLand() {
        if (this.x < 0) this.x = 0;
        else if (this.x > this.land.cols) this.x = this.land.cols;
        else if (this.y < 0) this.y = 0;
        else if (this.y > this.land.rows) this.y = this.land.rows;
    }

    move() {
        switch(this.direction.toUpperCase()) {
            case 'N': this.y += 1; break;
            case 'W': this.x -= 1; break;
            case 'S': this.y -= 1; break;
            case 'E': this.x += 1; break;
            default: null;
        }
        this.persistLand();
    }

    toString() {
        return `${this.x} ${this.y} ${this.direction}`
    }
}