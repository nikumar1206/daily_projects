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

**Circle time** (5:35)

- Warm up: What's your favorite app on the web?
- The usual:
- What's your greatest achievement of the week?
- What was your biggest struggle this week?
- FSP teaser question: If you could build anything for the web, what would it be? Your dream app!
- Motivation:
  - You've almost made it! So close to having full-stack super powers! Next week we're diving into React+Redux.
  - It will be the hardest, but most rewarding week of the course. It will be the most overwhelming time so far, so expect to feel like you're barely staying above water (or not even).
  - Next week will be VERY stressful, but then we'll have the FSPs to review everything for 2 weeks.
  - Do your best (really, actually your best- don't use this as a cop-out i.e. "well, I did my best...").
  - Directly after this, we're going into Full Stack Projects which will give us 2 weeks to solidify all of the learning of this next week.
  - The FSP is one of the main portfolio pieces when we apply to jobs, so how well we do in the job search will be directly influenced by the quality of the FSP, which is directly influenced by the effort we put in next week.
- Looking ahead:
  - What motivates you most to work hard?
  - What has been the most effective way you've studied so far?
- Logistics if they ask/you want to talk about it:
  - FSP talk will be on Monday and they'll pick projects Monday night.
  - They'll start working on the FSP proposal all next week, with final version due W8D1
  - A06 will be in-class on W8D2
