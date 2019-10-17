# W4D4

## Core Concepts

- RSpec (subject vs let)
- TDD
- Mocks/Doubles

## Learning Goals

### TDD Projects

- Be able to explain what functionality your testing will cover
- Know the hierarchy / syntax of RSpec methods (`describe`, `before`, `let`, `it`, `expect`, etc.)
- Be comfortable writing RSpec tests
- Know when to use `let` and `subject`

### Poker

- Be able to define desired functionality, write specs, and then implement
- Know how to follow red, green, refactor TDD workflow
- Know how to create and use test doubles
- Know when to use `context` and `describe`

## Discussion

Students may have questions on the assessment - don't dodge these, but do try to focus on material. At this point last week they had access to a practice test; while they already have access to a practice test under the W5D1 material, we won't actively draw their attention to that until Friday, to keep their attention fully on RSpec today and time complexity tomorrow.

- Talk about how to run both individual spec files and individual lines in the specs: `be rspec spec/00_array_spec.rb` runs the array specs and not Hanoi specs; `be rspec spec/00_array_spec.rb:26` runs all the specs for `two_sum`; `be rspec spec/00_array_spec.rb:31` runs just one spec from `two_sum`. Motivate them that this information is in the readme on the tests. Who knows what other treasures the readme might contain?
- Talk about `to be` vs. `to eq`: `to be` checks for object identity, `to eq` uses `==`. Show them the difference: change the `eq` in `expect(two_sum(two_zeros)).to eq([[1, 3]])` to `be` in `first_tdd/spec/00_array_spec:43`.
- Talk about Hanoi specs for `#won?`: Note that we actually perform the moves before defining our expectation. Some students will want to expose their towers or allow the game to be initialized in a non-starting position. Both of these are less ideal, because we'd be writing our code in the service of simplifying our spec code.
- Talk through comment in `poker/spec/hand_spec.rb:6-10` and take this as an opportunity to talk about the fact that we're overwriting `Card#<=>`.
- Students often use complex Ruby logic to achieve the same thing they could achieve with an RSpec method. Talk them through some examples of using RSpec methods:
  - `poker/spec/player_spec.rb:31`: `change { player.bankroll }.by(-10)` instead of storing `player.bankroll` in a variable first, then calling `player.take_bet(10)` and then comparing `player.bankroll` with what was stored.
  - `poker/spec/hand_spec.rb:23`: `expect(hand.cards).to match_array(cards)` instead of first sorting `hand_cards` and `cards` and then comparing them.
  - One reason we want to use these RSpec methods is that we may override some of Ruby's built in methods. Then if we'd call them in our specs in places where we're not testing those particular methods, we'd get unexpected behavior.
- Walk them through the poker card class, since they'll be given a similar class on the assessment.
- Take general questions about poker solutions.
