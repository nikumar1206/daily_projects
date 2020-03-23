# W9D5 
**Today's learning goals**:

**Pocket Projects**:
* Know how to traverse and manipulate the DOM using vanilla JavaScript
* Practice using event listeners using vanilla JavaScript
* Learn to Implement extra Functionality using vanilla JavaScript
* Understand an HTML page as a tree of DOM nodes
* Understand Event Bubbling and Delegation
* Learn How Debouncing Works

**Mail**:
* Understand the basics of how to make a single-page application
* Know how to change a URL's hash fragment
* Know how a frontend router works
  * Know how to listen to changes in the hash fragment
  * Know how to conditionally render different HTML based on the route
* Understand the purpose of separating concerns
  * Know why we write display code in components
  * Know why we write data management code in our store

**Elaborative Interrogation**:
- end of JS module, take questions on the day's project

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

- Tomorrow is the first day of React!
  + stay focused and motivated, it's both the most difficult and the most rewarding module
  + do your HW! it's the first exposure to new and complex material
  + be prepared to ask good questions in lecture to make the most of that time
  + you owe it to your partner to be as prepared as possible, they will be the foundation of your professional network!
  + hard work now pays off for the project and the job search