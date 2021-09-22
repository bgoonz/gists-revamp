# -*- coding: utf-8 -*-
from bottle import route, run


@route('/')
def index():
    return '<h1>Hello World/h1>'


run(host='localhost', port=8000)
