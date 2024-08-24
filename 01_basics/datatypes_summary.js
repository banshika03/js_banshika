/* primitive datatypes(call by value)
original datatypes
7 types :
1. string
2. number 
3. boolean
4. null
5. undefined
6. symbol
7. BigInt */

const ID= Symbol('123')
const anotherID= Symbol('123')
console.log( ID==anotherID);

let bignumber=123456789062n
//console.log(typeof bignumber);

//reference type(non primitive):DATATYPES WHO ARE  MADE UP OF MULTIPLE DATATYPES



//array, functions, objects

const cartoons=["anushka","shinchan"];
let myobj={
    name:"banshika",
    age:20,
}
const myfunction= function(){
    console.log("hello");
}

console.log(typeof bignumber);
const temp=null
console.log(typeof temp);
console.log(typeof myfunction);

/*Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object */

//--------------------------------------------------------------------------------------
 
//types of memory
//stack(primitive), heap(non prinitive)
let myname="banshika"

let anothername=myname
anothername=myname

console.log(myname);
console.log(anothername);

let userone={
    email:"banshika@gmail.com"
}

let usertwo=userone

usertwo.email="banshikabro@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

