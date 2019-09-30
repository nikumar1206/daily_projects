# Debug this code to pass rspec! There are 2 mistakes to fix.

# Write a method, titleize, that accepts a string representing a title 
# and capitalizes each word in a string except 'a', 'and', 'of', 'on', or 'the'.
# The first word of the title should be capitalized no matter what.

require "byebug"


def titleize(title)
  little_words = [ "and", "the", "over", "a", "on", "of" ]
  
  words = title.split(" ")

  titleized_words = words.map.with_index do |word, i|
    if i == 0 || !little_words.include?(word)
      word.capitalize
    else
      word.downcase
    end
  end

  titleized_words.join(" ")
end


def prime?(num)
    #
    return false if num < 2
    
    (2...num).each do |factor|
      #
        if num % factor == 0
          #
            return false
        end
    end

    true
end




