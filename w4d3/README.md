# W4D3

## Core Concepts

- Modules (include/extend)
- private, public, protected

## Learning Goals

### Chess

- Know when and why private methods are used
- Be able to read UML and understand the benefits of UML
- Be familiar with how to use the Singleton module
- Know how to use modules
- Know how class inheritance works

## Discussion

Take general questions on chess. Feel free to point out the following in particular:

- Organization of 'pieces.rb', requires all the 'piece' files
- Requiring each piece to implement certain methods (move_diffs) before including a module => NotImplementedError (steppable.rb:19)
  - Compare to Enumerable. Enumerable requires that a class implement `each` before it can be included. The `move_diffs` method called in `moves` is the class's definition, not the module's. When this method is called, it will be called on self, i.e., the instance of the piece.
- `NullPiece` vs using `nil`. Memory advantages AND we get to define methods on NullPiece
  so that they act like pieces
- move_piece vs move_piece!
  - Good moment to show byebug's `where`, which will elucidate the cycle.
  - `board.move` --> `piece.valid_moves` --> `piece.move_into_check?` --> `board.move`
- Very common for students to not understand how `grow_unblocked_moves_in_dir`, `move_dirs`, and `moves` work together.
  - Pull up code. Start with `HORIZONTAL_DIRS` and `DIAGONAL_DIRS` (expect questions on why they're private/constants). `horizontal_dirs` and `diagonal_dirs` are just getter methods, allowing `move_dirs` to be a one liner within each respective piece class.
  - Explain how `grow_unblocked_moves_in_dir` is responsible for collective possible moves until invalid pos or other piece — you can ignore overtaking opponents for sake of expediency. Whiteboarding out this method in action can be helpful too
  - Once we have this logic, `moves` is just the result of calling `grow_unblocked_moves_in_dir` for each dir.
- If you still have time, discuss the render method. One good point to mention is how the `to_s` method keeps our code concise here. >NB: The solutions for render are _*extremely*_ obfuscated. Comment them out and write your own render method with a nested `each` loop.
  **Expect questions on:**

- `next false` in `Pawn#side attacks`. Cool syntax to return `false` directly to the block in that iteration.
- `@notifications` in Display class. Nice to handle all display things in the Display class. All errors get bubbled up to Game class, which sets errors in its Display.

## Assessment Prep
- Study guide for Ruby 2 can be found in W4D1 on App Academy Open. Additionally, the practice assessment itself, along with walkthrough videos, can be found under W5D1. 
- Make sure students know about the README (especially important with this test as that is how they access the hackerrank section) 
- Encourage students to make a first practice run tonight.
- Take any questions on material on assessment and format of the assessment. 

