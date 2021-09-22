# -*- coding: utf-8 -*-
import falcon


class Index():
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = '{"msg": "Hello World"}'


app = falcon.API()

app.add_route(r'/', Index())


if __name__ == '__main__':
    from wsgiref import simple_server
    httpd = simple_server.make_server('127.0.0.1', 8000, app)
    httpd.serve_forever()
