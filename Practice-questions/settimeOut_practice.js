// let setTime = setTimeout( ()=> {
//     console.log(`hello i will run after ${setTime._idleTimeout} mili seconds `)
// }, 1000 * 5 )


// console.log(setTime)

function countDown(n){
    for(let i = 0; i <= n; i++){
        setTimeout( ()=> {
            if(n - i == 0 ){
                return
            }
            console.log(n - i)
        }, 1000 * i )
}}

countDown(5)