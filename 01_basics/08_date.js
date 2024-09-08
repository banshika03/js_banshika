//dates
let mydate=new Date()
console.log(mydate);
console.log(mydate.toDateString());//prints only date without time and time zone
console.log(mydate.toString());//prints date in string
console.log(typeof mydate);//type of date is object

let mycreateddate=new Date(2023,0,23,5,3)//first three values are date and another values are time 
//when date is given in form of array month starts from 0 
console.log(mycreateddate);
console.log(mycreateddate.toString());
console.log(mycreateddate.toLocaleString());

let mycreateddate2=new Date("2023-01-5")//for specific format of yy-mm-dd ,month starts from 01 because this is not in the form of array
console.log(mycreateddate2);

let mycreateddate3=new Date("01-6-2023")
//for date in form of mm-dd-yy
console.log(mycreateddate3);

let mytimestamp = Date.now()
console.log(mytimestamp);//time in miliseconds from the date 01 jan 1970, this is created date

console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000));//to conver time in seconds 

let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday: "long",

})//this is used to customise the date by creating object
console.log(newdate.toDateString());











