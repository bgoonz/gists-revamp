# !/usr/bin/env python
# -*- coding: utf-8 -*-
__author__ = "Diego Garcia"

import tornado.ioloop
import tornado.web
from bson.json_util import dumps
from pymongo import Connection
from bson.objectid import ObjectId
from gridfs import GridFS


class ImageHandler(tornado.web.RequestHandler):
    def initialize(self):
        self.fs = GridFS(Connection()["database"], "imgs")

    def get(self, img_id):
        image = self.fs.get(ObjectId(img_id))
        self.set_header("Content-type", image.content_type)
        self.set_header("Content-length", image.length)
        self.write(image.read())
        self.finish()

    def post(self):
        image = self.request.files["files"][0]["body"]
        tipo = self.request.headers["Content-Type"]
        img_id = self.fs.put(image, content_type=tipo)
        self.write(dumps({"img_id": img_id}))
        self.finish()


application = tornado.web.Application(
    [(r"/img/?", ImageHandler), (r"/img/([^/]+)?", ImageHandler)]
)

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
