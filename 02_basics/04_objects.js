const tinderuser = new Object()//made with the help of constructor therefore it is a singleton object

tinderuser.id="1234ab"
tinderuser.name="sammy"
tinderuser.isloggedin=false
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"banshika",
            lastname:"choithani"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}//this will give object inside object
console.log(obj3);

//for merging objects 
const obj4=Object.assign({},obj1,obj2)//empty object is given because it is target if we wouldnt give {} then obj1 will be target and obj1 would be modified as concatanated object 
console.log(obj4);
const obj5={5:"a",6:"b"}
const obj6=Object.assign({},obj1,obj2,obj5)
console.log(obj6);

//another way by using spread operator
const obj7={...obj1,...obj2}
console.log(obj7);

//when objects are in array
const user=[
    {
        id1:"abc",
        email:"b@gmail.com"
    },
    {
        id2:"abc",
        email:"b@gmail.com"
    },
    {
        id3:"abc",
        email:"b@gmail.com"
    }
]
console.log(user[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));//gives output in form of array
console.log(Object.values(tinderuser));//output is array of values
console.log(Object.entries(tinderuser));//output is array of arrays of key and value

console.log(tinderuser.hasOwnProperty('isloggedin'));//checks whether particular property is there or not









