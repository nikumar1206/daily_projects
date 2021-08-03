# W2D3

## Core Concepts

- OOP/Classes
- Bracket method 
- Syntactic sugar

## Discussion

Today's projects may require a broader review of OOP principles, especially if student code differs markedly from the solutions. Students may want to see a lot in pry. Some highlights:

- The `Code` class has more examples of class methods and a class constant.
- `Code#[]` and `Code#==` will be their first introduction to writing common methods like these.
- `Board#initialize` in the Battleship project uses the new Array syntax that students will employ in most grid-based games.
- `[]` and `[]=` are a little more complicated today in Battleship than in Mastermind. Note that they need to take an array as an argument; if we were to call it manually, not every student intuitively sees that it would look like `battleship[[0,0]]`, but we usually have a `pos` variable that looks better. `row, col = pos` may be new to students as well.
- We can see both the `[]` and `[]=` methods at play in `Board#attack`.
- Students might have a hard time grasping the play loop in `Tic Tac Toe`. Try to focus on the first version since few students will have gotten to the 2nd or 3rd version. Spend time going over how the loop works and how the code keeps track of `current player`. 

## Extra notes
- Usage of `print` inside of Battleship's `board.rb` will result in using the user written `print` method instead of the built-in ruby `print`. Students might have gotten an argument error by using `print`. 
- Students should review Battleship and Tic Tac Toe often since FA2 could potentially feature a board/grid class. 
