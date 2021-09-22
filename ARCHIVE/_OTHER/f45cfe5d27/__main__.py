import logging
import json
import urllib3
import sys


class Liker():
    __URL_API = 'https://graph.facebook.com/v2.2'
    __URL_ME = '/me?fields=id'
    __URL_HOME = '/me/home?fields=from,likes'
    __URL_LIKE = '/{}/likes'

    def __init__(self, token, guarded):
        self.log = logging.getLogger("liker")
        self.token = token
        self.guarded = guarded
        self.http_client = urllib3.PoolManager()
        self.me = self.get_scope_id()
    
    def build_url(self, resource):
        return '{}{}{}access_token={}'.format(self.__URL_API, 
                                              resource,
                                              '&' if '?' in resource else '?',
                                              self.token)

    def get_scope_id(self):
        self.log.info('get scope id for me')
        url = self.build_url(self.__URL_ME)
        response = self.http_client.urlopen(url=url, method='GET')
        return json.loads(response.data.decode())["id"]

    def like(self, post_id):
        self.log.info('make a like in post {}'.format(post_id))
        url_like = self.__URL_LIKE.format(post_id)
        url = self.build_url(url_like)
        response = self.http_client.urlopen(url=url, method='POST')
        return response.status == 201

    def get_timeline(self):
        self.log.info('getting timeline')
        url = self.build_url(self.__URL_HOME)
        response = self.http_client.urlopen(url=url, method='GET')
        if response.status == 200:
            return json.loads(response.data.decode())['data']
    
    def filter_posts(self, posts):
        self.log.info('filter posts of {}'.format(self.guarded))
        posts_from_guarded = [{"id": p['id'], "likes": [l['id'] for l in p['likes']['data']]} for p in posts if p['from']['id'] == guarded]
        self.log.info(posts_from_guarded)
        posts_to_like = []
        for p in posts_from_guarded:
            try:
                p['likes'].index(self.me)
            except ValueError:
                posts_to_like.append(p['id'])
        return posts_to_like

    def run(self):
        try:
            timeline = self.get_timeline()
            posts = self.filter_posts(timeline)
            for post in posts:
                self.like(post)
        except Exception as err:
            self.log.error(str(err))


if __name__ == "__main__":
    logging.basicConfig(level=logging.ERROR,
                        format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                        datefmt='%m-%d %H:%M',
                        filename='/etc/liker.log',
                        filemode='w')
    guarded = sys.argv[1]
    token = sys.argv[2]
    liker = Liker(token, guarded)
    liker.run()
