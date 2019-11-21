# W9D4 
**Today's learning goals**:

**AJAX Twitter**:

* Know how AJAX requests allow the frontend and backend to communicate
* Be able to change the backend of an app by sending an AJAX request
* Be able to change the frontend of an app with data from an AJAX response
* Be able to write AJAX requests in an API Util file
* Be able to write basic Jbuilder views
* Know the basics of how promises work

**Elaborative Interrogation**:
- How does an AJAX request work?
- How does an AJAX request differ from a standard HTTP request?
- How does AJAX allow the frontend to communicate with the backend and vice versa?
- Why would we want to put our AJAX requests in an API Util file/object?
- How does a promise work?
- How do we tell a promise what to do on a successful request?  A failed request?
- Why would we choose to use `.then` on our promises?
- Why would we want to use AJAX requests?

# Discussion Topics
- Today's flextime will focus mostly on A05. 
    - Aim to spend at most 10-15 minutes on AJAX Twitter, then talk about the assessment. 
- Explain the whole request-response cycle for the `Follow!`/`Unfollow!` button:
  - Need to set everything up first, run this in the project directory:
    ```bash
    npm install && bundle install && bundle exec rails db:setup && bundle exec rails db:seed && be rails s
    ```
  - There are a bunch of debuggers in the frontend code and in the `FollowsController`.
  - Go to a user show page. We will hit two debuggers when we create the `FollowToggle` instance.
  - Click `Follow!`/`Unfollow!` and explain why we hit the debuggers in the frontend and the backend in the order in which we hit them.