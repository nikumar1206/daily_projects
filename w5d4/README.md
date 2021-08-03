# W5D4

## Core Concepts

- rails g migration <columns>
- Associations
- belongs_to/has_many
- Through Associations
- Validations
- Migrations

What is a migration? How does it relate to the schema? 
-rails way of setting up our database
-it is like the import file we wrote yesterday in our DIY ORM
-create columns in our tables and columns, add db constraints, indicies, etc 
-the migrations we run create our schema
-a schema is a blueprint of our database, it gets updated by our migrations.  we don't edit our schema directly 
    -db:setup runs off the schema, if they ask 

Why are migrations valuable for project collaboration? 
 -they allow other develops to see what changes have been made to the database
 -migrations build upon the database, they allow us to stay in sync and everyone has a consistant record of changes made to the DB

What are different types of associations and how do they differ?
-belongs_to, associated with our foreign keys
-has_many, these are the other side of the belongs_to
-has_one, like has many but just referencing one element. 
----
-has_many_through, which are multi-table joins associations
-belongs_to and has many can stand alone 

How does an association relate to the SQL language? 
-they are our way of creating joins between tables in rails

What is a model? Why do we use models?
-they are Ruby classes that represent our tables and allow us to make class instances from data in our tables

Why do we use database and model level validations? 
-these are two separate levels of validation, independent of each other
-db level validation protect the database, this is more important so that developers don't mess with the tables
-model level validations are usually what user facing activity will hit
-it's important to have both for 2 levels of security 

What is an options hash and why do we use them? 
-these are the arguments that are passed into the belongs_to, has_many (optional: true, etc), and in our validations.  It allows us to pass specificaitons dynamically without worrying about order


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


