# JavaScript Questions

## Array Questions

### Question no 1

- Make a function which take array as argument and reverse the array

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
function reverseArr(arr) {
  let res = arr.reverse(...arr);
  return res;
}
console.log(reverseArr([10, 20, 30, 40, 50, 60, 70, 80]));
```

#### Solution (without builitin method)

```javascript
function reverseArr(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}
console.log(reverseArr([10, 20, 30, 40, 50, 60, 70, 80]));
```

#

### Question no 2

- Make a function which take array as argument and find the min and max number

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
function minAndMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return {
    min,
    max,
  };
}
console.log(minAndMax([-1, 10, 20, 30, 40, 50, 60, 70, 80]));
```

#### Solution (without builitin method)

```javascript
function minAndMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return {
    min,
    max,
  };
}
console.log(minAndMax([-1, 10, 20, 30, 40, 50, 60, 70, 80]));
```

#

#

### Question no 3

- Make a function which take array as argument and grouped same element into new array

### input

```
 [1,2,3,1,2,3,4,5,6,7]

```

### outpt

```
[
[ 1, 1 ], [ 2, 2 ],
[ 3, 3 ], [ 4 ],
[ 5 ],    [ 6 ],
[ 7 ]
]

```

#### Solution (with builitin method)

```javascript
function groupedSameItem(arr){
  let res = {}; 
  
  for(let v of arr){
    res[v] = res[v] ? [...res[v], v] : [v]
  } 
  const grouped = Object.values(res); 
  return grouped
}
console.log(groupedSameItem([1,2,3,1,2,3,4,5,6,7]))
```
#

#### Solution (without builitin method)

```javascript
function groupedSameItem(arr){
  let res = {}; 
  
  for(let v of arr){
    res[v] = res[v] ? [...res[v], v] : [v]
  } 
  let grouped = []; 

   for(let key in res){
    grouped[grouped.length] = res[key]
   }
   return grouped
}
console.log(groupedSameItem([1,2,3,1,2,3,4,5,6,7]))
```
#

### Question no 4

- Make a function which take array as argument and remove falsy values from array

### input

```
 [0,1,false,2,"",3,undefined]

```

### outpt

```
[ 1, 2, 3 ]
```

#### Solution (with builitin method)

```javascript
function removeFalsy(arr){
   return arr.filter(Boolean)
}
console.log(removeFalsy([0,1,false,2,"",3,undefined]))

// [ 1, 2, 3 ]
```
#

#### Solution (without builitin method)

```javascript
function removeFalsy(arr){
   let result = []; 

   for(let i = 0; i<arr.length; i++){
    if(arr[i]){
      result[result.length] = arr[i]
    }
   } 
   return result
}
console.log(removeFalsy([0,1,false,2,"",3,undefined]))

// [ 1, 2, 3 ]
```
#

### Question no 5

- Make a function which take N number and make it febinochi series

#### Solution
```javascript
function febinochiSeries(num){
   let n1 = 0; 
   let n2 = 1; 

   let nextNum; 

   for(let i = 0; i<num; i++){{
    console.log(n1); 

    nextNum = n1 + n2; 
    n1 = n2; 
    n2 = nextNum;
   }}
}
console.log(febinochiSeries(5))

// [ 0 1 1 2 3 5 ]
```
#

### Question no 6

- Write a function to move all the zeros to the end.  

### input

```
 [1,0,0,2,0,3,1,6,7]

```

### outpt

```
[ 1, 2, 3, 1, 6, 7, 0, 0,0] 
```
#### Solution
```javascript
function moveZero(arr){
  let zeroNums = []; 
  let nonZeroNums = []; 
   
   for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      nonZeroNums.push(arr[i])
    }else{
      zeroNums.push(arr[i])
    }
   } 

   return [...nonZeroNums, ...zeroNums]
}
console.log(moveZero([1,0,0,2,0,3,1,,6,7]))

// [ 1, 2, 3, 1, 6, 7, 0, 0,0]

```
#

### Question no 7

- Write a function take array as an argument and remove duplicate item.  

