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