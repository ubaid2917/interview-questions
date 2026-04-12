# JavaScript Interview Questions

## Array Questions

---

### Question 1 — Reverse an Array

> Make a function which takes an array as argument and reverses it.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
[10, 20, 30, 40, 50, 60, 70, 80]
```

**Output**
```
[80, 70, 60, 50, 40, 30, 20, 10]
```

**Solution (with built-in method)**
```javascript
function reverseArr(arr) {
  return arr.reverse();
}
console.log(reverseArr([10, 20, 30, 40, 50, 60, 70, 80]));
// [80, 70, 60, 50, 40, 30, 20, 10]
```

**Solution (without built-in method)**
```javascript
function reverseArr(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}
console.log(reverseArr([10, 20, 30, 40, 50, 60, 70, 80]));
// [80, 70, 60, 50, 40, 30, 20, 10]
```

> **Edge case:** Empty array `[]` returns `[]` — both solutions handle this correctly.

---

### Question 2 — Find Min and Max

> Make a function which takes an array as argument and finds the minimum and maximum number.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(1)

**Input**
```
[-1, 10, 20, 30, 40, 50, 60, 70, 80]
```

**Output**
```
{ min: -1, max: 80 }
```

**Solution (with built-in method)**
```javascript
function minAndMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
console.log(minAndMax([-1, 10, 20, 30, 40, 50, 60, 70, 80]));
// { min: -1, max: 80 }
```

**Solution (without built-in method)**
```javascript
function minAndMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return { min, max };
}
console.log(minAndMax([-1, 10, 20, 30, 40, 50, 60, 70, 80]));
// { min: -1, max: 80 }
```

---

### Question 3 — Group Same Elements

> Make a function which takes an array as argument and groups same elements into sub-arrays.

**Difficulty:** Medium | **Time:** O(n) | **Space:** O(n)

**Input**
```
[1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
```

**Output**
```
[[1, 1], [2, 2], [3, 3], [4], [5], [6], [7]]
```

**Solution (with built-in method)**
```javascript
function groupSameItems(arr) {
  let res = {};
  for (let v of arr) {
    res[v] = res[v] ? [...res[v], v] : [v];
  }
  return Object.values(res);
}
console.log(groupSameItems([1, 2, 3, 1, 2, 3, 4, 5, 6, 7]));
// [[1, 1], [2, 2], [3, 3], [4], [5], [6], [7]]
```

**Solution (without built-in method)**
```javascript
function groupSameItems(arr) {
  let res = {};
  for (let v of arr) {
    res[v] = res[v] ? [...res[v], v] : [v];
  }
  let grouped = [];
  for (let key in res) {
    grouped[grouped.length] = res[key];
  }
  return grouped;
}
console.log(groupSameItems([1, 2, 3, 1, 2, 3, 4, 5, 6, 7]));
// [[1, 1], [2, 2], [3, 3], [4], [5], [6], [7]]
```

---

### Question 4 — Remove Falsy Values

> Make a function which takes an array as argument and removes all falsy values.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
[0, 1, false, 2, "", 3, undefined]
```

**Output**
```
[1, 2, 3]
```

> **Falsy values in JavaScript:** `false`, `0`, `""`, `null`, `undefined`, `NaN`

**Solution (with built-in method)**
```javascript
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsy([0, 1, false, 2, "", 3, undefined]));
// [1, 2, 3]
```

**Solution (without built-in method)**
```javascript
function removeFalsy(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) result[result.length] = arr[i];
  }
  return result;
}
console.log(removeFalsy([0, 1, false, 2, "", 3, undefined]));
// [1, 2, 3]
```

---

### Question 5 — Fibonacci Series

> Make a function which takes N as argument and prints the Fibonacci series up to N terms.

**Difficulty:** Medium | **Time:** O(n) | **Space:** O(1)

**Solution**
```javascript
function fibonacciSeries(num) {
  let n1 = 0;
  let n2 = 1;
  let nextNum;

  for (let i = 0; i < num; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
}
fibonacciSeries(5);
// 0
// 1
// 1
// 2
// 3
```

---

### Question 6 — Move Zeros to End

> Write a function to move all zeros to the end of the array while maintaining the order of other elements.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
[1, 0, 0, 2, 0, 3, 1, 6, 7]
```

**Output**
```
[1, 2, 3, 1, 6, 7, 0, 0, 0]
```

**Solution**
```javascript
function moveZero(arr) {
  let zeroNums = [];
  let nonZeroNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeroNums.push(arr[i]);
    } else {
      zeroNums.push(arr[i]);
    }
  }
  return [...nonZeroNums, ...zeroNums];
}
console.log(moveZero([1, 0, 0, 2, 0, 3, 1, 6, 7]));
// [1, 2, 3, 1, 6, 7, 0, 0, 0]
```

> **Note:** Using `arr[i] !== 0` instead of `arr[i] > 0` ensures negative numbers are handled correctly.

---

### Question 7 — Remove Duplicate Items

> Write a function that takes an array as argument and removes duplicate items.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
[1, 0, 0, 2, 0, 3, 1, 6, 7]
```

