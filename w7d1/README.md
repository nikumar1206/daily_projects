**Today's learning goals**:
* Be able to create a user authentication system
  * Know the user model's methods that are required for authentication
    * `reset_session_token`, `password=`, `is_password?`, `find_by_credentials`
  * Know what it means to create and destroy a session
  * Know how cookies and sessions interact in a `current_user` method
  * Know how to access the current user from within a view

**Questions** 
- What is a cookie and why do we use them?
  + Cookies are files of up to 4kbs in size that your browser uses to persist data between http requests. The information on the cookie is stored in key value pairs and the cookie gets send with every request to the server, beck and forth.
- What are the cookies that rails provides for us? 
  + The session cookie that we used today and the flash cookie.
- What does it mean to be logged into our web app? 
  + To be logged in means to have the session_token key-value pair on the session cookie equal to the session_token a user has stored in the db.
- Why do we need the auth token? 
  + We need the auth token to identify us and create the logged in state. We hstore the token on the session cookie to persist the logged
 _in state between (stateless) http requests.
- How can we tell if the user input the correct password? 
  + We can do so by constructing a BCrypt object from our saved password_digest and use the built in bcrypt method of is_password? / use '==' with the object and the plain text password.
- How do we determine who the current user is? 
   + By using find_by with the key of session_token, and the value for that key would come from the session cookie (User.find_by(session_token: session[:session_token])
- Explain what happens when we log a user out. 
  + We reset the session token for the user in the db, and we nullify the session_token key on the session cookie.

**Go through the whole auth pattern!**
- There are a bunch of debuggers in the controllers, models, and views. `bundle install && be rails db:setup && rails db:seed`. Go through the sign up/log out/log in process very slowly, explaining every step.
- If there is time, go over `before_action` 
