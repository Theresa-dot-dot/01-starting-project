function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello('George'); //print Hello George

function add(x, y){
return x + y;
}
console.log(add(2, 3));
console.log(add("hello ", 'world'));

//funcrion as parameters
function sayHi(myfunc){
    console.log('Hi!');
    myfunc();
}
sayHello(function(){
    console.log("Bye")
});

//callback function
setTimeout(sayHi, 2000);

//functions as expressions
let age = 39 + 2;

//anonymous functions are funtionc without a name
let iLoveJS = function(){
    console.log("I love JS");
}
iLoveJS ();

let expressionAdd = function(x, y){
    return x + y;
}
expressionAdd(1, 2);

//Arrow functions
let addArrow = (x,y) => {
    return x + y;
}
let addArrowShort = (x,y)=>x+y;