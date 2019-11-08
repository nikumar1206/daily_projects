# Week 7, Day 5

## Learning Goals
- Be able to reason about styling approaches from screenshots of a design
- Be able to layout elements in a custom Grid system
- Know how to create interactive elements such as sidebars and dropdowns
- Understand media queries and responsive design
- Know how to use an icon font system
- Know how to organize stylesheets in a Rails Application

## CSS Review

Take general questions on AA_Times. 

No need to spend too much time here since they should have asked plenty of questions during the two days. 

Consider reviewing these topics:
- The Box Model: Padding, border, margin
- Different `display` properties. Specifically block, inline, inline-block and flex. 
- Talk about the `position` property, specifically `relative` vs `absolute`.

Some of them will still hate CSS after today. Tell them that styling is important: recruiters are more likely to take a closer look at their full-stack projects if they look good.

## A04 Prep

- For a04, we've attached a new version of the assessment they've been practicing that requires a hidden input instead of a nested route. Show them the difference, including the specs for the comment controller that indicates whether we expected nested routes or not.
  - The routes file has been changed; explore the difference here, and what it means for the params we can access
  - Remember that a new routes file means new route names; always run `be rails routes` to be certain of where you're going in the app
  - Check out the new comment controller. The strong params have changed, so we'll get these from `<input type="hidden" name="comment[link_id]" value="<%= @link.id %>">` in the link show page now
- Go over general test taking advice again and encourage them to come to office hours! 