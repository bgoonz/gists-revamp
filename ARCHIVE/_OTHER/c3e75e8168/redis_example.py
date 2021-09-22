>>> import redis
>>> import pickle
>>> rserver = redis.Redis(host='localhost', port=6379)
>>> rserver.set('foo', 'bar')
True
>>> rserver.get('foo')
b'bar'
>>> rserver.set('foo', pickle.dumps({'foo': 'bar'}))
True
>>> pickle.loads(rserver.get('foo'))
{'foo': 'bar'}
>>> rserver.rpush('foo-list', 'e1')
1
>>> rserver.rpush('foo-list', 'e2')
2
>>> rserver.lpop('foo-list')
b'e1'
>>> rserver.lpop('foo-list')
b'e2'