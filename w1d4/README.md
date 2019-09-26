# W1D4

## Core Concepts

- Procs

## Discussion

This has been another day of light projects - students likely have finished all projects from previous days and all external resources. There is no homework tonight, so it's probably a good idea to remind them that the problems get longer next week, and the week after begins the course proper. Stay strong! Longer projects are ahead.

Bring up a few choice examples to make sure everyone feels good about block and proc syntax.

- `select_even_nums` in `blocks_project_solution/lib/part_1.rb` uses the syntax `numbers.select(&:even?)`. This was in the reading, but not everyone remembers it.
- `no_valid_url?` in `blocks_project_solution/lib/part_2.rb` uses `String#end_with?`, which some students may not have found. This can be a good time to remind students of Wednesday's reading on documentation in pry:
  - `ls String` lists all methods available to the String class
  - `show-doc String#end_with?` describes the method and gives examples
  - `ri String` gives us all the Ruby information on the String class (this will be quite long)
  - These tools are all fair game for the assessment! If a student can't run the code, make sure they've installed the `pry-doc` gem as well as the `pry` gem
- Review the enumerables in `procs_project_solution/lib/part_1.rb`. Make sure everyone understands how the `&prc` parameter procifies the block passed in when the method is invoked in the spec file.
- Review the later problems in `procs_project_solution/lib/part_2.rb` as examples of methods that must receive Proc objects and not blocks, since we require more than one.