### input

```
 [1,0,0,2,0,3,1,6,7]

```
### output

```
[ 1,0,2,3,6,7] 
```
#### Solution (with builtin method)

```javascript
function removeDuplicate(arr){
  let unique = [...new Set(arr)]; 
  return unique
}
console.log(removeDuplicate([1,0,0,2,0,3,1,6,7]))

// [ 1, 0, 2, 3, 6, 7 ]
```


#### Solution (without builtin method)
```javascript
function removeDuplicate(arr){
   let unique = []; 
   let isSeen = {};

   for(let i = 0; i<arr.length; i++){
     if(!isSeen[arr[i]]){
       unique.push(arr[i])
       isSeen[arr[i]] = true
     }
   } 
   return unique
}
console.log(removeDuplicate([1,0,0,2,0,3,1,6,7]))

// [ 1, 0, 2, 3, 6, 7 ]

```
#

### Question no 8

- Write a function and count occurance of each element in array.  

### input

```
 [1,0,0,2,0,3,1,6,7]
```
### output

```
[ 1,0,2,3,6,7] 
```

#### Solution 
```javascript
function countOccurance(arr){
  let isSeen = {};

  for(let i = 0; i<arr.length; i++){
    if(isSeen[arr[i]]){
      isSeen[arr[i]]++
    }else{
      isSeen[arr[i]] = 1
    }
  } 
  return isSeen
}
console.log(countOccurance([1,0,0,2,1,7]))

// { '0': 2, '1': 2, '2': 1, '7': 1 }
```
#
### Question no 9

- Write a function and count duplicate item in array 

### input

```
 [1,0,0,2,0,3,1,6,7]
```
### output

```
[ 1,0,2,3,6,7] 
```

#### Solution 
```javascript
function countDuplicate(arr){

  let isSeen = {};
  for(let i = 0; i<arr.length; i++){
    if(isSeen[arr[i]]){
      isSeen[arr[i]]++
    }else{
      isSeen[arr[i]] = 1
    }
  } 
    
   let duplicates = {}; 
   for(let key in isSeen){
     if(isSeen[key] > 1){
       duplicates[key] = isSeen[key]
     }
   }
   return duplicates
}
console.log(countDuplicate([1,0,0,2,1,7]))

// { '0': 2, '1': 2 }
```
#

### Question no 10

- You have an array and check if the data type of all element is same or not

### input

```
let arr = [1,2,3,10,'Hello']
```

#### Solution (with builtin method)
```javascript

let arr = [1, 2, 3, 10, 'abc'];
const allSameType = arr.every(item => typeof(item) == typeof arr[0]) 
console.log(allSameType) // false

```

#### Solution (without builtin method)
```javascript

function allSameType(arr) {
  if(arr.length === 0) return true;
  let type = typeof arr[0];
  
  for(let i = 1; i < arr.length; i++) {
    if(typeof arr[i] !== type) return false;
  }
  return true;
}

console.log(allSameType([1, 2, 3, 10, 10])) // true
console.log(allSameType([1, 2, 3, 10, 'hello'])) // false
```
#

### Question no 11

- Find the union of the array 


#### Solution (with builtin method)
```javascript
function union(a, b){
  return [... new Set([...a, ...b])]; 
}
 console.log(union([1,2,3], [1,3,4,5]))
// [ 1, 2, 3, 4, 5 ]
```

#

### Question no 12

- You have a below object and store the keys in seprate array 

### input

```
let obj = {
  name: "ubaid",
  email: "ubaid@gmail.com",
  age: 23,
  education: "BSCS"
} 
```
### output

```
['name', 'email', 'age', 'education']
```


#### Solution (with builtin method)
```javascript
 let keys = Object.keys(obj)
```

#### Solution (withput builtin method)
```javascript
 let keys = [];

 for(let k in obj){
  keys.push(k)
 }
```

#### Solution 2 (withput builtin method)
```javascript
 let keys = [];
 let index = 0; 

 for(let k in obj){
  key[index] = k
  index++
 }
```

#