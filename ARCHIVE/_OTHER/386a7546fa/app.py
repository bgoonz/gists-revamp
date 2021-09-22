from flask import Flask


app = Flask(__name__)


@app.route('/')
def index():
    return '<h1>Hello From Vagrant</h1>'


if __name__ == '__main_':
    app.run()
