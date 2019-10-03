# W2D4

## Core Concepts

- [] and []=
- Recursion

## Discussion

Recursion is not on FA2, but it's still worth reviewing, since we'll visit it next week in more depth and it will make an appearance on A01. First, though, it's worth making sure everyone feels good about the more advanced class methods that will be on FA2. Students who finish may find Battleship was more difficult than Flight; Battleship-level difficulty is certainly fair game for the assessment, so everyone should feel comfortable with everything there.

- `Battleship#initialize` brings back the new Array syntax that students should recognize for most grid-based games.
- `[]` and `[]=` are a little more complicated today than they were yesterday. Note that they need to take an array as an argument; if we were to call it manually, not every student intuitively sees that it would look like `battleship[[0,0]]`, but we usually have a `pos` variable that looks better. `row, col = pos` may be new to students as well.
- We can see both the `[]` and `[]=` methods at play in `Battleship#attack`.
- `sum_array` is a good problem to focus on recursion basics without distracting students who aren't comfortable with the math in `pow` or `lucas_number`.
- `flatten` has likely been the trickiest thing students handled thus far; it's worth spending as much time as necessary, with debuggers, getting students comfortable with this one.