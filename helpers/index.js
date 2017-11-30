const readline = require('readline');
const fs = require('fs');
const Promise = require('bluebird');

module.exports = {

  parseInputFile(input) {

    return new Promise((resolve) => {

      let fileStream = fs.createReadStream(input);
      let lineCount = 1;
      let land, probe, probes = [];
      
      readline.createInterface({
        input: fileStream
      })
      .on('line', function (line, index) {
        
        switch (lineCount) {
          case 1:
            land = line.split(' ');
            land = {
              rows: parseInt(land[0]),
              cols: parseInt(land[1])
            }

            break;
          default:
            
            if (lineCount % 2 == 0) { // even
      
              probe = line.split(' ');
              probe = {
                x: parseInt(probe[0]),
                y: parseInt(probe[1]),
                direction: probe[2]
              }
             
            }
            else { // odd

              probe.commands = line.split('');
              probes.push(probe)
            }
      
            break;
        }
      
        lineCount++;
      })
      .on('close', () => resolve({ probes, land }));
    });
  }
}
