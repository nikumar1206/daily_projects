# W9D5 
**Today's learning goals**:

**Pocket Projects**:
* Know how to traverse and manipulate the DOM using vanilla JavaScript
* Practice using event listeners using vanilla JavaScript
* Learn to Implement extra Functionality using vanilla JavaScript
* Understand an HTML page as a tree of DOM nodes
* Understand Event Bubbling and Delegation
* Learn How Debouncing Works

# Circle time: 
- Ask them the usual circle time questions: 
    - What's your greatest achievement of the week?
    - What was your biggest struggle this week?
- Talk about next week and get them motivated:
    - You've almost made it! So close to having full-stack super powers! Next week we're diving into React+Redux.
    - It will be the hardest, but most rewarding week of the course. It will be the most overwhelming time so far, so expect to feel like you're barely staying above water (or not even).
    - Next week will be VERY stressful, but then do your best! (really, actually your best- don't use this as a cop-out i.e. "well, I did my best...").
    - Directly after this, we're going into Full Stack Projects which will give us 2 weeks+ to solidify all of the learning of this next week.
    - The FSP is one of the main portfolio pieces when we apply to jobs, so how well we do in the job search will be directly influenced by the quality of the FSP, which is directly influenced by the effort we put in next week.
- Ask if anyone want's to share effective study habits that they have developed for the course! 

# Discussion Topics: 
- Why we put the `mouseenter` and `mouseleave` event listeners on the `<nav>` rather than the `<li>`
  
- querySelector/getElementById vs. querySelectorAll/getElementsByClassName
  + the first two return a single element (the first that matches the selection criteria, if there are multiple); the second two return an HTMLCollection
  
- Illustrate the difference between debouncing and throttling
  + https://css-tricks.com/debouncing-throttling-explained-examples/
  + https://javascript.info/task/debounce
  + https://javascript.info/task/throttle
  + https://redd.one/blog/debounce-vs-throttle (neat visual examples with concise explanations)
  + TLDR: if we spam an event, debounce will not invoke the function until we stop, whereas throttle will invoke it each time the cooldown time elapses

- Explain that the pre-written import statement in `index.js` does not match the syntax of the corresponding export
  + we export a named constant from `warmup.js`, so we should write `import "./warmup"` if we want to import the scope from that file rather than individual named exports using object destructuring 
