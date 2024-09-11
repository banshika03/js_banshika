//object literals 

const mysym=Symbol("key1")
const jsuser={
    name:"banshika",
    age:20,
    location:"indore",
    email:"banshika@google.com",
    isloggedin:false,
    lastloggedindays:["monday","saturday"],
    "full name":"banshika choithani"

}//all the key values are recorded as string by default

//two ways to access object keys
//1
console.log(jsuser.email);
//2
console.log(jsuser["email"]);

