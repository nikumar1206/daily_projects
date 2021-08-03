module Slideable
  def left_and_right_dirs
    puts "In Slideable#left_and_right_dirs. self is: #{self}"
    [[0, -1], [0, 1]]
  end
​
  def up_and_down_dirs
    puts "In Slideable#up_and_down_dirs. self is: #{self}"
    [[-1, 0], [1, 0]]
  end
​
  def moves
    puts "In Slideable#moves. self is: #{self}"
    move_dirs.each { |dir| puts "I can go in #{dir} dir" }
  end
​
  def move_dirs
    raise NotImplementedError
  end
end
​
class Bishop
  include Slideable ## => Almost like copy-pasting:
​
      # def left_and_right_dirs
      #   puts "In Slideable#left_and_right_dirs. self is: #{self}"
      #   [[0, -1], [0, 1]]
      # end
​
      # def up_and_down_dirs
      #   puts "In Slideable#up_and_down_dirs. self is: #{self}"
      #   [[-1, 0], [1, 0]]
      # end
​
      # def moves
      #   puts "In Slideable#moves. self is: #{self}"
      #   move_dirs.each { |dir| "I can go in #{dir} dir" }
      # end
​
      # def move_dirs
      #   raise NotImplementedError
      # end
  
  def move_dirs
    puts "In Bishop#move_dirs. self is #{self}"
    left_and_right_dirs
  end
end
​
class Queen
  include Slideable
  
  def move_dirs
    puts "In Queen#move_dirs. self is #{self}"
    up_and_down_dirs
  end
end
​
class Rook
  include Slideable
end