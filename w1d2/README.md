# W1D2

## Core Concepts

- RSpec
- Exceptions

## Discussion

Most students will have finished the projects early today (some very early). Talk about this for a little while - during foundations, if the material clicks for you and your partner, you'll probably have time left at the end of the day. You can spend it in the following ways:

- on old projects: did everything from yesterday and the day before make sense to both of you? Keep working on any projects you didn't finish. Review any material from today or days before that you don't feel rock solid on.
- on the additional material: we'll send out links to external resources where you can practice the skills you've been building even further. For now, that's extra Ruby problems on HackerRank, which is a website you'll probably encounter on the job search.
- on the next day's homework: if (and only if) both partners have finished every project in foundations so far, and you've worked through the additional resources or we haven't sent you additional resources for the day, you may get started on the night's homework. Remember never to work on the next day's projects until you're with your partner for that day!

Reiterate our motivations for test-driven development and draw their attention to particularly interesting problems from today.

- `caesar_cipher` in `rspec_exercise_1_solution/lib/part_2.rb`
- `palindrome?` and `substrings` (and then `palindrome_substrings` in `rspec_exercise_2_solution/lib/part_2.rb`

Remind them how they can test individual files and lines:

- `bundle exec rspec`
- `bundle exec rspec spec/00_part_1_spec.rb`
- `bundle exec rspec spec/00_part_2_spec.rb:4` tests the whole `describe "palindrome?"` block: ie, every test for the method
- `bundle exec rspec spec/00_part_2_spec.rb:10` runs just one test in the `palindrome?` method