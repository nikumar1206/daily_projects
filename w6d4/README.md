# W6D4

## Core Concepts

- Polymorphic associations
- Nested routes
- JSON API
- Params methods/hash

## Learning Goals

### Art Share API

- Be able to write Active Record models quickly
- Know how to write a `user_params` method
- Be able to write the five API RESTful controller methods
- Know how to test your API endpoints with Postman
- Know how to create and destroy join table records via controller methods
- Know how a nested route works

## Discussion

- Go over the early parts of the project if students didn't get a chance to see everything yesterday. It's particularly important that all students have a good understanding of routes, controllers, and the roles they play in an HTTP req/res cycle.
  - Go over the `config/routes.rb` file again now that students have spent a little more time here. It may be useful to explore `member` (and its counterpart `collection`) and how they generate nested routes. Show the custom routes and how they correspond to new actions in their controllers.
- Review `ArtworksController#index` and how it can render differently depending on params. When everyone is on board with this, review the same for `UsersController#index` and show how a query string can function as a search.
- Discuss the polymorphic associations present for `likes`. Check the database level (`likeable_type` and `likeable_id` working in concert), the model level (`belongs to: likeable, polymorphic: true` connects `User`s to `Artwork`s or `Comment`s), and the controllers (there is no `LikesController`, but artworks and comments both get custom methods from our `routes.rb` file).