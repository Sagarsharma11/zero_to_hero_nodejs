var delay = (sec) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolve success')
    }, sec*1000)
})

delay(1).then((x)=>console.log(`delay has ended ${x}`))

console.log(' end first tick ')

