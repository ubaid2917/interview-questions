# JavaScript Questions 



## Array Questions 

### Question no 1
-  Make a function which take array as argument and reverse the array
  
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
#

### Question no 2
-  Make a function which take array as argument and find the min and max number
  
  ### input 
  ``` 
   [-1,10,20,30,40,50,60,70,80]
   
  ```

  ### outpt 
  ``` 
  {min: -1, max: 80}
   
  ```

#### Solution (with builitin method)
```javascript
function minAndMax(arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr); 

   return {
    min, 
    max
   }
 
}
console.log(minAndMax([-1,10,20,30,40,50,60,70,80]))
```

#### Solution (without builitin method)
```javascript

function minAndMax(arr){
  let min = arr[0];
  let max = arr[0]; 
   
   for(let i  =0; i<arr.length; i++){
     if(min > arr[i]){
       min = arr[i]
     } 
     
     if(max < arr[i]){
       max = arr[i]
     }
   }
  return {
    min, max
  }
} 
console.log(minAndMax([-1,10,20,30,40,50,60,70,80]))
```
#