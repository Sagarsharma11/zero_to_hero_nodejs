function delay(sec,callback){
    setTimeout(callback,sec*1000)
}
console.log(' starting delays ')

delay(2,()=>{
    console.log('two sec')
    delay(1,()=>{
        console.log('three sec')
        delay(1,()=>{
            console.log('four sec')
        })
    })
})