**Today's learning goals**:

- Be able to write auth from scratch without looking at previous solutions
- Know how to use a `before_action` to manage user access to resources
- Be able to write Rails models, controllers, and views quickly
- Know when to use regular associations and when to use join tables
- Know how to avoid N+1 queries

**Discuss:**

- If you feel like you have some folks in your circle that really need to go
  back to basics, review the routes.

  - Why do we only need certain routes (i.e. new) nested?
  - Are we able to nest certain routes, and unnest others?
  - Can we have multiple routes go to the same action?

- Review more advanced forms, specifically checkboxes:

  - In `app/views/posts/_form.html.erb`, show them the hidden input and the
    `input type="checkbox"` and talk about how they interact with

    - the `sub_ids: []` in the `post_params` in the `PostController`
    - and the `has_many :post_subs, inverse_of: :post` in the `Post` model to
      allow us to post a post to multiple subs.

  - For the empty hidden input, is it okay that it has a value of an empty
    string?
    - Yes, rails ignores this and treats it as an empty array.

- Nested comments (only if significant number of students reach this part). Look
  at:
  - `app/views/comments/_comment.html.erb`
  - `comments_by_parent` method in `Post` model
- Polymorphic associations (only if a significant number of students reach
  votable). Look at:
  - `db/migrate/20170703203953_create_user_votes.rb`
  - `app/models/concerns/votable.rb`
  - Vote method in `CommentsController`
