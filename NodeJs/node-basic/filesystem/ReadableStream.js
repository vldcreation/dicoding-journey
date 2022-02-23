import fs from 'fs';

const readableStream = fs.createReadStream('todo.txt',{
    highWaterMark : 10 // buffer size
})

/** 
 * Buffer di dalam stream adalah memori sementara yang digunakan oleh
 * stream dalam menyimpan data hingga data tersebut dikonsumsi
 * 
 * **/

readableStream.on('readable', () => {
    try {
        process.stdout.write(
            `[${readableStream.read()}]`
        );
    } catch (error) {
        
    }
})

readableStream.on('end', () => {
    console.log('Done');
});