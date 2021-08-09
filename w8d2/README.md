# W8D2

**Today's learning goals**:
# Intro exercises:
* Be able to write the same types of functions you were able to write in Ruby
* Know how to pass functions as arguments to other functions and call them as callbacks
* Know how closures work
* Know how JavaScript's prototypical inheritance works
  * Know how to monkey-patch new methods onto a class in JavaScript
# Towers of Hanoi:
* Know how to use pseudocode to structure your reasoning
* Be able to use JavaScript classes and objects in Node
* Be able to use principle of object-oriented programming in JavaScript
* Be comfortable testing methods as you write them
* Be able to implement I/O using readline

# Discussion
- Take questions on the day's projects, especially on monkey patching problems. 
- Feel free to review syntax, closure, and callbacks since students are often still confused when it comes to reading javascript. 
- Go over `myEach`.
- Compare `myEach` with `myReduce`: Point out how the callback in `myEach` is only expecting one argument, and that’s the anonymous function we use in `myReduce`. `myEach` only has a _side-effect_, and the side-effect here is repeatedly reassigning the `initialValue` until the loop is finished. Name all of the callbacks different things so they don’t get confused.
- Go over `bubbleSort`, since it touches on double assignment. A lot of them possibly didn’t know how to double assign in JavaScript. You just have to use array brackets. `[firstEl, secondEl] = [secondEl, firstEl]
- Go over `transpose` and explain this:
  ```javascript
  Array.from({ length: this[0].length }, () =>
    Array.from({ length: this.length })
  );
  ```
  `Array.from` takes an "array-like" object as the first argument. An object with a `length` property is enough for that (show them in the console that arrays have a `length` property). So on its own, `Array.from({ length: 3 })` returns `[undefined, undefined, undefined]`. The second argument to `Array.from` is a call-back that maps over the array created so far. So `Array.from({ length: 3 })` returns `[undefined, undefined, undefined]`, and then if we map over that with `() => Array.from({ length: 2 })`, we get `[undefined, undefined]` for each position in the original array. So we end up with `[[undefined, undefined], [undefined, undefined], [undefined, undefined]]`.
