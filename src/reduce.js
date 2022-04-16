

// const mappedNumbers = myNumbers.map((num) => num + 100)

// console.log(mappedNumbers)

// const filteredNumbers = myNumbers.filter((num) => num < 11)

// console.log(filteredNumbers)

// let sum = 0

// for(let i = 0; i < myNumbers.length; i++){
//     sum += mappedNumbers[i]
// }

// console.log(sum)

const myNumbers = [10,2,3,45,44,3];

const sum = myNumbers.reduce((total, item) => {
    console.log(total, item)
    return total + item
}, 0)

//console.log(sum)



// [{type: 'trigger'}].reduce((state, action) => {
//     switch(action){

//     }
// }, {triggered: false})






