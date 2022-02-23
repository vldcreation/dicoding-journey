import fs from 'fs';

const fileReadCallback = (error, data) => {
    if(error){
        console.log('Error : ', error);
        return;
    }
    console.log(data);
}

console.log(fs.readFileSync('todo.txt', 'utf-8'));