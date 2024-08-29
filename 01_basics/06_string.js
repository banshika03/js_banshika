const name = "banshika"
const repoCount = 2

// console.log(name + repoCount + " Value"); This looks very outdated way of using 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is somewhat considered as modern way as the code looks clean and nice.

const gameName = new String('banshika choithani') //This si also the way of writing the strings 
console.log(gameName); // The output here comes as [String: 'banshika choithani'] 

// Also when we write this in console, we see that the output comes as the same like String{'banshika choithani'} but on hovering also we see key pair relations of  each pair with its key as numbers like 0 for a then 1 for m, and it goes....1

console.log(gameName[0]);  // ab jese key value pair hai wesa hi hai ab 0 pr a aajaega
console.log(gameName.__proto__); //ab isse aap jese uski values dekh skte hi


console.log(gameName.length); // string ki length like isme 9
console.log(gameName.toUpperCase()); // sb uppercase me hojaenge yaa chaho to lowercase me bhi
// ab yha original string ko change nhi kia mtlb string is a primitve datatype works on stack only duplication

console.log(gameName.charAt(2)); // ab dekho isme konse index pr konsa character hai jese 2 pr a hai
console.log(gameName.indexOf('g')); //ab isme index posin bta dega 


const newString = gameName.substring(0, 4) // ab isme toh negative values nhi hi de skte doge toh woh bolega mujhe fark nhi pdta me 0 se hi start krunga
console.log(newString);

const anotherString = gameName.slice(-8, 4) //isme negative daalo ya uske hisaab se kuch bhi yeh chl jaega
console.log(anotherString);

const newStringOne = "   banshika    "
console.log(newStringOne); // yha normally without trim aa jaega whi spaces ke saath
console.log(newStringOne.trim());  // ab trim kya krta woh ending me aur starting me jitni bhi spaces he na woh sb hata dega

// There are things like trimstart and trimend which works exactly like trim but removes spaces from either starting or ending acccording to the thngs....!

const url = "https://banshika.com/banshika%20aman" // Generally whitespaces are being replaced with %20

console.log(url.replace('%20', '-')) // this function replaces %20 with hyphen which we desired

console.log(url.includes('sundar')) // It checks if the value put in the block include in there in the url or not if there gives boolean value

console.log(url.split('/')); //This splits the url or any string into two or more parts like before hyphen in this case and after hyphen