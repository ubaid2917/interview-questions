# JavaScript Questions

## String Questions

---

### Question 1 — Reverse a String

> Make a function which takes a string as argument and reverses it without using built-in methods.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
"ubaid"
```

**Output**
```
"diabu"
```

**Solution (without built-in method)**
```javascript
function reverseStr(str) {
  let rev = '';

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseStr('ubaid')); // diabu
```

---

### Question 2 — Check if String is Palindrome

> Make a function which checks if a string is a palindrome or not. It should be case-insensitive and ignore spaces.

**Difficulty:** Medium | **Time:** O(n) | **Space:** O(n)

**Input**
```
1. "madam"    ==>  true
2. "ubaid"    ==>  false
3. "Race Car" ==>  true
```

> **Palindrome:** A word or sentence that reads the same forwards and backwards.

**Solution (with built-in method)**
```javascript
function palindromeStr(str) {
  str = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

console.log(palindromeStr('ubaid'));    // false
console.log(palindromeStr('madam'));    // true
console.log(palindromeStr('Madam'));    // true
console.log(palindromeStr('Race Car')); // true
```

**Solution (without built-in method)**
```javascript
function palindrome(str) {
  let cleaned = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // Skip spaces
    if (code === 32) continue;

    // Convert uppercase to lowercase
    if (code >= 65 && code <= 90) code += 32;

    cleaned += String.fromCharCode(code);
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(palindrome('ubaid'));    // false
console.log(palindrome('madam'));    // true
console.log(palindrome('Madam'));    // true
console.log(palindrome('Race Car')); // true
```

**Explanation**
1. Clean the string — remove spaces and convert to lowercase.
2. Use two pointers: `left` starting from beginning, `right` from end.
3. Compare characters at both pointers.
4. If any characters don't match → return `false`.
5. If all characters match → return `true`.

---

### Question 3 — Count Vowels in a String

> Make a function which takes a string as argument and counts the total vowels in it.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(1)

**Input**
```
1. "ubaid"    ==>  3
2. "pakistan" ==>  3
```

**Solution (with built-in method)**
```javascript
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) counter++;
  }
  return counter;
}

console.log(countVowels('ubaid'));    // 3
console.log(countVowels('pakistan')); // 3
```

**Solution (without built-in method)**
```javascript
function countVowels(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Manually convert to lowercase
    if (char >= 'A' && char <= 'Z') {
      char = String.fromCharCode(char.charCodeAt(0) + 32);
    }

    // Manually check vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels('ubaid'));      // 3
console.log(countVowels('ubaidnaeem')); // 6
```

**Explanation**
1. Loop through each character.
2. Manually convert uppercase to lowercase using char codes.
3. Check if the character is a vowel — if yes, increment counter.
4. Return the final count.

---

### Question 4 — Find First Non-Repeating Character

> Make a function which takes a string as argument and finds the first character that does not repeat.

**Difficulty:** Medium | **Time:** O(n) | **Space:** O(n)

**Input**
```
1. "aabbcdde" ==>  "c"
2. "pakistan" ==>  "p"
```

**Solution**
```javascript
function nonRepeatingChar(str) {
  let isSeen = {};

  // Step 1: Count each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    isSeen[char] = isSeen[char] ? isSeen[char] + 1 : 1;
  }

  // Step 2: Find first character with count === 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (isSeen[char] === 1) return char;
  }

  return null;
}

console.log(nonRepeatingChar('aabbcdde')); // c
console.log(nonRepeatingChar('pakistan')); // p
```

**Explanation**
1. First loop — count how many times each character appears.
2. Second loop — find the first character whose count is exactly 1.

---

### Question 5 — Count Occurrence of Each Character

> Make a function which takes a string as argument and counts how many times each character appears.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
"aabbcdde" ==>  { a: 2, b: 2, c: 1, d: 2, e: 1 }
```

**Solution**
```javascript
function countOccurrence(str) {
  let isSeen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    isSeen[char] = isSeen[char] ? isSeen[char] + 1 : 1;
  }

  return isSeen;
}

console.log(countOccurrence('aabbcdde'));
// { a: 2, b: 2, c: 1, d: 2, e: 1 }
```

