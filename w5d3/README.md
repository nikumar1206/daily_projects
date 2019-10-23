# W5D3

## Core Concepts

- Creating databases with raw SQL
- Indexing
- Joins tables

## Learning Goals

### AA Questions

- Know how to use a SQL script to construct a database
  - Be able to debug SQL syntax errors
- Be able to use queries, written in SQL, in your Ruby code
- Know how a basic ORM (Object-Relational Mapping) system works
- Be able to write SQL queries to solve problems without using Ruby code
  - Be able to use joins instead of Ruby code
  - Be able to use `GROUP BY` and `ORDER BY` instead of Ruby code

## Discussion

- Talk about the general idea behind an ORM: It gives us an abstraction over the data in our database so that we can use Ruby methods to manipulate this data.
- Talk about the difference between Postgres and SQLite: These are different implementations of SQL. The syntax differs at the margins. Most importantly, SQLite is more light-weight because it allows us to store the database locally.
- Talk about the idea behind heredocs, SQL injection attacks, and the two ways of interpolating values.
- Talk through the first two `average_karma` and the concept of an N+1 query.

