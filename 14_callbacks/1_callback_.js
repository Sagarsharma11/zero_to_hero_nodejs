function replacestr(str,done){
    process.nextTick(()=>{
        done(str.replace(/[a-zA-Z]/g,'x'))
    })
}

replacestr('hello world',(hidden)=>{
    console.log(hidden)
})

console.log(' end ')