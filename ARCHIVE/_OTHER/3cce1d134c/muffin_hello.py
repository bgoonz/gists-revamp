# -*- coding: utf-8 -*-
import muffin


app = muffin.Application("hello")


@app.register("/")
def products(request):
    return {"hello": "world"}
