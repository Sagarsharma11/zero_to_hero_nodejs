var delay=(sec) => new Promise((resolve,reject)=>{
    if(sec>3){
        reject(new Error(`${sec} is too long`))
    }
    setTimeout(()=>{
        resolve('resolve message')
    },sec*1000)
})

delay(4)
.then((message)=>console.log(`promise has ended ${message}`))
.catch((err)=>console.log(`error: ${err}`))

console.log(' end tick ')