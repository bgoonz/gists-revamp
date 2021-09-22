from http.server import BaseHTTPRequestHandler, HTTPServer


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200, "OK")
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"message": "hello world"}')


if __name__ == "__main__":
    server = HTTPServer(("", 8080), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.socket.close()
