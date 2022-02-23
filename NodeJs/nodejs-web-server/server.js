import http from 'http';

/** 
    *jtt[.createServer() instance from http.server
    @param callback: request listener
**/

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */


const requirestListener = (request, response) => {
    let body = [];
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;

    switch(method){
        case 'GET':
            response.end('<h1>Hello World</h1>');
            break;
        case 'POST':
            request.on('data', (chunk) => {
                body.push(chunk);
            })
        
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Hai, ${name}</h1>`);
            })
            break;
        default:
            response.end('<h1>Method undefined!</h1>');
            break;
    }
}

/**
 * @methid listen() : menjalankan server
 * memiliki 4 parameter
 * @param port (number): jalur yang digunakan untuk mengakses HTTP Server
 * @param hostnname (string) L nama domain yang digunakan oleh HTTP Server
 * @param backlog (number) : jumlah maksimum koneksi yang diterima selama proses pembuatan koneksi
 * @param listeningListner (function) : callback yang akan dijalankan saat proses pembuatan koneksi berhasil
 */

/**
 * @ressource https://nodejs.org/api/http.html#http_class_http_clientrequest
*/

const server = http.createServer(requirestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});