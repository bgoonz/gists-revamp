import asyncio

import muffin


@asyncio.coroutine
def version_middleware(app, handler):
    @asyncio.coroutine
    def middleware(request):
        response = yield from handler(request)
        response.headers['X-Version'] = '1.0'
        return response
    return middleware


app = muffin.Application(
    'middleware_example',
    middlewares=(version_middleware,)
)


@app.register('/')
def version(request):
    return 'check version in http header!'


if __name__ == '__main__':
    app.manage()
"""
$ curl -i http://localhost:5000/
HTTP/1.1 200 OK
CONTENT-TYPE: text/html; charset=utf-8
CONTENT-LENGTH: 29
X-VERSION: 1.0
CONNECTION: keep-alive
DATE: Sun, 08 Nov 2015 00:38:38 GMT
SERVER: Python/3.4 aiohttp/0.18.3

check version in http header!
"""