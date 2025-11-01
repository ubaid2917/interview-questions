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
#


### Question no 7
-   Capitalize the first letter of each word
  
  ### input 
  ``` 
   1. "hello ubaid naeem"  ==>  Hello Ubaid Naeem
   
  ```

#### Solution (with builitin method)
```javascript

 function capatilizedChar(str){
    return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  }
  console.log(capatilizedChar('hello this is ubaid naeem'))
// Hello This Is Ubaid Naeem
```

#### Solution (without builitin method)
```javascript
 function capitalizedStr(str){
  
  let res = ''; 
  let capitalizedNext = true; 
  
  for(let i = 0; i<str.length; i++){
    let char = str[i]; 
    
    if(capitalizedNext && char !== ' '){
      res += char.toUpperCase(); 
      capitalizedNext = false
    }else{
      res += char;
    } 
      
    if(char === " "){
      capitalizedNext = true
    }
  }
  return res
}
console.log(capitalizedStr('hi this is ubaid naeem')) 
// Hi This Is Ubaid Naeem

```
#### Explanation
1. Create an empty string result 
2. and a flag capitalizeNext = true.
3. Loop through each character in the input string.
4. If capitalizeNext is true, convert the current character to uppercase and set the flag to false.
5. Otherwise, add the character as it is to result.
6. If the current character is a space, set capitalizeNext back to true so the next letter will be capitalized.
7. After the loop finishes, return the final result.
#

### Question no 8
-  Make a function which take string as argument and find the longest word in string
  
  ### input 
  ``` 
   1. "hi i am learning javascript"  ==>  javascript
   
  ```

#### Solution (with builitin method)
```javascript
   function longestString(str){
    let words = str.split(' ');
    let longest = ''; 

    for(let word of words){
      if(word.length > longest.length){
        longest = word;
      }
    } 

    return longest;
   } 
   console.log(longestString('hi i am learning javascript')) 

   // javascript
```

#### Solution (without builitin method)
```javascript
  function longestStr(str){
    let longest = ''; 
    let current = ''; 
    
    for(let i = 0; i<str.length; i++){
      let ch = str[i]; 
      
      if(ch !== " "){
         current += ch
      }else {
         if(current.length > longest.length){
           longest = current
         }
         
         current = ""
      }
    }
    
    if(current.length > longest.length){
      longest = current
    }
    return longest
  }
  console.log(longestStr('i am learning javascript'))
// javascript

```
#### Explanation
1. longest stores the longest word found so far.
2. current stores the word that’s currently being built.
3. Loop through each character one by one.
4. If the character is not a space, add it to current.
5. If you find a space, that means the word has ended:
6. Compare current with longest.
      If current is longer, update longest.
      Then clear current to start the next word.
7. After the loop ends, check the last word (because it may not end with a space).
8. Finally, return longest — that’s the longest word in the string.
#