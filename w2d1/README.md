# W2D1

## Core Concepts

- Classes (OOP intro)
- Instance variables / methods
- Class variables / methods

## Discussion

Students may have questions from this morning's assessment. Part of their homework tonight will be submitting a corrected assessment, so defer any questions about specific code answers to their own investigations tonight - focus on OOP today.

Projects did not include class variables like the homework did, so students may have questions there. We can remind students that the `Dog::whos_louder` example from the notes works just as well in today's project:

```rb
class Dog
  def initialize(name, bark)
    @name = name
    @bark = bark
  end

  def self.whos_louder(dog_1, dog_2)
    if dog_1.bark.length > dog_2.bark.length
      return dog_1.name
    elsif dog_1.bark.length < dog_2.bark.length
      return dog_2.name
    else
      return nil
    end
  end

  def name
    @name
  end

  def bark
    @bark
  end
end

d1 = Dog.new("Fido", "woof")
d2 = Dog.new("Doge", "much bork")
p Dog.whos_louder(d1, d2) # "Doge"
```

Following the assessment, students hopefully have a deeper appreciation for the powers of debugging and reading error messages. Show as much as you can in pry and with debuggers to hammer home how useful these tools are.

Some other useful points:

- students may still be struggling with the `Hash.new { |h, k| h[k] = [] }` syntax in `bootcamp_solution/lib/bootcamp.rb:8`. We can show it working and show how `Hash.new([])` breaks with `Bootcamp#add_grade`
- `Bootcamp#average_grade` shows a few examples of outsourcing work to other methods. It also uses `num_grades` and `self.num_grades` to mean the same thing - mention that this is poor style, but evidence of how implicit and explicit `self` work in instance methods
- `Dog#bark` in `dog_solution/lib/dog.rb` is an example of a more advanced getter method where the output depends on other instance variables