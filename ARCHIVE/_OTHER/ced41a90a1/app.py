#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, redirect, abort, jsonify, url_for, request
import string
import random

app = Flask("encolinks")

links = {}
        
def gerador_id():
    chars = string.uppercase + string.lowercase + string.digits
    return ''.join(random.choice(chars) for _ in range(6))


@app.route("/encolher")
def encolher():
    id = gerador_id()
        
    link = request.args.get('url', '')
    if link == '':
        abort(500)
        
    links[id] = {"url": link, "qtd": 0}
    return redirect(url_for('info', link=id), 301)    
        

@app.route("/<link>")
def redirecionar(link):
    try:
        destino = links[link]["url"]
        links[link]["qtd"] += 1
        return redirect(destino, 301)
    except KeyError:
        return abort(404)


@app.route("/info/<link>")        
def info(link):
    try:
        return jsonify(links[link])
    except KeyError:
        return abort(404)


@app.route("/lista")
def lista():
    return jsonify(links)

app.run(debug=True, use_reloader=True)
