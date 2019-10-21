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
- Talk about amortization again. Amortized runtime analysis is different from average case analysis: in the former, we're not talking about what's probably going to happen, or what happens in the average case. We _know_ that we get `n` many constant time insertions if we double the number of buckets.
- Give them a high level overview of the LRU cache and go over the solutions for that. Given all the other pieces we have, the LRU cache is actually pretty simple!