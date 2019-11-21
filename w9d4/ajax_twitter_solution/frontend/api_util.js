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
