//Normal interface
interface Identity<T, U> {
    value: T;
    message: U;
}

//creating the generic 
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

//creating a function
function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error
