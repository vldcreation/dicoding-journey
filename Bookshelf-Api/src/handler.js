const {nanoid} = require('nanoid');
const books = require('./books.js');
const Helper = (request, h) => {
    // const {name,readPage} = JSON.stringify(request.payload);
    const data = JSON.stringify(request.payload);
    const field = Object.keys(request.query);
    let value = Object.values(request.query);
    value = (!isNaN(value[0])) ? (Number(value) == 1 ? true : false) : value[0]
    const response =  h.response({
        status : 200,
        message : 'success',
        // data :  books,
        data : value,
    });
    response.code(200);
    return response;
}

const validate = (request) => {
    const {name,pageCount,readPage} = request;
    const isNameExist = name !== undefined;
    if(!isNameExist){
        const response = h.response({
            status : "fail",
            "message": "Gagal menambahkan buku. Mohon isi nama buku"
        });
        response.code(400);
        return response;
    }
    else if(readPage > pageCount){
        const response = h.response({
            "status": "fail",
            "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }
}

const addBook = (request, h) => {
    try {
        // const { payload } = request;
        const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
        const id = nanoid(16);
        const finished = readPage === pageCount ? true : false;
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;
        const isNameExist = name !== undefined ? true : false;
        //  const response =  h.response({
        //     status : 200,
        //     message : 'success',
        //     data :  name,
        // });
        // response.code(200);
        // return response;
        if(!isNameExist){
            const response = h.response({
                status : "fail",
                "message": "Gagal menambahkan buku. Mohon isi nama buku"
            });
            response.code(400);
            return response;
        }
        else if(readPage > pageCount){
            const response = h.response({
                "status": "fail",
                "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
            });
            response.code(400);
            return response;
        }else{
            const newBooks = {
                id,name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
            }
            books.push(newBooks);
            const isSuccess = books.filter((book) => book.id === id).length > 0;
            if(isSuccess){
                const response = h.response({
                    "status": "success",
                    "message": "Buku berhasil ditambahkan",
                    "data": {
                        "bookId": id,
                    }
                });
                response.code(201);
                return response;
            }else{
                const response = h.response(
                    {
                        "status": "error",
                        "message": "Buku gagal ditambahkan"
                    });
                response.code(500);
                return response;
            }
            
        }
    } catch (error) {
        const response = h.response(
            {
                "status": "error",
                "message": "Buku gagal ditambahkan",
                "error": error
            });
        response.code(500);
        return response;
    }
}

const allBook = (request,h) => {
    function getField(book){
        return {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }
    }

    try {
        var field = Object.keys(request.query);
        let value = Object.values(request.query);
        value = (!isNaN(value[0])) ? (Number(value) == 1 ? true : false) : value[0];



        if( Object.keys(request.query).length > 0 && typeof value === "string"){
            return h.response(
                {
                    "status": "success",
                    "data": {
                        "books": books.filter((book) => {
                            return book[field].toLowerCase().includes(value.toLowerCase());
                        }).map(getField)
                    }
                }
            ).code(200);
        }else if(Object.keys(request.query).length > 0 && typeof value === "boolean"){
                return h.response(
                    {
                        "status": "success",
                        "data": {
                            "books": books.filter((book) => {
                                return book[field] === value;
                            }).map(getField)
                        }
                    }
            ).code(200);
        }else{
        return h.response(
            {
                "status": "success",
                "data": {
                    "books": books.map(getField)
                }
            }
        ).code(200);
        }
    } catch (error) {
        const response = h.response(
            {
                "status": "error",
                "error": error
            });
        response.code(500);
        return response;
    }
}

const detailBook = (request,h) => {
    const {id} = request.params;
    try {
        const book = books.find((book) => book.id === id);
        if(book){
            return h.response(
                {
                    "status": "success",
                    "data": {
                        "book": {
                            "id": book.id,
                            "name": book.name,
                            "year": book.year,
                            "author": book.author,
                            "summary": book.summary,
                            "publisher": book.publisher,
                            "pageCount": book.pageCount,
                            "readPage": book.readPage,
                            "finished": book.finished,
                            "reading": book.reading,
                            "insertedAt": book.insertedAt,
                            "updatedAt": book.updatedAt
                        }
                    }
                }
            ).code(200);
        }else{
        return h.response(
            {
                "status": "fail",
                "message": "Buku tidak ditemukan"
            }).code(404);
        }
    } catch (error) {
        const response = h.response(
            {
                "status": "fail",
                "message": "Buku tidak ditemukan"
            }).code(404);
        return response;
    }
}

const updateBook = (request,h) => {
    const {id} = request.params;
    try{
        const book = books.find((book) => book.id === id);
        if(book){
            const {name,year,author,summary,publisher,pageCount,readPage,finished,reading} = request.payload;
            const updatedAt = new Date().toISOString();
            // Validate
            // check if var finished doesn't exist
            const isNameExist = name !== undefined;
            if(!isNameExist){
                const response = h.response({
                    status : "fail",
                    "message": "Gagal memperbarui buku. Mohon isi nama buku"
                });
                response.code(400);
                return response;
            }
            else if(readPage > pageCount){
                const response = h.response({
                    "status": "fail",
                    "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
                });
                response.code(400);
                return response;
            }
            const newBook = {
                id,name,year,author,summary,publisher,pageCount,readPage,finished,reading,updatedAt
            }
            books.map((book) => {
                if(book.id === id){
                    book.name = newBook.name;
                    book.year = newBook.year;
                    book.author = newBook.author;
                    book.summary = newBook.summary;
                    book.publisher = newBook.publisher;
                    book.pageCount = newBook.pageCount;
                    book.readPage = newBook.readPage;
                    book.finished = newBook.finished !== undefined ? newBook.finished : (readPage === pageCount ? true : false);
                    book.reading = newBook.reading;
                    book.updatedAt = newBook.updatedAt;
                }
            });
            books.splice(books.indexOf(book),1,book);
            const response = h.response(
                    {
                        "status": "success",
                        "message": "Buku berhasil diperbarui",
                        "data" : {
                            "book" : books.find((book) => book.id === newBook.id)
                        }
                    }
                );
            response.code(200);
            return response;
        }
        return h.response(
            {
                "status": "fail",
                "message": "Gagal memperbarui buku. Id tidak ditemukan"
            }
        ).code(404);
    }catch(error){
        const response = h.response(
            {
                "status": "fail",
                "message": "Gagal memperbarui buku. Id tidak ditemukan"
            }).code(404);
        return response;
    }
}

const deleteBook = (request,h) => {
    const {id} = request.params;
    try{
        const book = books.find((book) => book.id === id);
        if(book){
            books.splice(books.indexOf(book),1);
            const response = h.response(
                {
                    "status": "success",
                    "message": "Buku berhasil dihapus"
                }
            );
            response.code(200);
            return response;
        }
        return h.response(
            {
                "status": "fail",
                "message": "Buku gagal dihapus. Id tidak ditemukan"
            }
        ).code(404);
    }catch(error){
        const response = h.response(
            {
                "status": "fail",
                "message": "Gagal menghapus buku. Id tidak ditemukan"
            }).code(404);
        return response;
    }
}

module.exports = {Helper,addBook,allBook,detailBook,updateBook,deleteBook};