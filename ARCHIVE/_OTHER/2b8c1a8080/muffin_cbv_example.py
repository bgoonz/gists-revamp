import muffin


app = muffin.Application("cbv")


@app.register("/hello", "/hello/{name}")
class Hello(muffin.Handler):
    def get(self, request):
        name = request.match_info.get("name")
        if name:  # /hello/foo for example
            return {"hello": name}
        name_query = request.GET.get("name", "anonymous")
        return {"hello": name_query}

    def post(self, request):
        data = yield from request.json()
        return {"data_posted": data}


if __name__ == "__main__":
    app.manage()
