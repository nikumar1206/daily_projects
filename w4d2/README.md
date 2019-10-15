# W4D2

## Core Concepts

- OOP
- Inheritance
- UML
- Error handling
- Singleton

## Learning Goals

### Error Handling Funtime

- Know how to `raise` and `rescue` an exception
- Be able to explain how an exception bubbles up after it is raised
- Know when to use `ensure` and `retry`
- Be able to choose an appropriate exception class

### Class Inheritance

- Understand how a subclass inherits from a superclass
- Know how to override a parent class's method
- Know when and how to use `super`

### Chess

- Know when and why private methods are used
- Be able to read UML and understand the benefits of UML
- Be familiar with how to use the Singleton module
- Know how to use modules
- Know how class inheritance works

## Discussion

- Walk them through Phase 3 in the `solutions/error_handling_funtime/super_useful.rb` solution. Most people manage to cobble something together for this project, but it's often not what we intended.
- Walk them through the protected `total_subsalary` method for `Manager`. Talk about how it's recursive and why it's protected. For some students it clicks if you compare it to the deep dup or flatten methods.
- Walk them through `solutions/chess/board.rb`. Walk them through `Board#initialize`. They may ask about the optional `fill_board` argument. This is used in `Board#dup`, which won't become relevant until later. Draw their attention to the private `make_starting_grid` method. Talk about why that method is private and what happens in this method---it's likely much more DRY than what they came up with.
- Don't take questions past the `Board` class, because some of them will not have gotten that far and you don't want to spoil it for them. (Refrain from taking a poll about how far people have gotten so as not to make people feel bad.)
- Remember to bring their attention back to the assessment two study guide - we don't want to motivate their learning through the assessment, but emphasize that the checklist is independently a comprehensive list of what they should feel comfortable explaining