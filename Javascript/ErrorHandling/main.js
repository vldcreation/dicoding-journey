import ValidationError from './KucingKoding.js';


const detectTriangle = (a, b, c) => {
    // TODO 3
  
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
    return 'Segitiga sembarang';
  };


try {
    const a = 1;
    const b = 4;
    const c = false;
    const validationError = new ValidationError('Argumen pertama bukan number');
    validationError.validateNumberInput(a,b,c);
    console.log(detectTriangle(a,b,c));
} catch (e) {
    if(e instanceof SyntaxError)
        console.log(`Syntax Error : ${e.message}`);
    else if(e instanceof ValidationError)
        console.log(`Invalid Data : ${e.message}`);
    else
        console.log(e.stack);
}