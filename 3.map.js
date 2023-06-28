 const numbers = [2,4,5,6,7,8,3,23];

 function getDoubles(numbers){
    const output = [] ; 
    for(const number of numbers){
        const doubled = doubledIt(number);
        output.push(doubled)
    }
    return output ; 

 }

/* function doubledIt(number){
    return number * 2 ; 
}
 */

const doubledIt = number => number * 2 ; 
const makeDouble = numbers.map(doubledIt);

const makeDouble2 = numbers.map(x => x * 2 );
const fiveTimes = [1,2,4,5,6];
const make5Times = fiveTimes.map(x => x * 5 );
console.log(make5Times)

/* 
purpose:
1.get an array 
2.for every elements of the array do something 
3.store the result in an array
4.return the result array
*/

console.log(getDoubles(numbers))
console.log(makeDouble2)
