const fs = require('fs');


function writeData(data) {
    try {
  fs.writeFileSync('./data.json',  JSON.stringify(data));
  // file written successfully
} catch (err) {
  console.error(err);
}
    
}

function readData() {
    try {
  const data = fs.readFileSync('./data.json', 'utf8');
        return  JSON.parse(data);
} catch (err) {
  console.error(err);
}
    
}



module.exports = {
  writeData,
  readData,
};
