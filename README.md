# Post the latest tweet about any query parameter to a slack channel using Auth0 webtasks

With [Auth0 Webtasks](https://webtask.io) you can post to a slack channel the latest tweet about any query parameter without worrying about backend.

Follow these 3 steps:

```bash
npm install -g wt-cli
wt init
wt create https://raw.githubusercontent.com/andresgallego/broadwell/master/broadwell.js \
    --secret slack_token={your_slack_admin_token} \
    --secret twitter_consumer_key={your_twitter_consumer_key} \
    --secret twitter_consumer_secret={your_twitter_consumer_secret} \
    --secret twitter_access_token={your_twitter_access_token} \
    --secret twitter_access_token_secret={your_twitter_access_token_secret}
```
And you should be given a URL. Visit it in you're browser or console of choice and add the next parameters to the end of the address

```bash
$ curl https://webtask.it.auth0.com/api/run/<yours>/broadwell?webtask_no_cache=1&channel=<your_channel>&user=<username>&topic=<query>
```

If you don't provide the user parameter, it will set it to default "Webtask" username, the other parameters are required.
