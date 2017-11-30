const { clone } = require('./functions');
const { move, turn, toString } = require('./functions/probe');
const { parseInputFile } = require('./helpers');

let input = process.argv[process.argv.length - 1]

parseInputFile(input).then(({ probes, land }) => {

  probes.map(probeJson => {

    let probe = clone(probeJson);

    for (let command of probeJson.commands) {
      probe = command.toUpperCase() === 'M' ? move(probe, land) : turn(probe, command);
    }
      
    console.log(toString(probe));
    
  })
});
