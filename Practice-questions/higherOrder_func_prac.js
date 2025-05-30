let count = 0;


function fun(){
    console.log("Hello I am fun Func!!")
    count++;
    // console.log(count)
};

function fun2(anotherFunc){
    anotherFunc(); // 1st call
    anotherFunc(); // 2nd call
}

// fun2(fun)
// console.log(count)

function greet() {
    console.log("Hi my name is bot! nice to meet you");
    fun()
};

// greet()
// console.log(count)


const nestingFunc = () => {
    console.log("I am First layer");
    (() => {
        console.log('I am from nest..');
        console.log(this)
    })()
}

// nestingFunc()

// Higher order functions with return

function oddOrEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0))
        }
    }else if(request == "even"){
        return function(n){
            console.log(n % 2 == 0)
        }
    }else{
        console.log("Wroge request")
    }
}


let req = "odd";

let oddFunc = oddOrEvenTest(req);

// oddFunc(9)

req = "even";

let evenFunc = oddOrEvenTest(req);


evenFunc(5)
evenFunc(4)
evenFunc(6)