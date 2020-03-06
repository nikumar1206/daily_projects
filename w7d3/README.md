**Today's learning goals**:
* Know how to write model and controller tests using RSpec
* Know how to write integration tests using Capybara and RSpec
* Know what and when to test
* Understand how to test behavior rather than implementation
* Learn to develop one feature at a time (the 'slices' approach)
* Recognize how concerns and polymorphic associations can dry up your code
* Be able to build User Auth without looking at old code or demos

## Discussion

You probably won't spend a lot of flex time today talking about Capybara; most will be towards A04 prep. 

There are a couple questions that you should pose to the circle: 

Q: Why do we test our code?
+ Ensure that the code we write is behaving the way we expect it to.
+ Make development easier. We can refactor our code and our tests will let us know if we are good or if we broke something. 
+ Make collaboration smoother. Anyone who touches the code base will need to make sure the code they contribute passes all of the existing tests, and provide new tests for any new functionality that was added. 
+ Documenation! Tests describe how parts of our app should be behaving, which is essentially documentation of our app. 

Q: What is Capybara?
+ Capybara is a Ruby library for end-to-end testing, which allows us to test things like UI interactions by simiulating these things (ex: "When a user clicks on a link to the 'Log In' form, do they see the correct form with the right input fields" or "When a user fills out the Log In form with correct credentials, does it redirect them to the cats index page?").

Q: Why is it important?
+ End-to-end testing is an important part of testing your app. It's time-consuming to manually verify that each path a user might take in your app is verified to work; Capybara can help you automate this. 

## A04 Prep

### Things to know, and can or will show up (note: not exhaustive list)
+ Auth from scratch! 
+ Know about input types, ex:`input type="text"`
+ Know the importance of using html tags, specifically `label`, `textarea`, and `input`
+ Rendering errors in your views
+ Putting authenticity tokens in your forms (`<input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">`)
+ Table column types of boolean (know default values; see: https://thoughtbot.com/blog/avoid-the-threestate-boolean-problem)
+ Handle nested `new` or nested `create` or neither nested (see https://github.com/appacademy/cohort-resources/blob/master/study_guides/rails/nested_routes.md)

### Study Tips

Good resource on this: https://github.com/appacademy/cohort-resources/blob/master/assessment_tips/a04/assessment4_notes.md

* Take the practice at least 8 times, preferrably 10. If you are unsure, do 10. You'll have 2 hours for this, and by having this repetition in place, you will get used all the steps involved in creating a rails app with auth. 
  * It takes some time to get used to various bugs you will encounter, as well as getting the rails workflow really down. It is **critical** that you get many reps in for this assessment.
  * Always take A04 in it's entirety. Don't take breaks or stop after a certain point. We want to get used to being able to do the entire test in one sitting.
  * As a warning, the first time may take a while (potentially much longer than the allotted 2 hours)! It _will_ get faster as you get more familiar with the process. 
  
* Keep a bug journal! If you encounter a bug, write down where you are (aka are you in the user model writing user auth?) and what the error message is. When you solve it, write down the issue and how it was fixed.

# Additional Topics 

  - Like we say for every assessment, you should strive for understanding. Really ask yourself why we're doing every piece of the auth pattern.
  - You may be inclined to try to memorize the whole pattern but we do not recommend that. You can use some mnemonic devices to help you remember what methods you need for the User model for example (FGRIPE). You should still understand why you need each method, but memorizing the names might be helpful.
  - The test is more than just the auth pattern! Make sure you are comfortable with views and controllers and models and how they all work together at a high level.
  - Make sure to understand how Capybara finds elements on the page. In `a04p_solution/app/views/sessions/new.html.erb`, if we make the label `username` (lower case) or if we remove the `for` from the label, Capybara won't be able to find the input.
  - There will be an optional assessment walkthrough on Monday in two parts, first during study hall and then over lunch.
