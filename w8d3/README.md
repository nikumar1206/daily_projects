# W8D3

**Today's Learning Goals**

# Reversi: 
- Be able to reason about object-oriented Javascript
- Know the different ways that objects can interact with each other in JavaScript
- Be able to write modular code
- Know how to manually test your code as you write it
- Be able to write a run-loop in JavaScript
- Know how to use duck typing to allow for both a HumanPlayer and a ComputerPlayer

# Discussion 

- Take any questions about the Reversi project. 
- Point out how context matters based off of how you invoke the function. 
    - Focus mainly on context in regards to a callback. 
    - We have a lecture on this later so no need to cover every way to invoke the function.
```js
Array.prototype.forEach = function(cb) {
    for (let i = 0; i < this.length; i++){
        cb(this[i])
    }
}

cb = function(ele) {
    console.log(this) // function style invocation, so `this` in the callback will always be the global object
}

[1,2,3,4,5].forEach(cb)
```
- Talk about how `return` in a `forEach` works like `next`. It will return from the inner callback but it will not return from the outer function. 
```js
function findTwo(array) {
  array.forEach(el => {
    console.log(el);
    if (el === 2) return "I FOUND 2!"; // This returns from the callback; the arrow function, _not_
  });
  
  return "I DIDNT FIND 2";
}

findTwo([1, 2, 3]);

// OUTPUT 
// 1
// 2
// 3
// -> I DIDNT FIND 2 
```

- We are also going to go over `mergeSort` and `binarySearch`. 
    - If there is time, whiteboard each out with your circle! 
