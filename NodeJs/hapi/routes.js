const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method : 'GET',
        path : '/hello/{username?}',
        handler : (request, h) => {
            const {lang} = request.query;
            switch(lang){
                case 'id':
                    return h.response('Halo ' + request.params.username)
                    .type('text/plain')
                    .header('X-Custom', 'some-value');
                    break;
                case 'en':
                    return 'Hello ' + request.params.username;
                    break;
                default:
                    return 'Hello ' + request.params.username;
                    break;
            }
        }
    }
];

module.exports = routes;