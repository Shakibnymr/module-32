/**
 * Truthy:
 * 1.true
 * 2.any number(+,-) will be truthy except 0 
 * 3.any string is truthy except empty string ''; not this ' '
 * 4. '0' , 'false'
 * 5. {}
 * 6. []
 * 
 * Falsy:
 * 1.false
 *2. 0 ; false
 3. '' (empty string)
 4. undefined
 5. null
 * */ 


//  let x = [];
//  console.log(x);
// if(x){
//     console.log('value of x is truthy');
// }
// else{
//     console.log('value of x is falsy');
// }

// optional
// check falsy
const y = null
if (!y) {
console.log('value is falsy')
}

const z = ' ';
// check truthy
if(!!z){
console.log('value is truthy')
}