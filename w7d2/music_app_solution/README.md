# W7D2 

## Learning Goals
- Be able to build User Auth without looking at old code or demos
- Know how to nest routes 
- Be able to link between different views using `a` tags and rails URL helpers
- Be able to trigger controller actions from views using forms and links
- Know how to check that a current user exists before displaying content


## Music App 
- Start by taking any questions on auth.
- Show them how to refactor create note form to use nested routes: Nest note resources under track -> delete hidden input from `app/views/note/_form.html.erb` -> remove `track_id` from `note_params` in `NotesController` and manually set it in `create`.
- Explain `ugly_lyrics`, especially the use of `html_safe` in `app/helpers/application_helper.rb`
- When to use hidden inputs for ids: Never use it for `user_id`. In `app/views/note/_form.html.erb` we use it for `track_id`, which is fine.
- Talk about why it's better to validate associations instead of ids. See `app/models/album.rb` for an example.

## Discussion
- Ask for common bugs and review any topics that students seem to be stuggling with. Try to reproduce the bug if possible.
- We want them to know HOW to use the `debugger` in rails. Show them examples of how to debugger controller actions and such.
    - Emphasize where they should put `debugger`s 
    - For example, if the user isn't saving, you should drop a debugger in the `if/else` statements so you can see the errors with `@<resource>.errors.full_messages`. 
- Reinforce to them that Rails Olympics does not count and they will not be tested on AR Quering for A04. 
- A04 is released tonight and they should take a look at it. 