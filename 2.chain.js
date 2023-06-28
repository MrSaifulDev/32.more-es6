
const users = [ { id: 1, name: 'abul', job: 'doctor'}]


// console.log(users)


const user = {
    id: 5001, 
    name: 'thomas alba edision', 
    adress:{
        street:{
            first: '36/a kochukhet lane',
            second: 'third floor',
            third: 'right side',
        }
    }
}

const userFlorr = user?.adress.street.second;
console.log(userFlorr)