**Output**
```
[1, 0, 2, 3, 6, 7]
```

**Solution (with built-in method)**
```javascript
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 0, 0, 2, 0, 3, 1, 6, 7]));
// [1, 0, 2, 3, 6, 7]
```

**Solution (without built-in method)**
```javascript
function removeDuplicate(arr) {
  let unique = [];
  let isSeen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!isSeen[arr[i]]) {
      unique.push(arr[i]);
      isSeen[arr[i]] = true;
    }
  }
  return unique;
}
console.log(removeDuplicate([1, 0, 0, 2, 0, 3, 1, 6, 7]));
// [1, 0, 2, 3, 6, 7]
```

---

### Question 8 — Count Occurrence of Each Element

> Write a function that counts how many times each element appears in an array.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
[1, 0, 0, 2, 1, 7]
```

**Output**
```
{ '0': 2, '1': 2, '2': 1, '7': 1 }
```

**Solution**
```javascript
function countOccurrence(arr) {
  let isSeen = {};
  for (let i = 0; i < arr.length; i++) {
    if (isSeen[arr[i]]) {
      isSeen[arr[i]]++;
    } else {
      isSeen[arr[i]] = 1;
    }
  }
  return isSeen;
}
console.log(countOccurrence([1, 0, 0, 2, 1, 7]));
// { '0': 2, '1': 2, '2': 1, '7': 1 }
```

---

### Question 9 — Count Duplicate Items

> Write a function that counts only the elements which appear more than once.

**Difficulty:** Medium | **Time:** O(n) | **Space:** O(n)

**Input**
```
[1, 2, 3, 4, 5, 4, 3]
```

**Output**
```
{ '3': 2, '4': 2 }
```

**Solution**
```javascript
function countDuplicate(arr) {
  let isSeen = {};
  for (let i = 0; i < arr.length; i++) {
    isSeen[arr[i]] = isSeen[arr[i]] ? isSeen[arr[i]] + 1 : 1;
  }

  let duplicates = {};
  for (let key in isSeen) {
    if (isSeen[key] > 1) duplicates[key] = isSeen[key];
  }
  return duplicates;
}
console.log(countDuplicate([1, 2, 3, 4, 5, 4, 3]));
// { '3': 2, '4': 2 }
```

---

### Question 10 — Check if All Elements Are Same Type

> You have an array — check if the data type of all elements is the same or not.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(1)

**Input**
```javascript
let arr = [1, 2, 3, 10, 'Hello']
```

**Solution (with built-in method)**
```javascript
let arr = [1, 2, 3, 10, 'abc'];
const allSameType = arr.every(item => typeof item === typeof arr[0]);
console.log(allSameType); // false
```

**Solution (without built-in method)**
```javascript
function allSameType(arr) {
  if (arr.length === 0) return true;
  let type = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== type) return false;
  }
  return true;
}

console.log(allSameType([1, 2, 3, 10, 10]));    // true
console.log(allSameType([1, 2, 3, 10, 'hello'])); // false
```

---

### Question 11 — Find Union of Two Arrays

> Find the union of two arrays (all unique elements from both).

**Difficulty:** Easy | **Time:** O(n + m) | **Space:** O(n + m)

**Solution (with built-in method)**
```javascript
function union(a, b) {
  return [...new Set([...a, ...b])];
}
console.log(union([1, 2, 3], [1, 3, 4, 5]));
// [1, 2, 3, 4, 5]
```

---

## Object Questions

---

### Question 12 — Store Object Keys in a Separate Array

> You have an object — store all its keys in a separate array.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```javascript
let obj = {
  name: "ubaid",
  email: "ubaid@gmail.com",
  age: 23,
  education: "BSCS"
}
```

**Output**
```
['name', 'email', 'age', 'education']
```

**Solution (with built-in method)**
```javascript
let keys = Object.keys(obj);
console.log(keys);
// ['name', 'email', 'age', 'education']
```

**Solution (without built-in method)**
```javascript
let keys = [];
for (let k in obj) {
  keys.push(k);
}
console.log(keys);
// ['name', 'email', 'age', 'education']
```

**Solution 2 (without built-in method)**
```javascript
let keys = [];
let index = 0;
for (let k in obj) {
  keys[index] = k;
  index++;
}
console.log(keys);
// ['name', 'email', 'age', 'education']
```


### Question 13 — Store Object Keys in a Separate Array

> Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.


**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Example**
```javascript
   nums = [1, 2, 3, 3]  // true
   nums = [1, 2, 3, 4]  // false
```

**Solution **
```javascript
   function hasDuplicate(arr){
  let isSeen = {}; 
  
  for(let i = 0; i<arr.length; i++){
    if(isSeen[arr[i]]){
      isSeen[arr[i]] ++
    }else{
      isSeen[arr[i]] = 1
    }
  }  
  
  for(let key in isSeen){
    if(isSeen[key] > 1){
      return true
    }
  }
  return false
}
console.log(hasDuplicate([1,2,2,3,4]))  // true
console.log(hasDuplicate([1,0,2,3,4]))  // false
 
```



---

*Last updated: April 2026*