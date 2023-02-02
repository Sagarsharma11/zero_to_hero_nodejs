const fs = require('fs')

const input = process.argv;
if(process.argv[2]==='add') fs.writeFileSync(input[3],input[4]);
else if(process.argv[2]==='remove') fs.unlinkSync(input[3]);
else console.log('Invalid input');