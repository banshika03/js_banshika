//if objects are created by constructor singleton is created but when it is created through object literals then singleton is not created 
//object literals 
const mysym=Symbol("key1")
const jsuser={
    name:"banshika",
    age:20,
    location:"indore",
    [mysym]:"mykey1",
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
console.log(jsuser[mysym]);
jsuser.email="banshika@chatgpt.com"
//Object.freeze(jsuser)//we freeze all the values that now we cant change the values now further
jsuser.email="banshika@microsoft"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());
//we have to unfreeze the object first then execute the function

jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);   
}//using backticks we are refering to the name
console.log(jsuser.greetingtwo())




