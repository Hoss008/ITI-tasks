import fs from 'fs';

//read file()-callback version sync

fs.readFile('./test.txt','utf8',(err,data)=>{ 
    if(err) throw err;
    console.log(data);
})