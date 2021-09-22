__author__ = "diego.garcia"

import urllib.request as req
import re


class Cotacao:
    def __get_cotacao(self, url, regex='^.*nacional" value="([0-9,]+)"'):
        pagina = req.urlopen(url)
        s = pagina.read().decode("utf-8")

        m = re.match(regex, s, re.DOTALL)
        if m:
            return float(m.group(1).replace(",", "."))
        else:
            return 0

    def dolar(self):
        return self.__get_cotacao("http://dolarhoje.com/")

    def euro(self):
        return self.__get_cotacao("http://eurohoje.com/")

    def libra(self):
        return self.__get_cotacao("http://librahoje.com/")
