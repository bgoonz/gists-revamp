# -*- coding: utf-8 -*-
import urllib.request
import re

resp = urllib.request.urlopen("http://dolarhoje.com/").read()
resp = resp.decode("utf-8")

dolar = re.search(r'<input type="text" id="nacional" value="(?P<dolar>[^"]+)"/>', resp)

if dolar:
    print("US$ 1,00 vale R$ {}".format(dolar.group(1)))
else:
    print("Não foi possível converter o dolar =(")
