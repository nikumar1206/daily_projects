# W1D5

## Core Concepts

- Review

## Discussion

Break early to spend as much time as necessary discussing logistics for the first remote assessment. 

After going over all assessment related questions, spend any remaining time going through as much of today's projects as students like. Also make sure to cover each bullet point on the assessment check-in list.

<!-- Only if 50+ students: Since Zoom supports at most 50 breakout rooms, students will split into groups depending on pod so that each can have their own room on the assessment. Students should confirm on Progress Tracker which pod they are in and await a link in the Slack channel on Monday morning.  -->


## PREPPING FOR ASSESSMENT
* Go through all of the material from this week (esp anything you're not comfortable with)
* Go through study guide available under w1d5
* Use RSpec Exercise 3 and RSpec Exercise 4 as practice assessments (plus the practice from Thursday). 
  * Set a timer for 45 min, attempt test, when done note time and repeat several times!
  * The goal is to complete it in half the given time
  * Look at the other RSpec exercises for extra practice
* Make sure you're comfortable running and reading specs
* Try other ways of writing the method to test your understanding, don't just memorize

## TEST TAKING PROCEDURES
* We'll assign each to their own room, where they'll keep their cameras on and screen share their whole desktop.
* Instructors will routinely move through each room, but if they have questions, students can request help through Zoom (not through Progress Tracker).
* FA1 will be 45 minutes
* Pass is generally ~80 - 85% for most assessments in App Academy
* They are designed to be 100% passable!
* Assessment will be available under the assessment tab on PT
* Download the assessment, rename your assessment with first and last name
* Open assessment in vscode
* Run `bundle install` in your terminal
* Run `bundle exec rspec` in your terminal
* Run specs as many times as you'd like
* Recommend running the specs after done with your assessment
* After 45 min they'll submit via PT and take a short break. We'll all rejoin in the main classroom after and begin the day's assignment.

## During assessment
* You will be required to share your screen with audio on Zoom during the assessment (not vscode live share). 
  * Failing to do so will result in a fail.
* If you live with another AA student, please make sure you are in separate rooms
* No slack, no googling, no second monitors. Instructors will hop around breakout rooms.

## COMMON BUGS
* syntax errors -> read stack trace
* syntax errors can prevent your specs from running and can throw a bundler issue
* no method errors for misspelled method names
* If any part of your code throws and error, all your specs will fail because of this spec:
  ```
    it "should accept an array and a block as args" do
      expect { my_map([1,2,3,4]) { |n| n * n } }.to_not raise_error
    end
  ```

## Debugging
* re-reading your code to debug can lead to confirmation bias
* use debugger to walk through your code
* use pry to test out code
* comment parts of your code out to determine which line caused bug