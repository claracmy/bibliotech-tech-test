const fs = require('fs');
const path = require('path');
const EPub = require('epub');

const filepath = process.argv.slice(2).toString();
//get name of the file and make a folder for the output
const dirname = path.basename(filepath).split('.').shift();
fs.mkdir(`./assets/${dirname}`);

const epub = new EPub(filepath);
let metaData = {};

epub.on('end', () => {
  metaData = JSON.stringify(epub.metadata);
  fs.writeFileSync(`./assets/${dirname}/index.json`, metaData);
});
epub.parse();
