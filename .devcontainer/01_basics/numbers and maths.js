const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.tofixed(2)); //100.00

const othernumber = 123.89
console.log(othernumber.toPrecision(3));//124

const hundreds = 1000000
console.log(hundreds.toLocalString('en - IN')); // GIVES VALUE ACC TO INDIAN NUMBER SYSTEM i.e 10,00,000


//====maths =======
console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(4.9));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.6));
console.log(Math.min(4 , 3, 6, 8));
console.log(Math.min(4 , 6, 8, 9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1))+ min)