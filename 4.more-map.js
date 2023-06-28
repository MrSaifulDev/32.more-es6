const numbers = [12,56,87,44];
const half = numbers.map(x => x/2);
const third = numbers.map(x => x/3);
// console.log(half);

// console.log(third);


const friends = ['tom hanks', 'tom cruise' , 'tom brady', ' tom solaiman'];
const firstLatter = friends.map(friend => friend[0]);
// console.log(firstLatter);

const nameLengths = friends.map(friend => friend.length);

// console.log(nameLengths)


const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:2, name: 'moble', price:80000},
    {id:3, name: 'watch', price:35000},
    {id:4, name: 'table', price:340000},
    {id:5, name: 'i mac', price:120000},
    {id:6, name: 'macbook air', price:1100000}
]


const items = products.map(item => item.name);

console.log(items)