# W4D1

## Core Concepts

- Graphs and Nodes
- DFS
- BFS

## Learning Goals

### Knight's Travails

- Be able to implement your PolyTreeNode to build a path from start to finish
- Know how to store and traverse a tree
- Know when and why to use BFS vs. DFS

### Tic-Tac-Toe AI

- Use your knowledge of polytrees to build a tree of all possible outcomes
- Write an AI that uses your nodes to always win at TicTacToe

## Discussion

Start with a review of Knight's Travails, since some pairs that didn't make much progress on Friday may have spent most of today working on that project, and discussion on the assessment may have dominated flex time last Friday.

- Remind them of the motivation behind `build_move_tree` - Knight Path Finder builds the move tree with a breadth-first approach providing the shortest path
- Today they worked on traversal with `find_path`: either dfs or bfs works here, since the tree has been built in a breadth-first manner and we'll trace a path from the starting position to the ending position using the tree structure and not the path we first search
- The last step, `trace_path_back`, justifies our inclusion of a `parent` attribute for Nodes. Students may have been confused to find their paths differing from the example in the instruction; emphasize that all we care about is optimal number of steps, so the particular squares that make up that number of steps are not important.

For Tic Tac Toe, note that the solutions include advanced code in `perfect_computer_player.rb` and `minimax_node.rb` - students weren't asked to build this today, but if they're interested, it's an exciting way you could build out this project even further! Try not to take questions on this one, though; it's a good project to explore on their own.

- Where necessary, show them code in the `tic_tac_toe.rb` file that they didn't write today, emphasizing the best way to trace the flow of data in code that we haven't written. There are some good reminders in here of last week in game logic (`$PROGRAM_NAME == __FILE__`) and monkey patching (`#run` for `HumanPlayer` and `ComputerPlayer`).
- Talk about what goes into an instance of `TicTacToeNode` - the `board` keeps track of the board state for game logic like winning and losing, `next_mover_mark` keeps track of which player is considering this move, and `prev_move_pos` is our equivalent of `parent` for tracing an end back to its beginning.
- Why do we need both `losing_node?` and `winning_node?` methods? We're looking for a `winning_node`, but if we can't find one, we can at least avoid hitting a `losing_node`. We need ways to identify each as we make decisions about what is preferable and what is unacceptable.
  - The recursion may be confusing for losing nodes. Ask for the base case - this node has literally caused us to lose (that is, an opponent has completed a row). If you're struggling with the inductive step, think about what comes right before a loss in tic-tac-toe - we move, and we put our mark somewhere other than the position our opponent needs to complete a row. The assumption of perfect play is important in classifying losing and winning nodes.
- Explain the lines in `SuperComputerPlayer#move` that overwrite `ComputerPlayer#move`
  - Line 18 finds the first winning node, if there is one, and returns it on line 22
  - Otherwise, line 26 returns the first non-losing node and returns it on line 28
  - Since TTT is a solved game, perfect play will never result in a loss, so we raise an error if we get to line 32 since it means we've written our AI imperfectly