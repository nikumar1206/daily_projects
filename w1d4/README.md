# W1D4

## Core Concepts

- Debugging
- Procs

## Discussion

Today's main focus was to get used to RSpec and have some more problems with Procs. 

Take any questions related to the RSpec exercises 
    - Make sure students feel comfortable working with hashes, see `element_count` in `rspec_exercise_3_solution/lib/part_2.rb` as well as `hash_select`in `rspec_exercise_4_solution/lib/part_1.rb`.

Take any questions on Perilous Procs. Remind them that like nauseating numbers, some of the later problems are challening and can take a while to solve. 

Students should not feel discouraged if they were unable to reach a solution for some of these problems. Reassure them that if they were able to understand everything in the RSpec exercies, then they are in great shape for the course.

## Elaborative Interrogation 
- What is the difference between a proc and a block?
    - A proc is a block saved into a variable aka an object that contains a block.
    - A block is a chunk of code that is passed into a method to be executed

- Why do we want to use procs? 
    - A proc is an object that contains a block. We need procs because they allow us to save blocks to variables so we can manipulate them in our code.

- What is the purpose of byebug? 
    - It allows us to pause execution of our code and look at variables at different points in execution

- What is the purpose of RSpec? 
    - It helps us to test our code!

- What approach should you take when you encounter a bug or an error? 
    - Read the error message, look at the line number
    - Put in a debugger
    - User print statements