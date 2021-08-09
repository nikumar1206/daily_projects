# W9D2 
**Today's learning goals**:

**jQuery Tic Tac Toe**:
* Be able to set up Webpack
* Know how a frontend (this project) and backend (the Node version of this project) relate to and communicate with each other
* Know how to use JQuery to manage the DOM
  * Know how to query the DOM using JQuery
  * Know how to change the DOM using JQuery
  * Know how to create event listeners
* Be able to use CSS to style a web page

- Go over TTT solutions. There are a bunch of debuggers in the front-end code and it's bundled up. If you need to re-bundle, run:

```bash
webpack tic_tac_toe_solution/src/index.js -o tic_tac_toe_solution/dist/main.js --mode=development
```

  Talk about exactly what happens when we set everything up and what happens when we click on a square.

- Take general questions about the assessment. (There's no study hall before the assessment.)
- Make sure to mention:
    - curry
    - binarySearch
    - mergeSort
    - quickSort
    - myBind/myCall/myApply

- Maybe go over `binarySearch`:

  ```js
  function binarySearch(numbers, target) {
    if (numbers.length === 0) {
      return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
      return probeIdx;
    } else if (target < probe) {
      const left = numbers.slice(0, probeIdx);
      return binarySearch(left, target);
    } else {
      const right = numbers.slice(probeIdx + 1);
      const subProblem = binarySearch(right, target);

      return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
  }
  ```
