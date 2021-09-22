import muffin


app = muffin.Application('cmdline')


@app.manage.command
def hello(name: str, upper=False):
    """
    Print a simple hello msg

    :param name: Your name :)
    :param upper: Show msg in uppercase
    """
    msg = 'Hello {}'.format(name)
    if upper:
        msg = msg.upper()
    print(msg)

"""
$ muffin muffin_command_line hello Diego --upper
HELLO DIEGO

$ muffin muffin_command_line hello Diego
Hello Diego

$ muffin muffin_command_line hello -h
usage: muffin hello [-h] [--upper] name

Print a simple hello msg

positional arguments:
  name        Your name :)

optional arguments:
  -h, --help  show this help message and exit
  --upper     Enable show msg in uppercase
"""