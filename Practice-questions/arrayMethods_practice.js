let numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach( (num, index) => {
//     console.log(`The index of array is ${index + 1}, and value is ${num}`)
// } )


let myFruits = ["kiwi", "Orange", "apple", "banana"];

let totalPrice = [10, 70, 90];


let total = 0;

totalPrice.forEach( (price, index) => {
    total = total + price
} )

console.log(total)


let userArray = [
    {name : "Suraj", accessGiven: false, isPaid: false},
    {name : "Hitesh", accessGiven: false, isPaid: true},
    {name : "manoj", accessGiven: false, isPaid: true}
]

userArray.forEach( (user) => {
    if(user.isPaid == true){
        user.accessGiven = true
        user.userVerified = true
    }
} )

userArray.forEach((users)=>{
    console.log(users)
})