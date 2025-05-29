function prepareChai(type){
    if(type === "Masala Chai"){
        console.log("Adding Spices to the chai");
    }else{
        console.log("Preparing regular chai");
    }
}

// prepareChai("Masala Chai");
// prepareChai("Normal Chai")


function calculateTotal(amount){
    // if(amount > 1000){
    //     return amount * 0.9
    // }
    // return amount;
    return amount > 1000 ? amount * 0.9 : amount
}


// console.log(calculateTotal(2000))
let finalBill = calculateTotal(1200);
// console.log(finalBill)
// console.log(calculateTotal(1300))



function trafficLight(color){
    switch(color){
        case "red":
            console.log('Stop');
            break;
        case "yellow":
            console.log("Slow Down");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Chalan kaat do");
    }
}


// trafficLight('yellow')

function loginUsername(username, password, loginIp){
    if(username == "admin" && (password == "1234" || loginIp == "127")){
        console.log("Login successfull");
    }
    else{
        console.log("Invalid login and password !!")   
    }
}

// loginUsername("admin", "12345", "127")






// *************** Iteration *************


let dataSales = [
    {product: "Laptop", price: 1200},
    {product: "Smartphone", price: 800},
    {product: "Headphone", price: 200},
    {product: "Keyboard", price: 100},
];





let totalSales = dataSales.reduce( (acc, curr) => acc + curr.price , 0 )


// console.log(totalSales)


let inventory = [
    {name: 'Widget A', stock: 30},
    {name: 'Widget B', stock: 120},
    {name: 'Widget C', stock: 45},
    {name: 'Widget D', stock: 70},
]


let totalStockPrice = inventory.filter( (item)=> {
    return item.stock < 50
}) 

// console.log(totalStockPrice)

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 12 },
    { user: "Charlie", activityCount: 333 },
]

let findMaxActiveCount = userActivity.reduce((user, maxUser) => {
    return maxUser.activityCount > user.activityCount ? maxUser : user
})

console.log(findMaxActiveCount)