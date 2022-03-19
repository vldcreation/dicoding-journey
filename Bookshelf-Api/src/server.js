const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// const Qs = require('qs');

const init = async () => {
    const server = Hapi.server({
        port : 5000,
        host : 'localhost',
        // query: {
        //     parser: (query) => Qs.parse(query)
        // }
    });

    server.route(routes);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
