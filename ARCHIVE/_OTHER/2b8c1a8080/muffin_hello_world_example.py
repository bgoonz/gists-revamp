import muffin


app = muffin.Application('hello_world')


@app.register('/')
def hello(request):
    return 'Hello World!'


if __name__ == '__main__':
    # python muffin_hello_world_example.py run
    app.manage()