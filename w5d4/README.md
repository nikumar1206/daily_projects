# W5D4

## Core Concepts

- rails g migration <columns>
- Associations
- belongs_to/has_many
- Through Associations
- Validations
- Migrations

## Learning Goals

### Associations Exercise

- Understand what an ActiveRecord association represents
- Know when to use `has_many` vs. `belongs_to`
- Be able to write `has_many` and `belongs_to` associations
- Know what variables to use as `primary_key`, `foreign_key`, and `class_name`
- Know how to use ActiveRecord associations to return associated objects

### URL Shortener

- Be able to create a new Rails project
- Be able to navigate a Rails project using the keyboard
- Be able to change the database using migrations
- Be able to write both database constraints and model-level validations
- Be able to write associations
- Understand the purpose of adding an index to columns in our database

## Discussion

- Start by talking about the associations exercise project:

  - Drill the general rule: If the table corresponding to ModelOne has a foreign key pointing to the table corresponding to ModelTwo, then instances of ModelOne belong to instances of ModelTwo and instances of ModelTwo have one or many instances of ModelOne! If ModelOne == ModelTwo, then instances of ModelOne belongs to and has many/one instance(s) of ModelOne.
  - `bi` and `be rails db:setup` in `solutions/associations_exercise`. Go into the Rails console, grab the first user, and call `enrollments` on it. We get a `ActiveRecord_Associations_CollectionProxy` object. This is an array-like object, even though it only contains one member. If we knew that students ever only have one enrollment, then we could change the `has_many` association to a `has_one`. Show that now we return an instance of `Enrollment`. This is also a good time to point out that the association name is arbitrary. We could have a `has_one :enrollments` association, but `has_one :enrollment` makes more sense of course.
  - Add a `taught_courses` association in the `User` model:

    ```ruby
    has_many :taught_courses,
      class_name: :Course,
      foreign_key: :instructor_id,
      primary_key: :id
    ```

    This illustrates that a model can be related to a different model in multiple ways (`taught_courses` and `enrolled_courses` in this case).

  - Add a `taught_students` association:
    ```ruby
    has_many :taught_students,
      through: :taught_courses,
      source: :enrolled_students
    ```
    This illustrates that we can chain through associations.

- Take questions on URL shortener project.


