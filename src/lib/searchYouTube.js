import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  $.ajax({
    //   // This is the url you should use to communicate with the API server.
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query
    },
    contentType: 'application/json',
    success: callback || function(data) { console.log('Got Data:', data); },
    error: function (data) {}
  });
};

export default searchYouTube;
