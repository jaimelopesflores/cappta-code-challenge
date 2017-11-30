const Probe = require('./class/probe');
const { parseInputFile } = require('./helpers');

let input = process.argv[process.argv.length - 1]

parseInputFile(input).then(({ probes, land }) => {

  probes.map(probeJson => {

    let probe = new Probe(probeJson.x, probeJson.y, probeJson.direction, land);

    probeJson.commands.map(command => command.toUpperCase() === 'M' ? probe.move() : probe.turn(command));

    console.log(probe.toString());

  })
})