import fs, { write } from 'fs'

const writeableStream = fs.createWriteStream(
    'output.txt',
)

writeableStream.write('Di hari selesa kemudian saya akan mengoding!\n')
writeableStream.write('Hari jumat setelahnya saya akan bermain playstation!\n')
writeableStream.end();