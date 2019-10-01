# W2D2

## Core Concepts

- Class variables / methods
- Monkey patching

## Discussion

This may have been the first day a sizeable number of students don't finish the project all the way through. Prepare to spend a little more time on the later problems than usual.

Some students can still be confused on `self` - use debuggers to remind students they exist and show off what `self` is at every point. Ask students what `self` refers to whenever we encounter it in the solutions code.

- `monkey_patching_solution/lib/array.rb` has plenty of `self` keywords sprinkled throughout. `Array#median` and `Array#my_transpose` have enough logic to explore a little while.
- `play_guessing_game_solution/lib/play_guessing_game.rb` shows off the logic that runs the game; talk about `gets.chomp.to_i` and the `until` loop at the bottom of the file.
- `hangman_solution/lib/hangman.rb` has a class method and class variable (finally) that can illustrate the differences between class context and instance context.