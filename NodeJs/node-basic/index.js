import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

const birthdayEventListner = (name) => {
    console.log(`Happy Birthday ${name}`);
}

myEmitter.on('birthday', birthdayEventListner);

myEmitter.emit('birthday', process.argv[2]);