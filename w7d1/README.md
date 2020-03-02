**Today's learning goals**:
* Be able to create a user authentication system
  * Know the user model's methods that are required for authentication
    * `reset_session_token`, `password=`, `is_password?`, `find_by_credentials`
  * Know what it means to create and destroy a session
  * Know how cookies and sessions interact in a `current_user` method
  * Know how to access the current user from within a view

**Go through the whole auth pattern!**
There are a bunch of debuggers in the controllers, models, and views. `bundle install && be rails db:setup && rails db:seed`. Go through the sign up/log out/log in process very slowly, explaining every step.