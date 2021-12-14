var fs = require('fs');
const { resolve } = require('path');

const srcNodeRelPath = 'src/color-thief-node.js';
const distNodeRelPath = 'dist/color-thief.js';
const srcNodePath = resolve(process.cwd(), srcNodeRelPath);
const distNodePath = resolve(process.cwd(), distNodeRelPath);

fs.copyFile(srcNodePath, distNodePath, (err) => {
    if (err) throw err;
    console.log(`${srcNodeRelPath} copied to ${distNodeRelPath}.`);
});
