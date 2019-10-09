# W3D3

## Core Concepts

- Quicksort
- Bsearch
- Deep Dup
- Merge Sort
- Visualize stack and each frame with variables

## Learning Goals

### Recursion

- Know how to reason about recursive programs
  - Be able to write a base case for a recursive method
  - Be able to write the inductive step for a recursive method
- Be able to explain the benefits of writing a method recursively vs. iteratively
- Be able to trace a recursive method and figure out how many recursive steps it will take
- Know how to write recursive sorting and searching algorithms

## Discussion

Today is the last material that's fair game for a01. Tell them about a01p tomorrow morning and how they can best prepare for that.

Students will likely still struggle with merge sort and quicksort at this point. We're going to go through merge sort at the beginning of lecture tomorrow. Let's use flex time to go over quicksort again. Explain the general idea of quicksort: Pick an arbitrary pivot, then divide all other elements into an array of elements smaller than or equal to the pivot and an array of elements larger than the pivot. Then quicksort those two arrays. Finally, put the sorted smaller elements together with the pivot and the sorted larger elements. Here's a sample implementation. Slowly write the code, explaining the rationale for each step. Make sure to also explain that we procify a block on line 6 and then we blockify a proc on lines 16 and 17. And explain the `||=`.

```ruby
class Array
  def quicksort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return self if self.length < 2

    pivot = self.first
    rest = self.drop(1)

    left = rest.select { |el| prc.call(el, pivot) < 0 }
    right = rest.select { |el| prc.call(el, pivot) > -1 }

    left_sorted = left.quicksort(&prc)
    right_sorted = right.quicksort(&prc)

    left_sorted + [pivot] + right_sorted
  end
end
```
