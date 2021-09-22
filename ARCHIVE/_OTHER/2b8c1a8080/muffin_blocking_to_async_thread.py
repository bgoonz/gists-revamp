from concurrent.futures import ThreadPoolExecutor
import time

import muffin


app = muffin.Application("hello_world")


def get_msg():
    time.sleep(5)
    return "foo"


@app.register("/")
def msg(request):
    with ThreadPoolExecutor(max_workers=2) as executor:
        msg = yield from request.app.loop.run_in_executor(executor, get_msg)
    return msg


if __name__ == "__main__":
    app.manage()
