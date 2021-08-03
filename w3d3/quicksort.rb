#PSEUDO CODE

#optionally take in a block

# base case: when we have an array that is less than 2, return that array

# select first element as pivot

# go through array and select elements that are less than pivot
# put in array called left

# go through array and select elements that are greater than pivot
# put remaining elements into anoother aray called right

# concat recursive call of left array + pivot + recusive call of right array

#CODE
#we want this version to take in a block to compare two items

class Array
    def quicksort(&prc)
        prc ||= Proc.new{ |a, b| a <=> b }

        return self if self.length <= 1

        pivot = self[0]

        left = self[1..-1].select { |ele| prc.call(ele, pivot) == -1 }
        right = self[1..-1].select { |ele| prc.call(ele, pivot) >= 0  }

        left.quicksort(&prc) + [pivot] + right.quicksort(&prc)
    end
end


arr = [2, 3, 8, 1, 5, 4, 3, 6, 7, 10, 1, 2, 9]
p arr.quicksort
    # => [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]
p arr.quicksort { |a, b| b <=> a } 
    # => [10, 9, 8, 7, 6, 5, 4, 3, 3, 2, 2, 1, 1]