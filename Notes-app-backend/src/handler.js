const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNotesHandler = (request, h) => {
    const {title,tags,body} = request.payload;
    const id = nanoid(16);
    const createdAt = updatedAt = new Date().toISOString();

    const newNotes = {
        title,
        tags,
        body,
        id,
        createdAt,
        updatedAt,
    };

    notes.push(newNotes);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: {
            noteId: id,
          },
        });
        response.code(201);
        return response;
      }

      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
};

const getAllNotesHandler = () => ({
    status : 'success',
    data : {
        notes,
    }
});

const getNoteByIdHandler = (request, h) => {
    const {id} = request.params;
    const note = notes.find((note) => note.id === id);
    if (note) {
        return {
            code : 200,
            status : 'success',
            data : {
                note,
            }
        }
    }
    return {
        code : 404,
        status : 'fail',
        message : 'Catatan tidak ditemukan',
    }
}

const editNoteByIdHandler = (request, h) => {
    const {id} = request.params;
    const note = notes.find((note) => note.id === id);
    if(note) {
        const {title,tags,body} = request.payload;
        note.title = title;
        note.tags = tags;
        note.body = body;
        note.updatedAt = new Date().toISOString();
        return {
            code : 200,
            status : 'success update notes',
            data : {
                note,
            }
        }
    }
    
    return {
        code : 404,
        status : 'fail',
        message : 'Catatan tidak ditemukan',
    }
}

const deleteNoteByIdHandler = (request, h) => {
    const {id} = request.params;
    const note = notes.find((note) => note.id === id);
    if(note) {
        notes.splice(notes.indexOf(note), 1);
        return {
            code : 200,
            status : 'success delete notes',
        }
    }
    
    return {
        code : 404,
        status : 'fail',
        message : 'Catatan tidak ditemukan',
    }
}

module.exports = {addNotesHandler,getAllNotesHandler,getNoteByIdHandler,editNoteByIdHandler,deleteNoteByIdHandler};