import fetch from 'node-fetch'
console.log('hello world')

const fetchAPI = async()=>{
   const data = await fetch('https://api.wazirx.com/api/v2/tickers');
   const result = await data.json();

   let newObj = {
   }
   let keys = Object.keys(result)
    for(var i=0; i<2; i++){
        let key = JSON.parse(JSON.stringify(keys[i]))
        let val = JSON.parse(JSON.stringify(result[keys[i]]))
        newObj[key] = val
    }
    console.log(newObj)
}

fetchAPI()