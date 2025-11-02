### Question no 1
-  Make a function which take array as argument and reverse the string
  
  ### input 
  ``` 
   [10,20,30,40,50,60,70,80]  
   
  ```

  ### outpt 
  ``` 
  [ 80, 70, 60, 50, 40, 30, 20, 10]
   
  ```

#### Solution (with builitin method)
```javascript
function reverseArr(arr){
  let res = arr.reverse(...arr); 
   return res
 
}
console.log(reverseArr([10,20,30,40,50,60,70,80]))
```

#### Solution (without builitin method)
```javascript
function reverseArr(arr){
  let res = []; 
  
  for(let i = arr.length -1; i>= 0; i--){
    res.push(arr[i]);
  }
  return res;
}
console.log(reverseArr([10,20,30,40,50,60,70,80]))
```
