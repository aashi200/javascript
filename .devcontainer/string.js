const name = "Aashi"
const repocount = 32

console.log(name + repocount + 'hello');
//old way of writing 

//updated way 
console.log(`Hello my name i ${name} and my repo count is ${repocount}`);

const nicename = new String("Aashi")

console.log(nicename.__proto__); //gives{} on console gives all the available function

console.log(nicename.length);
console.log(nicename.toUpperCase());
console.log(nicename.charAt(2)); // to check what exist at the given index
console.log(nicename.indexOf('A'));//gives the index or the position of the character

const newString = nicename.substring(0,3)//for slicing
console.log(newString);// doesnt take negativevalues

const anotherString =  nicename.slice(-4, 0)
console.log(anotherString);// can include negative counting starts from backwards

const url = "https://aashi.com/aashi100%"
console.log(url.replace('%100', '='))
console.log(url.includes('aashi'))