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


## Diversity and Inclusion Circle Time

Let's open up a discussion about professionalism in this office. How can we learn to be better? What's a good strategy? We should set guidelines for how the discussion should be carried out - with care and respect for others, without accusation, and with with awareness of how much each person is speaking (creating space for others to speak).

There's a potential for the students to take the discussion to the larger topics that drive these issues at the country/world level. If that happens, do remind them that in this specific talk, we should focus on how we can improve as individuals in this office. The Roundtable discussions are better for discussing the issues affecting the industry/world (next one is next week Thurs). We can be the change we want to see in the world!

If/when it gets quiet, feel free to nudge the conversation along with these:

- What can we do to make the culture better and be professional? In classroom? During pairing? (Respect personal space. Do not touch others. Think of what you say. It's ok if we make a mistake, we all do- just acknowledge it, apologize, learn from it, and move on).

- How can we address subtle misbehavior when we see it happen? (Tell the person, tell us, or report anonymously- but let's make sure to address it. This is an important professional skill that nobody is born good at, so let's practice together!)

- What would you do/say when someone unintentionally belittles you or is insensitive to you as a pair?

Do remind them to not hesitate to talk to us and that they can also report any harassment anonymously through the link in the PT.

Finally, talk to them that part of being respectful of your colleagues _at App Academy_ is to treat the office like a professional space. That means that it should always be quiet enough so that people can study at all times. We often get complaints about people socializing in the office and we need them to know that they need to tone that down.

For extra context, here is all of the messaging related to D&I, professionalism, and empathy that the students got/will get around this Circle Time. Let's all read through this to make sure we're on the same page:

- Culture curriculum for w2d1 (~20 min read)
- In the end-of-day email for w2d4
  - We want to start thinking about what life on the job will be like. In preparation for tomorrow's Circle Time, I want us all to take the Implicit Bias Test. Please take the Gender-Career IAT.
  - The goal of taking this test, and the whole a/A program, is to help you become an invaluable member of a Software Engineering team.
    The test may expose uncomfortable information. Tomorrow we will talk about how to use this information to grow towards our goal. Remember that this is a skill that can be learned and practiced like any other.
    Please take the test before reading the below:
  - We want to talk about pairing, professionalism, and the culture we strive for at App Academy. We want to be better than the general tech community! Generally there's not a lot of diversity and the community is struggling to be inclusive and accepting of minorities- be it race, religion, orientation, gender, etc. There are real problems if we look around and scratch below the surface.
  - With this Circle Time, we want to openly discuss how we can improve at this at the classroom/individual level. This is much like coding and pairing- it's a skill that we can practice and get better at. There is the potential for it to be awkward, but we should acknowledge that most times when somebody says or does something offensive, they don't do it with malicious intent. It usually comes from a place of ignorance or negligence/carelessness. That's what we want to address here.
  - One example: Two different kinds of people typically attend Graduation Night to network with our graduates- non-technical recruiters, and developers. Great alumni Sarah comes back to a/A Graduation Night looking to hire two people for her company. The students who show her their portfolio projects automatically assume she's a non-technical HR person, so they don't show her any of their code. She left sad, frustrated, and didn't hire anybody.
  - We'll talk more in depth about this tomorrow. This is to get us started thinking about the issue.
- In evening announcements right after Circle Time
  - D&I/Empathy- this is something we take very very seriously here. We all know how bad the industry is with this. We're all trying to be better. We're working on being the change we want to see in the world and this starts by making a very safe and inclusive environment here, every day. From the Implicit Bias test, we saw that this is something that most people are pretty bad at. We grew up that way, but we can work on being better. Just know that most of the time if anybody does or says something offensive, they usually didn't mean it with malicious intent. And many times, they may not even realize they did something offensive. So, since we're all trying to work on this together, let's help each other out.
    - If you do something offensive, acknowledge it, apologize, learn from it, and move on.
    - If you notice somebody else do something offensive- let them know so they can learn. If you don't feel comfortable with that, let us (staff) know. And if you're not comfortable with that, please report it through an anonymous report (link in the PT).
    - Keep in mind that this is a skill like any other- it takes practice to become good at it. In the beginning, we're all pretty bad at it and it might be a little awkward too, but just continue practicing and it'll be second nature before you know it.
- In end-of-day email w2d5, right after Circle Time
  - We're all working very hard to create a more diverse culture both within a/A and in the industry. This begins with creating a safe and welcoming environment for all.
  - Most people have implicit biases. This is fine. We will all mess up once in a while and offend people with our words or actions. Most times, the offense isn't meant on purpose or with malicious intent, so when it happens just acknowledge it, apologize to whomever you offended, learn from it so that it doesn't happen again, and move on.
  - This is a skill like any other, so it takes practice to become good at it.
    If you're ever offended by what somebody does in class, feel free to point it out so they can learn from it. If you're not comfortable doing this, let one of the staff know, and we will find a way of making sure the person learns to avoid the behavior.
  - If an offense IS actually meant with malicious intent, do let us know about it either directly or report it anonymously through the Code of Conduct Violation Report in the Progress Tracker.

**A note on the Implicit Bias test**

Some students will want to have a discussion about the methodology of the Implicit Bias test. We don't want to get too sidetracked by discussions about that, since none of us are qualified to evaluate any scientific debates around this topic. But here are a few things to say:

- Point them to the FAQs: https://implicit.harvard.edu/implicit/faqs.html
- The order in which the two tests are presented is random. From the FAQs:
  > It is also important to know that each participant is randomly assigned to an order, so half of test-takers complete Gay People + Bad / Straight People + Good and then Gay People + Good / Straight People + Bad, and the other half of test-takers get the opposite order.
- This the test is the industry standard, but as with any scientific methodology, there will be disagreements within the scientific community.
- Like many tests, this test is less accurate on the individual level, but more accurate on the average of everybody taking it---and that’s what it’s designed to measure.
- In the end, the test is meant as a conversation starter for us to talk about issues of professionalism and inclusion in our work place.
