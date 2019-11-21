const FollowToggle = require('./follow_toggle');
const InfiniteTweets = require('./infinite_tweets');
const TweetCompose = require('./tweet_compose');
const UsersSearch = require('./users_search');

$(function() {
  $('div.infinite-tweets').each((i, tweet) => {
    return new InfiniteTweets(tweet);
  });
  $('form.tweet-compose').each((i, form) => {
    return new TweetCompose(form);
  });
  $('.users-search').each((i, search) => {
    return new UsersSearch(search);
  });
  $('button.follow-toggle').each((i, btn) => {
    return new FollowToggle(btn, {});
  });
});
