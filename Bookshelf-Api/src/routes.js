const {Helper,addBook,allBook,detailBook,updateBook,deleteBook} = require('./handler');
const routes = [
    {
        method: 'GET',
        path : '/helper',
        handler: Helper,
        options: {
            cors: {
              origin: ['*'],
            },
        },
    },
    {
        method : 'POST',
        path : '/books',
        handler : addBook

    },
    {
        method : 'GET',
        'path' : '/books',
        handler : allBook
    },
    {
        method : 'GET',
        path : '/books/{id}',
        handler : detailBook
    },
    {
        method : 'PUT',
        path : '/books/{id}',
        handler : updateBook
    },
    {
        method : 'DELETE',
        path : '/books/{id}',
        handler : deleteBook
    }
];

module.exports = routes;