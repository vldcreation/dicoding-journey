class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }

    validateNumberInput(args1,args2,args3){
        // check args 1 is number
        if(typeof args1 !== 'number')
            throw new ValidationError("Argumen pertama bukan number");
        if(typeof args2 !== 'number')
            throw new ValidationError("Argumen kedua bukan number");
        if(typeof args3 !== 'number')
            throw new ValidationError("Argumen ketiga bukan number");
    }
}

export default ValidationError;