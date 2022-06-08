/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
  followUser: id => {
    debugger;
    return APIUtil.changeFollowStatus(id, 'POST');
  },

  unfollowUser: id => {
    debugger;
    return APIUtil.changeFollowStatus(id, 'DELETE');
  },

  changeFollowStatus: (id, method) => {
    debugger;
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method,
    });
  },

  searchUsers: query => {
    return $.ajax({
      data: { query: query },
      url: '/users/search',
      dataType: 'json',
      method: 'GET',
    });
  },

  createTweet: data => {
    return $.ajax({
      url: '/tweets',
      method: 'POST',
      dataType: 'json',
      data,
    });
  },

  fetchTweets: data => {
    return $.ajax({
      url: '/feed',
      method: 'GET',
      dataType: 'json',
      data,
    });
  },
};

module.exports = APIUtil;


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
  constructor(el, options) {
    debugger;
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState =
      this.$el.data('initial-follow-state') || options.followState;
    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    debugger;
    const followToggle = this;

    event.preventDefault();

    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        debugger;
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        debugger;
        followToggle.followState = 'followed';
        followToggle.render();
      });
    }
  }

  render() {
    debugger;
    switch (this.followState) {
      case 'followed':
        this.$el.prop('disabled', false);
        this.$el.html('Unfollow!');
        break;
      case 'unfollowed':
        this.$el.prop('disabled', false);
        this.$el.html('Follow!');
        break;
      case 'following':
        this.$el.prop('disabled', true);
        this.$el.html('Following...');
        break;
      case 'unfollowing':
        this.$el.prop('disabled', true);
        this.$el.html('Unfollowing...');
        break;
    }
  }
}

module.exports = FollowToggle;


/***/ }),

/***/ "./frontend/infinite_tweets.js":
/*!*************************************!*\
  !*** ./frontend/infinite_tweets.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

// const _ = require('lodash');

class InfiniteTweets {
  constructor(el) {
    this.$el = $(el);
    this.lastCreatedAt = null;

    this.$el.on('click', '.fetch-more', this.fetchTweets.bind(this));
    this.$el.on('insert-tweet', this.insertTweet.bind(this));
  }

  fetchTweets(event) {
    event.preventDefault();

    const infiniteTweets = this;
    const data = {};
    if (this.lastCreatedAt) data.max_created_at = this.lastCreatedAt;

    APIUtil.fetchTweets(data).then((data) => {
      infiniteTweets.insertTweets(data);

      if (data.length < 20) {
        infiniteTweets.$el
          .find('.fetch-more')
          .replaceWith('<b>No more tweets!</b>');
      }

      if (data.length > 0) {
        infiniteTweets.lastCreatedAt = data[data.length - 1].created_at;
      }
    });
  }

  insertTweet(event, data) {
    this.$el.find('ul.tweets').prepend(this.tweetElement(data));

    if (!this.lastCreatedAt) {
      this.lastCreatedAt = data.created_at;
    }
  }

  insertTweets(data) {
    this.$el.find('ul.tweets').append(data.map(this.tweetElement));
  }

  tweetElement(tweet) {
    const mentions = tweet.mentions.map(mention =>
      `<li class='tweetee'>
        <a href='/users/${mention.user.id}'>@${mention.user.username}</a>
      </li>`)
      .join('');

    const elementString = `
    <div class='tweet'>
      <h3 class='tweeter'>
        <a href='/users/${tweet.user.id}'>
          @${tweet.user.username}
        </a>
      </h3>
      
      <p>${tweet.content}</p>
      
      <ul>Mentions
        ${mentions}
      </ul>
    </div>`

    return $(elementString);
  }

}

module.exports = InfiniteTweets;


/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$input = this.$el.find('textarea[name=tweet\\[content\\]]');
    this.$input.on('input', this.handleInput.bind(this));

    this.$mentionedUsersDiv = this.$el.find('.mentioned-users');
    this.$el.find('.add-mentioned-user').on(
      'click', this.addMentionedUser.bind(this));
    this.$mentionedUsersDiv.on(
      'click', '.remove-mentioned-user', this.removeMentionedUser.bind(this));

    this.$el.on('submit', this.submit.bind(this));
  }

  addMentionedUser(event) {
    event.preventDefault();

    this.$mentionedUsersDiv.append(this.newUserSelect());
  }

  clearInput() {
    this.$input.val('');
    this.$mentionedUsersDiv.find('ul').empty();
    this.$el.find(':input').prop('disabled', false);
    this.$el.find('.char-left').empty();
  }

  handleInput(event) {
    const inputLength = this.$input.val().length;

    this.$el.find('.char-left').text(`${140 - inputLength} characters left`);
  }

  handleSuccess(data) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));
    $tweetsUl.trigger('insert-tweet', data);

    this.clearInput();
  }

  newUserSelect() {
    const userOptions = window.users
      .map(user =>
        `<option value='${user.id}'>${user.username}</option>`)
      .join('');

    const html = `
      <div>
        <select name='tweet[mentioned_user_ids][]'>
          ${userOptions}
        </select>

        <button class='remove-mentioned-user'>Remove</button>
      </div>`;

    return $(html); 
  }

  removeMentionedUser(event) {
    event.preventDefault();
    $(event.currentTarget).parent().remove();
  }

  submit(event) {
    event.preventDefault();
    const data = this.$el.serializeJSON();
    
    this.$el.find(':input').prop('disabled', true);

    APIUtil.createTweet(data).then(tweet => this.handleSuccess(tweet));
  }
}

module.exports = TweetCompose;


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users');

    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    if (this.$input.val() === '') {
      this.renderResults([]);
      return;
    }
    APIUtil.searchUsers(this.$input.val()).then(users =>
      this.renderResults(users)
    );
  }

  renderResults(users) {
    this.$ul.empty();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      let $a = $('<a></a>');
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      const $followToggle = $('<button></button>');
      debugger;
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: user.followed ? 'followed' : 'unfollowed',
      });

      const $li = $('<li></li>');
      $li.append($a);
      $li.append($followToggle);

      this.$ul.append($li);
    }
  }
}

module.exports = UsersSearch;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
const InfiniteTweets = __webpack_require__(/*! ./infinite_tweets */ "./frontend/infinite_tweets.js");
const TweetCompose = __webpack_require__(/*! ./tweet_compose */ "./frontend/tweet_compose.js");
const UsersSearch = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js");

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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map