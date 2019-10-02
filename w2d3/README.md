# W2D3

## Core Concepts

- Attr methods

## Discussion

Today's projects may require a broader review of OOP principles, expecially if student code differs markedly from the solutions. Students may want to see a lot in pry. Some highlights:

- Throughout the solutions, point out how the `attr_accessors` substitute for the earlier methods we wrote out by hand, and save us from needing to access the instance variables directly. Students may remember the `Dog#bark` method from a previous project where the reader modified the variable, and can be introduced to the problem of misspelling a writer and accidentally creating a new variable.
- `Hotel#initialize` makes a new hash and fills it based on a parameter; some students try to initialize this hash with a default block based on what they've seen before.
- The specs for `Hotel#list_rooms` can seem a little esoteric; this is a good opportunity to point out the differences between `puts`, `print`, and `p`.
- The `Code` class has more examples of class methods and a class constant.
- `Code#[]` and `Code#==` will be their first introduction to writing common methods like these.
- `Startup#>` is another example of overwriting an operator.
- `Startup#pay_employee` is a good example of different class instances interacting - we need the `employee` methods and `startup` instance variables for this to work.