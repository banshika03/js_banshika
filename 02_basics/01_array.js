//array

const myarr=[0,1,2,3,4,5,6]
//arrays are resizable
//zero based indexing

const myheros=["shaktiman","action kamen"]
//another way to declare array
const myarr2= new Array(1,2,3,4,5)
console.log(myarr[1]);

//array methods
//myarr.push(6)//adds up values in array
//myarr.push(7)
//myarr.pop()//removes a value of lats

//myarr.unshift(9)//insert value in the starting and shift another values to the right
//myarr.shift()//removezs the first value
console.log(myarr);

console.log(myarr.includes(9));//asks whether particular number is involved or not
console.log(myarr.indexOf(9));//gives -1 because that particular number doesnt exist in array

const newarr= myarr.join()//converts array into string

console.log((newarr));
console.log(typeof newarr);

//slice, splice
//slice does not manipulate original array but splice do ,in splice it extract the portion of array which is required
console.log("A",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("C",myarr);





 




