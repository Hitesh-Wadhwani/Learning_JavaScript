let name = "hitesh";
const pi = 3.14;

let number = 42.3 // Number;
let string = 'Hitesh' // String
let isTrue = true // Boolean
let nothing = null // Object
let undefinedVar = undefined // undefined
let symbol = Symbol() // Symbol


let person = {
    name : "Hitesh",
    age : 23,
    isStudent : true
}


let num = '42';

let convertNum = Number(num);
let convoNum = +num

// console.log( convoNum)


let a = 5;
let b = 5;


// console.log(a == b) // True 
// console.log(a != b) // False
// console.log(a > b) // F
// console.log(a < b) // F
// console.log(a >= b) // T


// console.log(Math.min(5, 10));
// console.log(Math.max(5, 10));

// console.log(  Math.floor(Math.random() * 11 ))


let str = 123;
let convertedString = String(str);

// console.log(typeof convertedString)



let firstName = "Hitesh";
let lastName = "Wadhwani";

let fName = firstName + " " + lastName;
// console.log(fName)

let message = "Hello World";

// console.log(message.toUpperCase());
// console.log(message.indexOf('d'))
// console.log(message.slice(8))

let myName = "Hitesh";

let grettings = `Hello ${myName} from chaiCode`
// console.log(grettings)



// ***************** 02 arrays and Objects ***********************



let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Leamon Tea"];
// console.log(chaiTypes[2]);
// console.log(`Total Chai length is ${chaiTypes.length}`)

chaiTypes.push("Herble Tea");

const data = chaiTypes.pop();

// console.log(data)
// console.log(chaiTypes)

let index = chaiTypes.indexOf("Green-Tea");

if(index !== -1){
    chaiTypes.splice(index , 1);
};

// console.log(index)
// console.log(chaiTypes)

chaiTypes.forEach((chai, index) => {
    // console.log(`${index} : ${chai}`)
})

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

// console.log(allChaiTypes)

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
// console.log(newChaiTypes)


let chaiRecipe = {
    teaName : "Masala Chai",
  ingredients : {
    teaLeaves : "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Dallchini", "Ginger"]
  },
  insructions: "Boil water, add tea leaves, milk, sugar and speices",
}

// console.log(chaiRecipe.ingredients.spices[1])


// let updatedTeaRecipe = {
//     ...chaiRecipe,
//     insructions: "Boil Water, add tea leaves, milk, sugar, speices with some love",
// };


// console.log(updatedTeaRecipe.insructions)

let {teaName , insructions } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes



console.log(insructions)
console.log(teaName)
// console.log(secondChai)