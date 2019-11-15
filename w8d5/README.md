**Today's learning goals**:
**Callbacks**:
* Know how to use setInterval to schedule recurring function calls
* Know how to pass functions into setInterval
* Be able to set the context of a function
* Know how to use callbacks to enforce the order of asynchronous function calls
* Know how to write myBind
**Towers of Hanoi**:
* Know how to use pseudocode to structure your reasoning
* Be able to use JavaScript classes and objects in Node
  * Be able to use principle of object-oriented programming in JavaScript
* Be comfortable testing methods as you write them
* Be able to implement I/O using readline
**TicTacToe**:
* Be able to write object-oriented JavaScript programs comfortably
* Be comfortable using readline in Node
* Know how to approach creating an AI


**Circle time**

- What is the most unexpected/weirdest JS behavior you've run into?
- What was your greatest achievement of the week?

# Discussion Topics: 
- Talk extensively about asynchronicity vs. synchronicity. It’s really important for them to realize that any synchronous code will execute before any asynchronous code (no matter how fast the async code should execute. Feel free to show them this example.
```js
console.log("Hello!");
setTimeout(() => console.log("How are you?"), 0);
console.log("Great! What day is it? ");
setTimeout(() => console.log("I think it's Friday"), 0);
//What order will the console.logs appear in? 
```
- Review `Clock`, specifically about binding:
    - Why do we need to bind here? 
    - Once we pass the `_tick` function to `setInterval`, what is the new context? 
        Once `_tick` is passed into that function, `this` refers to whatever `setInterval` was called on (i.e. the Window or global object)
- Review `addNumbers`:
  - We open the reader before we invoke `addNumbers`. And we only close the reader in the completion callback.
- Review `myBind`:
  - Explain how it works with and without arrow function!
  - Explain why we see `says woof!` and then `Garfield says woof!` in the console: Callbacks get invoked function style.
- Review `mergeSort` or `binarySearch` if there is time

**Assessment and looking a head**
- How to prepare for assessments?
  - They will have access to the prep assessment over the weekend. But they can still study everything we've done in JS so far. It'll be very similar to A01, with the addition of inheritance, currying, and one of myApply or myBind (they haven't seen this last stuff yet).

## Additional Topics:
- Go over `myThrottle` and `myDebounce` if there is time.
