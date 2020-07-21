# W3D2

## Core Concepts

- Intro to HTML
- Array / Hash defaults

## Learning Goals

### Memory Puzzle

- Understand how classes interact in an object-oriented program
- Be able to use `require_relative`
- Be able to write the methods `[]` and `[]=` and explain how they work
- Develop a workflow that uses pry to test small parts of your code
- Know how to initialize an Array with a default value
- Know how to use duck typing to allow different classes to interact with your program

### Sudoku

- Understand what factory methods are and how to use them
- Understand how classes interact and how to use `require_relative`
- Be able to write and explain how bracket methods `[]` and `[]=` work
- Be able to use pry to test small parts of your code

## Discussion

- Let's talk about HTML.
- Give general overview: what is HTML, the head vs the body, what is an element, what does it mean to be a child/parent, what are different types of elements. Take questions. 


- Students may have had some trouble visualizing what the board should look like. Show, and justify, how we set it up with `Board#populate` and `Board#render`. Emphasize that `populate` is being called implicitly on `self` in `Board#initialize` because `self` in `initialize` methods always refers to the instance of the class being created.
- Draw attention to the `memory/board.rb:12-20`. They've seen the `[]`/`[]=` methods plenty by now, but it's worth reinforcing while we see it.
- Explain private `attr_reader` in `memory/board.rb:65`: we haven't had a unit on privacy yet, but why wouldn't we want this to be public? Why wouldn't we want a writer method?
- Duck typing is a learning goal but was not in their reading last night. Briefly explain what it is and how it's used here:
  - In our game, we need player objects of different classes to work with our `Memory` class. It doesn't matter what the class of the player object is, it just matters that it can respond to the methods we call.
  - `#get_input` and `#receive_revealed_card` and `#receive_match` are all defined for `HumanPlayer` and `ComputerPlayer`, and are used in `Memory#compare_guess`, `Memory#get_player_input`, and `Memory#make_guess`.
- Explain what's going on here (`memory/memory.rb:77-80`):
  ```ruby
  if $PROGRAM_NAME == __FILE__
    size = ARGV.empty? ? 4 : ARGV.shift.to_i
    MemoryGame.new(ComputerPlayer.new(size), size).play
  end
  ```
  Two points about it:
  - The first line ensures that the game script doesn't run when we load up the file in pry.
  - `ARGV` is an array of argument strings that are passed into the program through the command line.
- Explain why we use `STDIN.gets` in `memory/human_player.rb:10` instead of just `gets`: `STDIN` is the standard input, which is usually the keyboard. If we just use `gets`, we use `Kernel#gets`, which reads from `ARGV` first before it reads from `STDIN`.
