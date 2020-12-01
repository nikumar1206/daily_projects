# W6D1

## Discussion

Today was just a study hall, so we won't go over specific questions on the project each student chose. Instead, take questions on the logistics of a03 and answer questions students may have on the practice assessments.

A very important point to highlight is the following:
Run the setup scripts BEFORE writing any code!!!!! If you write code, and then try to run the scripts, it's possible that the scripts won't correctly run and then you're working with an incorrect database/schema. Students have lost 20+ minutes on assessments in the past because of this, so we really want to stress it. 

Some things to point out, if students have no questions:

- Don't let debugging feel mysterious! Remind students that they can see their output with `bundle exec rails c` for ActiveRecord and `bundle exec rails dbconsole` for SQL when working with a Rails app.
- `has_one` vs `has_many`: Change `has_one :parent_commenter` in `rails1-practice-solution/associations/app/models/comment.rb` to `has_many :parent_commenter` and watch the specs fail.
- Some students struggle with tricky association names. Consider the `:likers_comments` association in `rails1-practice-solution/associations/app/models/video.rb`. What do you do if you can't intuit from the name what this should return?
  - Check out the spec: `rails1-practice-solution/associations/spec/video_spec.rb:39`. It asks for the `.first` result, so this must be a `has_many` association. That result must have a `body`; check the schema to see that the only table with a `body` column is `comments`, so that must be our end destination.
  - Whose comments, though? Maybe students can guess from the name (`likers_comments`) that these must be the `comments` of the `likers` (an existing association). If they don't make that connection, explore the database more broadly. The comment needs a body of `first` - who wrote that comment? `gillian`. What's that user's connection to our video? They are the only user who liked this video.
  - This problem is also a good example to remind students that there's no limit on the number of associations that a `:through`/`:source` association can `source` `through`.
- Remember that the ActiveRecord `.joins` method takes the name of an association, *not* the name of a table. Show what happens if we add a `.joins(:castings)` to the query for `susan_supporting_roles` in `rails1-practice-solution/active_record_queries/problems/ar_queries.rb`.
  - The `:castings` association was already joined via the `:actors` association. By now joining the `:castings` association a second time (rather than joining first the `castings` table, then the `actors` table, as you might assume you should), we duplicate the table data and our `.where.not(castings: { ord: 1 })` applies only to one set of the table data.
  - If students are still confused, show them the SQL output of this query - the `castings` table is joined twice, and one is automatically aliased.
- Show an demonstration of copying over a `schema copy.rb` file in case of migration errors.
  - Useful tip: have the schema open as you build associations. You can scan for table names and foreign keys very easily here, even without the annotate gem. Not all students are familiar with the schema at this point.
- How to study for the assessment
  - Actual SQLZoo website is great practice!
