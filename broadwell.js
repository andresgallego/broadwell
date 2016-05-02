"use latest";

const Twit = require('twit');
const request = require('request');

module.exports = (ctx, done) => {
  const T = new Twit({
    consumer_key: ctx.secrets.twitter_consumer_key,
    consumer_secret: ctx.secrets.twitter_consumer_secret,
    access_token: ctx.secrets.twitter_access_token,
    access_token_secret: ctx.secrets.twitter_access_token_secret,
    timeout_ms: 60*1000,
  });

  T.get('search/tweets', { q: ctx.data.topic }, (err, data, response) => {
    const tweet = JSON.stringify(data.statuses[0].text);
    const slack_user = ctx.data.user || 'Webtask';

    request({
      url: `https://slack.com/api/chat.postMessage?token=${ctx.secrets.slack_token}&channel=${ctx.data.channel}&username=${slack_user}&text=${tweet}`,
      method: 'POST',
      json: true
    },
      function (error, res, body) {
      done(error, body);
    });
  });
};