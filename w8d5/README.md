# W9D1

**Today's learning goals**:

**Arguments Exercises**:
* Know how to use `arguments` and the `...` rest operator
* Be able to set the context of a function in multiple ways
* Be able to write currying functions
  * Be able to explain how currying works
  * Know how to combine arguments from different calls of a curried function

**Prototypal Inheritance Exercises**:
* Be able to write and explain `Function.prototype.inherits`
  * Know what a `Surrogate` class does and why we need it
  * Know what the `constructor` property does
  * Know what `__proto__` is
  * Know what `new` does
  * Know what `Object.create` does
* Know how to test an inheritance implementation

# Discussion Topics
- Spend most of the time on `arguments.js` and `inherits.js`. Most students will not have had too much time with Flappy Bird. 
- Review the following elaborative interrogation questions with students. Make sure that each student answers only one question, and that if no one volunteers, we call on people.
  - How are prototypes different from constructor Functions?
  - How are classes/constructors connected to one another in a prototypal inheritance chain?
  - How is prototypal inheritance different from classical inheritance?
  - Why might we want to use currying?
  - How is webpack beneficial for building client code?
  - How does context work in each of the different types of functions in javascript?
  - Why do we need to bind context of functions?
- Review `myBind2` and the three `curry` functions.
    - Explain the difference between `myBind1` and `myBind2` (ES5/ES6)
    - Spend a lot of time on these even if it seems repetitive! It's important that they have a solid grasp on these topics. 
- Talk about the rest operator (...).
    - The rest operator will either take a list of arguments and turn it into an array, or take an array and turn it into a list of arguments
- Talk about the following facts:
  - `someFunc.curry(3) !== someFunc.curry(3) // true`
  - ```js
    const curried = someFunc.curry(3);
    curried(3) === curried(2); // true
    ```
- Talk about `[] !== [] // true` and talk about how we would compare arrays.
- Review `inherits2`.

# Assessment
- A05 is on Friday
- This is more time than any other cohort has gotten before, they will be fine! 