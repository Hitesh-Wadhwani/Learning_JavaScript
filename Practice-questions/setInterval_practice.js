// let id = setInterval( () => {
//     console.log("Hello Hitesh")
// }, 1000 )



// setTimeout( () => {
//     clearInterval(id)
// }, 1000 * 10 )




let dateFunc = function(){
    let date = new Date
    console.log(date.getSeconds())
}

setInterval( dateFunc, 1000 )