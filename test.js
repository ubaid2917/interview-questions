let obj = {
  name: "ubaid",
  email: "ubaid@gmail.com",
  age: 23,
  education: "BSCS"
} 

// let keys = Object.keys(obj); 

let keys  = []; 
let index = 0; 

for(let k in obj){
    keys.push(k);
}
console.log(keys)  


// values 
// let values = Object.values(obj); 
// console.log(values)  

 let values = [] 
 for(let v in obj){
  values.push(obj[v])
 }
console.log('values 2', values)