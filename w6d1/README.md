# W6D1

## Discussion

Today was just a study hall, so we won't go over specific questions on the project each student chose. Instead, take questions on the logistics of a03 and answer questions students may have on the practice assessments.

Some highlights, if students have no questions:

- `has_one` vs `has_many`: Change `has_one :exchange` in `a03_prep1_solution/assoc-solution/app/models/board.rb` to `has_many :exchange` and watch the specs fail.
- Go over `chris_is_missed` in `a03_prep1_solution/sql-solution/lib/movie_sql.rb`:
  - This is analogous to Julie Andrews.
  - Show `SELECT *` of whole table. Every actor has a row with every co-star. We're picking rows where one actor is Chris, and the other actor is the lead.
  - Start with just `JOIN` statements, then add `WHERE` filters one by one.
- For associations, point out that all the information getting tested comes from the code they have. A good example is in `a03_prep1_solution/assoc-solution/app/models/board_membership.rb`. The `board_membership` table has a `member_id` foreign key, so it must belong to a member. How do we know where to find that member, if there is no `members` table?
  - Comment out the `class_name: 'Executive'` in `board_membership.rb` and run `be rspec spec/models/board_membership_spec.rb:11` and watch it fail. We see we expect the associated `member` to have a `name`, `"Larry Page"`. Larry isn't created in the spec file, so that information comes from our seeds.
  - Show them they can search for that name in the seed file and find it on line 57 - Larry is an `Executive`, so that must be the associated class. Feel free to do this on all the specs - we aren't testing you on whether you can intuit the structure we're describing, we're testing you on how you code associations! To that end, please ask if there's anything you don't understand about the setup from the readme (eg, what is a subsidiary?)
  - Useful tip: have the schema open as you build associations. You can scan for table names and foreign keys very easily here, even without the annotate gem. Not all students are familiar with the schema at this point.
- How to study for the assessment
  - Actual SQLZoo website is great practice!
