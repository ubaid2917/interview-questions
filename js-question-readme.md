# JavaScript Questions 



## String Questions 

### Question no 1
- Reverse the string without using builtin method 
input is ```ubaid``` and output will be ```diabu```


#### Solution
```javascript
function reverseStr(str){
  let rev = ''; 

  for(let i = str.length -1; i>=0; i--){
    if(str[i] === ' ') continue
    rev += str[i]
  }
  return rev 
}
console.log(reverseStr('ubaid')) // diabu
```
#
 

### Question no 2
-  Check if the string is palindrome or not
  
  ### input 
  ``` 
   1. madam  ==>  true
   2. ubaid ==>   false
  ```

#### Solution (with builitin method)
```javascript
function palindromStr(str){
  str = str.toLowerCase().replace(/[^0-9a-z]/g, '')
  
  const res = str.split('').reverse().join('');
   
   return res === str ? true : false
}
  
console.log(palindromStr('ubaid'))  // false
console.log(palindromStr('madam'))  // true
console.log(palindromStr('Madam'))   // true
console.log(palindromStr('Race Car')) // true
```

#### Solution (without builitin method)
```javascript
function palindromStr(str){
  str =  str.toLowerCase().replace(/[^0-9a-z]/g, '') 
  
  let left = 0;
  let right = str.length - 1; 
  
  while(left < right){
    if(str[left] !== str[right]){
      return false
    }
    return true
  }
  
  left++
  right-- 
  
}
  
console.log(palindromStr('ubaid')) // false
console.log(palindromStr('madam')) // true
console.log(palindromStr('Madam')) // true
console.log(palindromStr('Race Car')) /// true

```

#### Explanation
1. Compare the first and last characters.
2. Move left forward and right backward.
3. If any characters don’t match → return false.
4. If all characters match → return true.
#

### Question no 3
-  Count Vowels in the string
  
  ### input 
  ``` 
   1. ubaid  ==>  3
   2. pakistan ==>  3 
  ```

#### Solution (with builitin method)
```javascript
function countVowles(str){
  let vowels = ['a','e','i','o','u']
  let counter = 0; 

  for(let i = 0; i<str.length; i++){
    let char = str[i].toLowerCase(); 

    if(vowels.includes(char)){
      counter++
    }
  }
  return counter;
}
  
console.log(countVowles('ubaid'))  // 3
console.log(palindromStr('pakistan'))  // 3

```

#### Solution (without builitin method)
```javascript
function countVowles(str){
 
  let counter = 0; 

  for(let i = 0; i<str.length; i++){
    let char = str[i]; 
    
    //manually convert into toLowerCase

    if(char >= 'A' && char <= 'Z'){
      char = String.fromCharCode(char.charCodeAt(0) + 32) 
    }; 
    
    // manuall vowel check 
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      counter ++
    }
  }
  return counter;
}
  
console.log(countVowles('ubaidnaeem')) // 6
console.log(countVowles('ubaid')) // 3
```

#### Explanation
1. First Manually Convert all character to lowercase.
2. Manually Check Vowels
3. If any character exist then increment counter
#

### Question no 4
-  Make a function which take string as argument and find the first non repeating character in string
  
  ### input 
  ``` 
   1. aabbcdde  ==>  c
   2. pakistan ==>  p 
  ```

#### Solution (with builitin method)
```javascript
function nonRepeatingChar(str){
 
  let res = ''; 
  let isSeen = {};
  
  // Count each character
    for(let i = 0; i<str.length; i++){
      let char = str[i].toLowerCase(); 
      if(isSeen[char]){
        isSeen[char] ++
      }else{
        isSeen[char] = 1
      }
    }  
    
    // Find first non-repeating character
    for(let i = 0; i<str.length; i++){
      let char = str[i].toLowerCase();
      if(isSeen[char] === 1){
        res = char
        break
      }
    }
   
  return res;
}
  
console.log(nonRepeatingChar('aabbcdde'))  // c
```

#### Explanation
1. First Manually Count all character in first loop.
2. Manually find the first non repeating character


#

### Question no 5
-  Make a function which take string as argument and count each occurance of charcter
  
  ### input 
  ``` 
   1. aabbcdde  ==>  { a: 2, b: 2, c: 1, d: 2, e: 1 }
   
  ```

#### Solution (with builitin method)
```javascript
function countOccurance(str){
 
  let isSeen = {};
  
  // Count each character
   for(let i = 0; i<str.length; i++){
     let char = str[i].toLowerCase(); 
      
      if(isSeen[char]){
        isSeen[char] ++
      }else{
        isSeen[char] = 1;
      }
   }
   
  return isSeen;
}
  
console.log(countOccurance('aabbcdde')) //  { a: 2, b: 2, c: 1, d: 2, e: 1 }

```
#


### Question no 6
-  Make a function which take string as argument and check is string is anagram or not
  
  ### input 
  ``` 
   1. silent, listen  ==>  true
   
  ```

#### Solution (with builitin method)
```javascript
function isAnagramString(str1, str2){
 
  let sortedOne = str1.split('').sort().join('');
  let sortedTwo = str2.split('').sort().join('');
  
    if(sortedOne === sortedTwo){
      return true
    }else{
      return false
    }
   
}
  
console.log(isAnagramString('silent', 'listen')) //  true
console.log(isAnagramString('allergy', 'allergyy')) //  false
```