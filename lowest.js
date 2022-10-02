function minInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const heights = [100, 200,60, 500,300,30];
const lowest = minInArray(heights);
console.log('smallest persion', lowest);