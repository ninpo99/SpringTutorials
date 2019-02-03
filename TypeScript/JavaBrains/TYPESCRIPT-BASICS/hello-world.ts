//var fn = () => 'response';

//var a: number;
//var b: boolean;
//var c: string;


var a: number = 20;
var c: string = 'dard';
var b: boolean = true;

var myArr: number[];
myArr = [];
myArr = [1,3,2];
myArr.push(5);

// tuple
var myArrTuple : [number, boolean];
//myArrTuple.push(4,true);

function add(a: number,b: number){
    return a + b;
}

function addOptional(a:number,b:number){
    return a + b;
}

function addEvenDefault(a:number,b:number = 2,c: number = 1) : number{
    return a + b + c;
}

var sum:number = add(5,2);
console.log(sum);

var sumOptional:number = addEvenDefault(5,2);
console.log(sumOptional);

var sumOptional2:number = addEvenDefault(5);
console.log(sumOptional2);

// implicit typing
var r = 1;
var s = 'ddf';
var n = true;

//n = 's';
var fn1 = () => 'response';
var fn2 = () => 'good morning';
console.log(fn1 + ":" + fn2);

var w;

var wx:number;
w='dfdf';
w=true;
w=5;
var g:number | string;
g='dfdf';
//g=true;
g=5;