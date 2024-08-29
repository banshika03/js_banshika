const score = 400
console.log(score);
// This will give you score as 400 with identifying itself the datatype of 400 as number

const balance = new Number(100)
console.log(balance);
// Now this method will definitely give you only number value as we have defined it like string one(if you remember)

console.log(balance.toString().length); // Now this Tostring method converts the number or anything like it to string and then since we know string has different methods, thus we can use these string methods on this number too......!
console.log(balance.toFixed(1)); // Now this method is very good, it helps in making any integer in decimal places like if required in e-commerse website. 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); 
// Now this helps in precision values like if there are 6 numbers it will give you precision upto 4 nos and for example in this the output comes 123.9 (4 numbers).
// take an instance like if number was 1123.6478 > then the ouput will be like 1124 and if asked for precision of 3, then it goes exponentially - 1.12e^+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 Indian standards
// This method converts the number into like good readable way like default is that millions one if you dont like add en-In , then the ouput would be 1,000,000

// ------------------------------------MATHS--------------------------------------------

console.log(Math); // Math is also an object, for seeing more functions regarding it you should see writing it in console...

console.log(Math.abs(-4)); //Now only negative values are converted into positive values, it is like taking mod in maths....
console.log(Math.round(4.3)); // Rounding off -> 4

/// There are two another methods like ceil which will when asked only roundoff to upper value like ceil(4.2)=5 and similarly like floor value, ex floor(4.9)=4

console.log(Math.max(1,4,2,7));  //7
console.log(Math.min(5,3,7,2));  //2
// These will find out Max and Min values

console.log(Math.random()); //This will always give random values sb decimal values hi dega mtlb humesha isme 0 se 1 ke beech me
console.log(Math.random()*10+1); //Ab dekho agr 1 se 10 ke beech em values chahiye toh ese kr skte ho
// console.log(Math.random(1,2,3,4,5,6)); Naah it is not working it will only give random values not these 6 integers. Damn!!!!!
console.log(Math.floor(Math.random()*10)+1); // This will give integer values...

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // numbers between 10 and 20
// ab dekho pehle math.random se 0 aur 1 ke beech agya phir max-min krke usme multiply kr diya phir +1 kr diya isse 1 se 10 ke beech hi ayegi zero nhi aegi, phir +min kra qki 10 aur 20 ke beech agya siiimmmppplle !!


