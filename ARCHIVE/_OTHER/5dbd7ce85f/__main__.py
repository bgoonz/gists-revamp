# !/usr/bin/env python
# -*- coding: utf-8 -*-
__author__ = "Diego Garcia"

import tornado.web
import tornado.ioloop
import oauth2.tokengenerator
import oauth2.grant
import oauth2.store.redisdb
import oauth2.store.mongodb
import json
import time
import fakeredis
import mongomock


class OAuth2Handler(tornado.web.RequestHandler):
    # Generator of tokens (with client authentications)
    def initialize(self, controller):
        self.controller = controller

    def post(self):
        response = self._dispatch_request()

        self._map_response(response)

    def _dispatch_request(self):
        request = self.request
        request.post_param = lambda key: json.loads(request.body.decode())[key]

        return self.controller.dispatch(request, environ={})

    def _map_response(self, response):
        for name, value in list(response.headers.items()):
            self.set_header(name, value)

        self.set_status(response.status_code)
        self.write(response.body)


class BaseHandler(tornado.web.RequestHandler):
    def initialize(self, controller):
        self.controller = controller

    # authenticate tokens
    def prepare(self):
        try:
            token = self.get_argument("access_token", None)
            if not token:
                auth_header = self.request.headers.get("Authorization", None)
                if not auth_header:
                    raise Exception("This resource need a authorization token")
                token = auth_header[7:]

            key = "oauth2_{}".format(token)
            access = self.controller.access_token_store.rs.get(key)
            if access:
                access = json.loads(access.decode())
            else:
                raise Exception("Invalid Token")
            if access["expires_at"] <= int(time.time()):
                raise Exception("expired token")
        except Exception as err:
            self.set_header("Content-Type", "application/json")
            self.set_status(401)
            self.finish(json.dumps({"error": str(err)}))


class FooHandler(BaseHandler):
    def get(self):
        self.finish(json.dumps({"msg": "This is Foo!"}))


def main():
    # Populate mock
    mongo = mongomock.MongoClient()
    mongo["db"]["oauth_clients"].insert(
        {
            "identifier": "abc",
            "secret": "xyz",
            "redirect_uris": [],
            "authorized_grants": [oauth2.grant.ClientCredentialsGrant.grant_type],
        }
    )
    # MongoDB for clients store
    client_store = oauth2.store.mongodb.ClientStore(mongo["db"]["oauth_clients"])

    # Redis for tokens storage
    token_store = oauth2.store.redisdb.TokenStore(rs=fakeredis.FakeStrictRedis())

    # Generator of tokens
    token_generator = oauth2.tokengenerator.Uuid4()
    token_generator.expires_in[oauth2.grant.ClientCredentialsGrant.grant_type] = 3600

    # OAuth2 controller
    auth_controller = oauth2.Provider(
        access_token_store=token_store,
        auth_code_store=token_store,
        client_store=client_store,
        site_adapter=None,
        token_generator=token_generator,
    )
    auth_controller.token_path = "/oauth/token"

    # Add Client Credentials to OAuth2 controller
    auth_controller.add_grant(oauth2.grant.ClientCredentialsGrant())

    # Create Tornado application
    app = tornado.web.Application(
        [
            (r"/oauth/token", OAuth2Handler, dict(controller=auth_controller)),
            (r"/foo", FooHandler, dict(controller=auth_controller)),
        ]
    )

    # Start Server
    app.listen(8889)
    print("Server Starting")
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
