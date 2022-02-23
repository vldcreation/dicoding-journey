import {EventEmitter} from 'events';

const myEventEmitter = new EventEmitter();

const makeCoffee = ({name}) =>{
    console.log(`kopi ${name} telah dibuat`);
}

const makeBill = ({price}) => {
    console.log(`total harga ${price}`);
}


const onCoffeeOrderListener = ({name,price}) => {
    makeCoffee({name});
    makeBill({price});
}

myEventEmitter.on('coffee-order', onCoffeeOrderListener);

myEventEmitter.emit('coffee-order', {name: 'latte','price':'10000'});