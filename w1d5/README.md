# W1D5

## Core Concepts

- Review

## Discussion

Break early to spend as much time as necessary discussing logistics for the first remote assessment.

Since Zoom supports at most 50 breakout rooms, students will split into groups depending on pod so that each can have their own room on the assessment. Students should confirm on Progress Tracker which pod they are in and await a link in the Slack channel on Monday morning. We'll assign each to their own room, where they'll keep their cameras on and screen share their whole desktop. Instructors will routinely move through each room, but if you have questions, students can request help through Zoom (and not through Progress Tracker, since they'll be paired that day).

Students have one hour to finish the test, after which they'll submit via PT and take a short break. We'll all rejoin in the main classroom after and begin the day's assignment.

Go through as much of today's practice assessments as students like. Of particular note:

- `char_replace!` in `assessment_1_solution/lib/part_2.rb` uses a dangerous method. Explain what that is and show how the specs can help us avoid some common mistakes (like returning the right value but not mutating the original, or reassigning the `str` variable inside the method).
- `my_one?` in `assessment_2_solution/lib/part_1.rb` has a neat one line solution that includes an example 
- `hash_select` has an example of `prc.call` taking two values instead of one, since our original procified block expects two parameters.
- `xor_select` takes two Proc objects as arguments, and calls them multiple times.