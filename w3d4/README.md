# W3D4

## Core Concepts

- Why use git?
- What are gems?

## Learning Goals

### Screwdoku

- Be able to read a stack trace and work backwards toward the source of your error
- Be able to use a debugger effectively
- Be comfortable using `git branch`, `git checkout`, and `git commit`
- Know how to `git push` to your own Github repo

## Discussion

**A01 Practice Tips**
How to study for Assessment:
- The practice assessment from class and the assessment generator are your best study tools
- Time yourself - when the timer is up, stop working (if you haven't already finished) and look at the solutions.
- Wash, rinse, repeat
- There is a level of memorization, but we should always make sure we know how every line of code we write works.
- As you're practicing, debugging is essential.  READ YOUR ERROR MESSAGES and start to recognize the patterns in the error messages.
- Typing speed can be an issue for some students. Practice your typing speed and accuracy online as a quick study break while you work this weekend, and throughout the course. Even a little bit of time spent practicing every day can mean huge improvements over the course of this cohort.
- Assessment generator: now officially endorsed by App Academy! It's still just a tool (and you may encounter some bugs) but it's a great place to find inspiration for the sort of problems that are fair game. <br>
Anxiety tips:
- Study in the most test-like conditions you can create
- Always practice in a timed environment
- Race one another!
- Get plenty of sleep
- Don't drink coffee (if you can avoid it)
- Arrive early and set up your space the way you want (but you'll always have the full time even if you're late)
- Remind yourself to pay attention when you're stuck. If it's been more than 5 min, move on and come back.  Don't let yourself get stuck.
- Anytime you feel stuck, close your eyes and take one big breath to reset.
- Come to office hours! Tonight from 6-8, Saturday 12-4.

**Fair game for the assessment**
- my_enumerables
- string and array manipulation
- recursion (not subsets, permutations, make_change)
- sorting (bubble, jumble, merge, quick), searching (binary)

**So you've accidentally created nested repos**

- Prepare nested repos:

```bash
dt && mkdir thing && cd thing && git init && mkdir stuff && cd stuff && git init
```

- Remind them that the git information lives inside of `.git`
- Two ways of fixing nested repos:
  - If you haven't committed in `thing` since adding `stuff`, just move `stuff` out of `thing`.
  - Otherwise delete `stuff/.git`: `rm -rf .git` -- explain `rm -rf` (`-r` is for recursive, which is necessary for directories, `-f` is for force, which avoids being prompted for each file in the directory) but tell them that it's dangerous!

**How to push to two remotes**

- Push to first remote
- Optional: Change commit authorship
  - `git filter-branch -f --env-filter "GIT_AUTHOR_NAME='your_full_name'; GIT_AUTHOR_EMAIL='your_email'; GIT_COMMITTER_NAME='your_full_name'; GIT_COMMITTER_EMAIL='your_email';" HEAD`
  - (Change both instances of `your_full_name` to your full name and both instances of `your_email` to your email)
  - Repeat: Only do this once you've pushed everything to the first remote!
  - There's more explanation [here](https://github.com/appacademy/curriculum/blob/master/ruby/readings/git-fix-authorship.md) (from w1d4 Additional Resources).
- Make new repo on GH
- _Don't_ just copy the `git remote add origin <URL>` line! You need to pick a name other than `origin` for the second remote.
- Push to this new remote: `git push <remote name> master`
- Demo all of this with an existing repo (maybe make a quick commit in the `thing` repo from before; change email to a student's email; push to a second repo on your own GH)

**`my_inject`**

- Time permitting, go over the code from the solution. Go through a few examples; there's already debuggers in there.