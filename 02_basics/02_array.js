const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc)
console.log(marvel_heros);//will add up complete array dc in marvel heros array

//console.log(marvel_heros[3][1]);

const allheros=marvel_heros.concat(dc)//another way to add up 
console.log(allheros);

const allnewheros=[...marvel_heros,...dc]//spread operator

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray=anotherarray.flat(Infinity)//merge the elements of all subarrays of an array into a single array
console.log(realanotherarray);

console.log(Array.isArray("banshika"));
console.log(Array.from("banshika"));//converts it into array
console.log(Array.from({name: "banshika"}));//returns an empty array because it is not mentioned that from keys or values from which array must be made

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//merge all the values of variables










