# JavaScript — Closure

## Question no 1
- What is a closure in JavaScript?

#### Answer
- A closure is a function that retains access to variables from its lexical scope even after the outer function has returned.

#### Example
```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```