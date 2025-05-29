function greet(name){
    console.log(`Hello ${name}`)
}

// greet("Piyush")
// greet("Hitesh");


let iamGlobal = "I am global";


function modifyGlobal(){
    iamGlobal = "I am modifed from inside";
    let blockedScopedVar = "I am blocked-Scoped"
    console.log(blockedScopedVar);

}
blockedScopedVar = "xyz"

// modifyGlobal();

// console.log(iamGlobal)


let person1 = {
    name: "Hitesh",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

let person2 = {
    name: "Hitesh Sir",
}


// person1.greet.call(person2)


// console.log(person1.greet())
// person1.greet()

