// const result = Math.pow(2, 3);
// console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('you can be friends');
}
else{
    console.log('you can be not friends');
}

const number = 2.53968;
const fullNumber = Math.round(number);
console.log(fullNumber);


const random = Math.round(Math.random()*100);
console.log(random);

let first = 5;
let second = 7;
console.log(first, second);
const temp =first;
first = second;
second = temp;
console.log(first, second);

const jim = 33;
const dela = 45;
const mela = 40;
if(jim > dela && jim >mela){
    console.log('jim get the cake');
}
else if(dela > mela && dela >jim){
    console.log('dela get the cake');
}
else{
    console.log('mela get the cake');
}
const numbers =[12, 54, 76]

const result = Math.max(numbers);
// console.log(result);