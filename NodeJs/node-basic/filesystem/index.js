import fs from 'fs';


const fileReadCallback = (error, data) => {
    if(error){
        console.log('Error : ', error);
        return;
    }
    console.log(data);
}


// read Asynchronously
console.log('Read file Asynchronously\n',fs.readFileSync('todo.txt', 'utf-8'));

// read Synchronously
console.log('\nRead file Synchronously');
fs.readFile('todo.txt', 'utf-8', fileReadCallback);