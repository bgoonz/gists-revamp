# -*- coding: utf-8 -*-
import tornado.web
import tornado.httpserver
import tornado.ioloop


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.finish('<h1>Hello World</h1>')


if __name__ == '__main__':
    app = tornado.web.Application([(r'/', IndexHandler)])
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(8000)
    try:
        print('Server Start')
        tornado.ioloop.IOLoop.instance().start()
    except KeyboardInterrupt:
        print('Server Stop')
