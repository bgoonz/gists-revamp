#!/usr/bin/python

import twitter

twitter_username = "you"
twitter_password = "your_pass"

api = twitter.Api(username=twitter_username, password=twitter_password)
[api.DestroyFriendship(user) for user in api.GetFriends()]
