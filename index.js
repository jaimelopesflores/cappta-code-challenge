const { move } = require('./functions/probe')

console.log(move)

let land = {
    cols: 5,
    rows: 5
}

let probe = {
    x: 3,
    y: 3,
    direction: 'E'
}

move(probe)