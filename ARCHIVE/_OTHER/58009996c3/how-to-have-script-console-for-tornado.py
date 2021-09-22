# --------------------------------------------------
# app.py        - nothing special here
# --------------------------------------------------
import tornado.httpserver
import tornado.ioloop
import tornado.web


class Application(tornado.web.Application):
    def __init__(self):
        pass


if __name__ == "__main__":
    application = Application()

    # Start App Server
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8888)
    tornado.ioloop.IOLoop.instance().start()


# --------------------------------------------------
# boot.py       - instantiate app object
# --------------------------------------------------
import sys, os.path

ROOT = "/tornado/app/root/path"
sys.path.append(ROOT)

from app import *

app = Application()

#
# How to include app into Python interactive console?
#
# in your .profile, add the following export:
#
# export PYTHONSTARTUP=/tornado/app/root/path/boot.py
#
# Note: don't forget to source .profile
#
# Once you start the interactive console, app will be available.
