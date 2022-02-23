import fs from 'fs'

const readableStream = fs.createReadStream('index.txt',{
    highWaterMark : 15 // buffer size
})

const writeableStream  = fs.createWriteStream(
    'outputIndex.txt'
)

readableStream.on('readable', () => {
    try {
        writeableStream.write(
            `${readableStream.read()}\n`)
    } catch (error) {
        
    }
})