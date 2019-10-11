# W3D5

## Core Concepts

- DFS
- Graphs and Nodes

## Learning Goals

### PolyTreeNode

- Know how to implement a polytree using polytree nodes
- Know how to implement BFS and DFS for your polytree
- Be able to explain the differences between BFS and DFS and when one might be preferred

### Knights Travails

- Be able to implement your PolyTreeNode to build a path from start to finish
- Know how to store and traverse a tree
- Know when and why to use BFS vs. DFS

## Discussion

**Ice breaker and recapping the week** (5:20)

- What was the best lunch you ate this week? (ice breaker)
- What was the biggest challenge/struggle this week?
- What was your greatest achievement this week?
- What's something cool you learned from a pair this week?

Take a moment to imagine how your life changes when you're a software developer. How does it change? How is it different? Share if you feel so inclined. Keep this in mind; this is the goal we're all working toward.
- TAs: take note of what they share.

**Review today's projects** (5:35)
Pick from among the following:

- Review `PolyTreeNode#parent=`- all node pointer logic handled in this method, add_child/remove_child just invoke this method.
- Review dfs and bfs: The solutions define these as a module, which `PolyTreeNode` includes---explain how that works. Also, the solutions have dfs and bfs take an optional block. Take this as an opportunity to review blocks and procs.
- Review `build_move_tree` - Knight Path Finder builds the move tree with a breadth-first approach providing the shortest path
  - It hits each position on the board first when it is the least number of moves from the starting position.
  - Indicate that when we search for the node, whether dfs or bfs, it does not affect the path we return from the trace path back method.
  - Once we find the node, it doesn't matter what order we went in to find it, the path back to start will be the same, and will be the shortest because we built the tree in a breadth-first manner.

Note: how long should you spend before calling a TA if you're stuck?
- At this point in the course, you can call over TAs whenever you're feeling like you're out of ideas, or when you need guidance for how to start. There's no minimum amount of time you have to spend debugging before hitting the question button (yet)! There is a maximum - if you've been stuck for 20 minutes, call us over, and feel free to insist at this point even if your partner is reluctant. It's important to practice debugging, but it's also important not to get discouraged and to spend most of your time productively.

**Studying for the assessment** (5:50)

- What's fair game:
  - Sorting algorithms we've seen (merge sort, bubble sort, quick sort) and our searching algorithm (binary search). Be able to do them all with procs.
  - Simple recursive algorithms. Let's not give a specific subset of recursive problems that are fair game but instead tell them that they should feel comfortable with all the recursion exercises we did on W1D3. Make change, subsets, and permutations may not be on the assessment but thinking about them will help your brain.
  - Common enumerable methods (select, reject, inject, each, map, any, all, none)
  - Array and String manipulations of all kinds.
- REMIND THEM THAT THE FOCUS OF THIS PART OF THE COURSE IS TO LEARN HOW TO BE A RUBY MASTER AND THE ASSESSMENTS ARE TOOLS TOWARDS THAT END.
  - Several students are already feeling tense about the dismissal policy. Help them understand why we use assessments - it's not that we're being arbitrarily mean.
- How are you going to study for the assessment?

Let's make sure we get to the last question about studying for the assessment. We can close off by giving some tips of our own:

- A lot of people come into the office to study over the weekends. Those people usually end up doing the best both on assessments and also in the job search, and help each other out.
- If you can't come to the office, at least be on Slack. People will likely collect all the questions that could be on the assessment and send them out on there.
- Form groups and study together. The real assessment is going to be similar to the practice but may use other similar problems that they've already seen, so everyone in the group can pull up those similar problems and distribute them within the group.
- Broken practice assessment (will be sent out at EOD), practice debugging under pressure!!! VERY IMPORTANT!
- Race yourself to finish the practice assessment faster and faster. Or race others! Finish it within half the allotted time.
- Study by solving problems with code, not by simply trying to memorize code you've seen.
- Stress that these study habits are the habits that we've seen work for hundreds of people. If you want to do something else, by all means, do them, but definitely also do this.
- Finally, tell them to practice typing if they feel like they aren't as fast as they'd like to be or are prone to make a lot of typos. Even just 15 minutes of typing practice a day can do wonders. The EOD email will contain a link to a game where you can practice typing.
