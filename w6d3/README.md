# W6D3

### Elaborative Interrogation
1. What are the components of an http request? (Describe each.)
2. What does the router do? 
3. What is a route (what are its components)?
4. What are the 3 ways to send information in a request?
5. What are the components of an http response?
6. What is a Controller? What is its job in the MVC framework?
8. How long does any given Controller instance, and the data that it uses (local variables), persist in memory?
9. Which controller actions "read" from the database, and which ones "write" to it?
10. Which controller actions typically need to use strong params, and why?
11. What are strong params and why do we use them? 
12. How can we access request information in the controller?

## Core Concepts

- What is an API
- HTTP request/response
- Route mapping to controller action
- REST

## Learning Goals

### First Routes and Controllers

- Be able to create routes in `routes.rb`
- Be able to read and understand Rails server error messages
- Know the three places that `params` come from
- Be able to nest query parameters
- Be able to write controller actions that read from and write to the database
- Know how and when to render errors

### Art Share API

- Be able to write Active Record models quickly
- Know how to write a `user_params` method
- Be able to write the five API RESTful controller methods
- Know how to test your API endpoints with Postman
- Know how to create and destroy join table records via controller methods
- Know how a nested route works

## Discussion

- Talk about how to read routes. How do they connect to the controller?
- Validating/constraining one column in scope of other column (in the `create_artwork_shares` migration and the `ArtworkShare` model)
- Validating association instead of `foreign_key`: ensures that the associated object actually exists in the database (will run a query). Mention that before Rails 5 they were not auto validated, and optional true
- Artworks #index action: Put most of logic in the model
- Params/Controller review
  - Ensure everyone knows what to expect from `params` with various requests
  - Ask:
    - What is `params`?
    - What are strong params?
  - Show: The params hash inside of a controller action with a `debugger`
- Nested routes: Only need to nest :index action for artworks because we will only ever show a list of artworks based on the user. We will never show all the artworks in the entire database.
  - If you really wanted to have a non-nested 'index' page, you could add a non-nested index route for works and then do this in the `ArtworksController`:
    ```ruby
    def index
      if params[:user_id]
        render json: Artwork.artworks_for_user_id(params[:user_id])
      else
        render json: Artwork.all
      end
    end
    ```
    (The local solutions already have this.)
- Remind: HTTP is stateless. Our instances of the controller only exist as long as the request and response cycle.