---

### Question 6 — Check if Two Strings are Anagram

> Make a function which checks if two strings are anagrams of each other. Anagram means both strings have the same characters in any order.

**Difficulty:** Medium | **Time:** O(n log n) | **Space:** O(n)

**Input**
```
1. "silent", "listen"   ==>  true
2. "allergy", "allergyy" ==>  false
```

> **Anagram:** Two words that contain the exact same letters, just in a different order.

**Solution (with built-in method)**
```javascript
function isAnagram(str1, str2) {
  let sortedOne = str1.split('').sort().join('');
  let sortedTwo = str2.split('').sort().join('');
  return sortedOne === sortedTwo;
}

console.log(isAnagram('silent', 'listen'));    // true
console.log(isAnagram('allergy', 'allergyy')); // false
```

---

### Question 7 — Capitalize First Letter of Each Word

> Make a function which takes a string as argument and capitalizes the first letter of every word.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
"hello ubaid naeem" ==>  "Hello Ubaid Naeem"
```

**Solution (with built-in method)**
```javascript
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords('hello this is ubaid naeem'));
// Hello This Is Ubaid Naeem
```

**Solution (without built-in method)**
```javascript
function capitalizeWords(str) {
  let res = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (capitalizeNext && char !== ' ') {
      res += char.toUpperCase();
      capitalizeNext = false;
    } else {
      res += char;
    }

    if (char === ' ') capitalizeNext = true;
  }
  return res;
}
console.log(capitalizeWords('hi this is ubaid naeem'));
// Hi This Is Ubaid Naeem
```

**Explanation**
1. Create an empty string `res` and a flag `capitalizeNext = true`.
2. Loop through each character.
3. If `capitalizeNext` is true, convert character to uppercase and set flag to `false`.
4. Otherwise, add the character as it is.
5. When a space is found, set `capitalizeNext = true` so the next letter gets capitalized.
6. Return the final result.

---

### Question 8 — Find the Longest Word in a String

> Make a function which takes a string as argument and returns the longest word in it.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(n)

**Input**
```
"hi i am learning javascript" ==>  "javascript"
```

**Solution (with built-in method)**
```javascript
function longestWord(str) {
  let words = str.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(longestWord('hi i am learning javascript'));
// javascript
```

**Solution (without built-in method)**
```javascript
function longestWord(str) {
  let longest = '';
  let current = '';

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== ' ') {
      current += ch;
    } else {
      if (current.length > longest.length) longest = current;
      current = '';
    }
  }

  // Check last word (it may not end with a space)
  if (current.length > longest.length) longest = current;

  return longest;
}
console.log(longestWord('i am learning javascript'));
// javascript
```

**Explanation**
1. `longest` stores the longest word found so far.
2. `current` builds the word character by character.
3. When a space is found, the word has ended — compare with `longest` and reset `current`.
4. After the loop, check the last word (it won't end with a space).
5. Return `longest`.

---

### Question 9 — Count Total Words in a String

> Make a function which takes a string as argument and counts the total number of words.

**Difficulty:** Easy | **Time:** O(n) | **Space:** O(1)

**Input**
```
"hi i am learning javascript" ==>  5
```

**Solution (with built-in method)**
```javascript
function countWords(str) {
  return str.split(' ').length;
}
console.log(countWords('hi i am learning javascript')); // 5
```

**Solution (without built-in method)**
```javascript
function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== ' ' && !inWord) {
      count++;
      inWord = true;
    } else if (ch === ' ') {
      inWord = false;
    }
  }
  return count;
}
console.log(countWords('i am learning js')); // 4
```

**Explanation**
1. `count` tracks how many words are found.
2. `inWord` flag tells if we are currently inside a word.
3. If character is not a space and we are not in a word → new word starts → increment count.
4. If character is a space → word has ended, set `inWord = false`.
5. Return final count.

---

*Last updated: April 2026*