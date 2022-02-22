class Server{
    constructor(host){
        this.host = host;
        this.ressource = "https://nodejs.org/api/process.html";
    }
}

const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});

const memory = () => {
    return process.memoryUsage();
}

console.log(server.host,server.ressource);
console.log(memory());

// argv from process
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);