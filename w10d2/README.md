**Flex time** (5:20)

**Today's learning goals**:

**Widgets**:

* Know how to set up a new React project
* Be able to create simple React components
* Know how to incorporate an API into your app
* Be able to add basic styling to React components

- Go through how tabs work.
  - There are a bunch of debuggers. Explain the order in which we hit the debuggers, both when we load up the app and when we switch tabs.
  - There's a debugger before we set state, one after, and one as a callback to `setState`. Explain to them that `setState` is async and that the callback gets invoked after the state has been set and the component has re-rendered.
  - Emphasize that we only hit the debugger in the constructor once!
- Take off the `key` prop in `tabs.jsx:13` and show them the console warning. Emphasize that we _always_ need to _immediately_ fix that warning. React uses the `key` prop for the virtual DOM and there can be really odd behavior if we don't have a `key` prop.

