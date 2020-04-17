# W5D5

Let's start off with the usual:

- Greatest achievements this week? What are you proud of?
- Greatest challenge?

# Assessment
- Practice is live
- Office hours tomorrow (12-4)
- Do the practice at least 5 times!
- Take the practice in FULL at least once tonight so you can come to office tomorrow with context
- ActiveRecord queries will use the same DB as movie buff
- Associations will be explained in the README.
- Recommend sections in the following order
  - Migrations
  - Associations
  - SQL
  - ActiveRecord
- Migrations and associations have the most points/min so these are best to start with.
- Show students how to fix their migrations portion if they screw it up
  - Delete migrations folder
  - Copy contents of `schema copy.rb` into `schema.rb`
  - Run `./setup_db.sh`
- 

## Core Concepts

- Includes vs Joins

## Learning Goals

### Movie Buff

- Be able to write complicated ActiveRecord queries
  - Become familiar with more of ActiveRecord's functionalities
- Know how to test and debug ActiveRecord queries

### Polls

- Be able to write migrations with indices and constraints
  - Know how to fix the effects of incorrect migrations
- Be able to write associations
- Know how to seed a project's database
- Be able to write custom validations in the model
- Be able to solve the N+1 query problem

## Discussion

- Students write and test more advanced ActiveRecord queries in the movie buff project
  - Manually test queries by running the code in the Rails console
  - Chain `.to_sql` on the end of queries to inspect the SQL query that ActiveRecord makes under the hood
- Students write their own migrations and models in the polls app project
  - Show students the schema and the seed file, to summarize what the database looks like and what we're putting into it
  - Walk through what's going on in each of the models
    - `presence` and `uniqueness` validations (Rails 5 automatically validates the presence of `belongs_to` associations)
    - Review the steps for the custom validation `not_duplicate_response` in `response.rb`
      - `Response#sibling_responses` gives us all other responses besides our own to the question being asked
      - `Response#respondent_already_answered?` uses `sibling_responses` to see if the current answerer has already answered this question
      - `Response#not_duplicate_response` takes care of introducing the error if the respondent had already responded
  - Poll results in `question.rb` is first written with an N + 1 query
    - Get all `answer_choices` for a question, then call `responses.count` for each
    - Next use `includes` to pre-fetch at the same time as the `answer_choices` for two SQL queries instead
    - Finally improve code to the solution by transferring only the number of responses to the client, not the entire responses themselves




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