import { http } from 'http';

const requestListener = (request, response) => {
    const {url,method} = request;
    let body = [];
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    if(url == '/'){
        if(method === 'GET'){
            response.end(`<h1>ini adalah homepage</h1>`);
        }else{
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses dengan <any> request</h1>`);
        }
    }else if(url == '/about'){
        if(method === 'GET'){
            response.end(`<h1>Halo! Ini adalah halaman about</h1>`);
        }else if(method === 'POST'){
            request.on('data' , (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name} Ini adalah halaman about`);
            })

        }else{
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak ditemukan!/h1>`);
        }
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
})
