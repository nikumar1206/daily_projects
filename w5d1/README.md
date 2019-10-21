# W5D1

## Core Concepts

- MaxIntSet
- Resizing Int Set
- Amortization
- Hashing
- Linked Lists
- Hash Map

## Learning Goals

### Hash Map & LRU Cache

- Be able to describe the characteristics of a good hashing function
- Be able to explain how a linked list works and know how to traverse it
- Be able to explain how a hash map works
- Know how to implement an LRU cache using hash maps and linked lists

## Discussion

- Start with questions about any part of the material.
- Talk about the four principles of a hashing function:
  - Uniformity - distributed equally
  - Determinism - always the same output
  - One way - given output, nothing we can predict about input
  - Sensitive - very different output for similar input
- Remind students of the dangers of spec blinders - not every method can be tested in isolation, so they should also be able to think for themselves to decide if their code is doing what it's meant to do in the moment.
  - An example: in `p01_int_set.rb`, comment out the code defined in the `#include?` method and watch the specs for the `#insert` method fail. RSpec is using an include matcher (`lru_cache_solution/spec/p01_int_set_spec.rb:61`) to see if elements are contained in the IntSet, which works by calling the object's own `include?` method. Until that method works, this spec can't pass, so as we write the code out we shouldn't rely exclusively on passing or failing specs in order.
- Talk about amortization again. Amortized runtime analysis is different from average case analysis: in the former, we're not talking about what's probably going to happen, or what happens in the average case. We _know_ that we get `n` many constant time insertions if we double the number of buckets.
- Give them a high level overview of the LRU cache and go over the solutions for that. Given all the other pieces we have, the LRU cache is actually pretty simple!