# W1D2

## Core Concepts

- RSpec
- Exceptions
- Procs/Blocks

## Discussion
### Reminders 
1. Do not worry about finishing the days projects, make sure that you understand every line of code you write! 
2. These first two weeks are not just about coding foundations - they are also about foundations for the course. Make sure you are using this time to set a schedule that allows you time to eat and sleep and that you are cementing good study habits. 
3. Do not forget your nightly pair reports 

### Elaborative Interrogation: 
- What are some ways that you can debug something when you get stuck? 
  - Run the specs if you have them (read the more detailed failure messages, not just the top information) 
  - Use pry to test specific methods 
  - Use debuggers (don't forget to require byebug at the top of the file!) 
  - Use print statements (particularly useful in loops with lots of iteration - think bubble sort - or recursion - which we will learn later) 
  - Comment out large chunks of code to narrow down where the error is coming from 
  - Google - google methods, specific error messages, or weird behavior

# Rspec
Reiterate our motivations for test-driven development and draw their attention to particularly interesting problems from today.

Go over: 
- `caesar_cipher` in `rspec_exercise_1_solution/lib/part_2.rb`

Remind them how they can test individual files and lines:

- `bundle exec rspec`
- `bundle exec rspec spec/00_part_1_spec.rb`
- `bundle exec rspec spec/00_part_2_spec.rb:4` tests the whole `describe "palindrome?"` block: ie, every test for the method
- `bundle exec rspec spec/00_part_2_spec.rb:10` runs just one test in the `palindrome?` method

# Debugging 
Extol the virtues of debugging and show students how to do it strategically.

- When to `disp` and when to run code just once
  - How to `undisplay`
- Optimal locations for debuggers
- When to use `next`, `step`, or `continue`

Show off the code for some of the more interesting problems from the day in case students have questions on best implementation.

- `uniq_string?` is done with at most one full loop
- `dupe_indices` uses new hash syntax, and likely far fewer lines of code than some pairs used

# Procs 
Bring up a few choice examples to make sure everyone feels good about block and proc syntax.

- `select_even_nums` in `blocks_project_solution/lib/part_1.rb` uses the syntax `numbers.select(&:even?)`. This was in the reading, but not everyone remembers it.
- `no_valid_url?` in `blocks_project_solution/lib/part_2.rb` uses `String#end_with?`, which some students may not have found. This can be a good time to remind students of this morning's reading on documentation in pry:
  - `ls String` lists all methods available to the String class
  - `show-doc String#end_with?` describes the method and gives examples
  - `ri String` gives us all the Ruby information on the String class (this will be quite long)
  - If a student can't run the code, make sure they've installed the `pry-doc` gem as well as the `pry` gem
- Review the enumerables in `procs_project_solution/lib/part_1.rb`. Make sure everyone understands how the `&prc` parameter procifies the block passed in when the method is invoked in the spec file.
- Review the later problems in `procs_project_solution/lib/part_2.rb` as examples of methods that must receive Proc objects and not blocks, since we require more than one.
