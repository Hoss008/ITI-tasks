import fs from 'fs';

const data = fs.readFileSync('./test.txt','utf8')
console.log(data);