# Client Step By Step

## Get a Token

**Request**

```
curl -i http://localhost:8889/oauth/token -X POST -H 'Content-Type: application/json' -d '{"client_id": "abc", "client_secret": "xyz", "grant_type": "client_credentials", "scope": "foo"}'
```

**Response**

```http
HTTP/1.1 200 OK
Content-Length: 100
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache
Date: Tue, 18 Nov 2014 22:32:18 GMT
Server: TornadoServer/4.0.2
Proxy-Connection: keep-alive
Connection: keep-alive

{"token_type": "Bearer", "expires_in": 3600, "access_token": "7d2adcd2-2756-4531-b7d2-69c19f5b1063"}
```

## Consumer Resource

**Request**

```
curl -i http://localhost:8889/foo -H 'Authorization: Bearer 7d2adcd2-2756-4531-b7d2-69c19f5b1063'
```

**Response**

```http
HTTP/1.1 200 OK
Etag: "e8ac30e7653f247f956a04b1f901d893e593cd1b"
Content-Length: 23
Date: Tue, 18 Nov 2014 22:33:15 GMT
Content-Type: text/html; charset=UTF-8
Server: TornadoServer/4.0.2
Proxy-Connection: keep-alive
Connection: keep-alive

{"msg": "This is Foo!"}
```
