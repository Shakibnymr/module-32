/*
strongly typed language
int a = 5;
string b = 'odo lobina';
bool c = True;
object student = { name: 'sakib', id: 55}
int[] numbers = [12,45,78]
string[] friends = ['abul', 'babul']

*/ 

// dynamic is a dynamic typed language
//primitive
const a = 5;
const b = 'samsu kopa';
const d = true
//non-primitive
const ages = [ 45, 65, 48];
const student = {id: 23, class: 7}
// console.log(typeof a, typeof b,typeof d,Array.isArray(ages), typeof student);

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);