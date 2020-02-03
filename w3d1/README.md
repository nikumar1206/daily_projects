# W3D1

## Core Concepts

- my_each / my_map
- my_flatten
- require_relative

## Learning Goals

### Enumerables

- Be able to create directories and files from the command line
- Know how to extend classes
- Know how to use pry to test methods
- Be able to write methods that take a block as an argument
- Get comfortable reasoning about how enumerable methods work with arrays

### Ghost

- Understand how different classes interact
- Be able to write classes in different files and use `require_relative` to connect them
- Know how to test methods in pry
- Know how to read lines from a text file
- Understand how `__FILE__ == $PROGRAM_NAME` works

## Discussion

Welcome to the main part of the course! Set some expectations about what will be different from now until the end of their time here:

- Feel free to introduce everyone again. Ask for name, pronouns, and background! 
- Projects will be much harder and longer. This may feel discouraging at times; don't let it be! Foundations is designed such that you can finish it with time to spare (though you don't have to) - the rest of the course is designed so that you always have work left. This is deliberate. Progress through the projects is *not* a measure of how well you're doing on the material.
  - Project instructions will also be much more open-ended. This too is by design - on the job, you won't have a step-by-step guide for how to implement something, you'll just have a description of what to implement. Spend time trying to figure out the best way to do what we're asking you, but still feel free to call us over for guidance if something feels surprising or unclear.
- You should understand every line of code that you write. Proper pair programming is more important than ever, as is reading documentation, testing thoroughly, and asking conceptual questions of the TAs where you need to. The days' most important projects will be frontloaded at the beginning; complete mastery over the early project is better than surface-level exposure to the late project.
- Remember our pairing talk from foundations; one partner may feel more comfortable on the material than another on any given day. Both partners have roles to play here - one can practice the soft skill of explaining code effectively by making sure their partner understands everything they understand, and the other can practice the technical skills they're still trying to master through their partner's understanding. Be communicative and be patient!
- The solutions are available to you for the sole purpose of reviewing the material after the day is over. Often they'll show you an interesting way to implement code that you may not have considered during class - it's totally fine if the solutions look very different from your work in class. You *must not* look at the solutions before 6pm on any day. This robs you and your pair of a valuable opportunity to struggle with the material, and struggling with the material is by far the most productive time you can spend learning to be a developer.
  - Of particular note is the fact that these solutions are App Academy's intellectual property. We'll get more into plagiarism during our final projects, but in short, plagiarism is any time you try to pass off someone else's code as your own. Trying to pass off our solutions as your solutions is plagiarism, and just like in your professional lives, this would be taken very seriously if it ever happened.

Review any questions students have on the day's code. See if you can build continuity between what they just did in foundations and the more advanced concepts they worked on today.

- Students may still not be testing methods - even if there is no RSpec included, they should run games like Ghost, test `my_*` methods in pry and compare them to the standard Ruby methods, and make liberal use of debuggers.
- `Ghost` uses `_`s to placehold values that won't be important or used inside blocks (in `GhostGame#remaining_players` and `GhostGame#winner`). This builds off the hash syntax we reviewed a few times in foundations.
- The solutions use `public` and `private` - we can briefly outline the idea here, but more on this next week. For now, we'll just make as few methods as possible `public`.
- `Set`s come up for the first time - we can talk about the importance of reading the docs (which the instructions link them to), and preview time complexity by saying that `Set`s, like `Hash`es, let us look up values very efficiently and therefore are good for storing information we need to find quickly. We can note the difference between `require 'set'` and `require_relative 'player'`.

