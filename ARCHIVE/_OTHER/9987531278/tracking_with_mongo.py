__author__ = "Diego Garcia"

from pymongo import MongoClient
import ptracking


def make_tracking(cod, user, package):
    t = ptracking.PyTracking(ptracking.BRAZIL)
    p = t.tracking(cod)
    p["package"] = package
    p["user_name"] = user
    p["cod"] = cod
    return p


def insert_or_update(collection, info):
    if collection.find_one({"cod": info["cod"], "user_name": info["user_name"]}):
        collection.update(
            {"cod": info["cod"], "user_name": info["user_name"]}, {"$set": info}
        )
    else:
        collection.insert(info)


def send_to_mongo(collection, cod, user, package):
    p = make_tracking(cod, user, package)
    insert_or_update(collection, p)


client = MongoClient("localhost", 27017)
db = client["rigby"]
packages = db.packages

user_name = "drgarcia1986"

send_to_mongo(packages, "LJ928527406US", user_name, "Boston Strangler LP")
send_to_mongo(packages, "LZ168724835US", user_name, 'Peacebreakers 7"')

cursor = packages.find({"user_name": user_name})
for doc in cursor:
    print(doc)

###OUTPUT###
# {'user_name': 'drgacia1986', 'tracking': [{'time': '02/04/2014 05:30 PM', 'status': 'Entrega Efetuada', 'location': 'CDD BELENZINHO - SAO PAULO/SP'}, {'time': '02/04/2014 10:11 AM', 'status': 'Saiu para entrega ao destinatário', 'location': 'SAO PAULO/SP'}, {'time': '22/02/2014 01:41 PM', 'status': 'Encaminhado', 'location': 'ESTADOS UNIDOS', 'observation': 'Em trânsito para UNIDADE DE TRATAMENTO INTERNACIONAL - BRASIL'}, {'time': '21/02/2014 04:09 PM', 'status': 'Postado', 'location': 'ESTADOS UNIDOS'}, {'time': '22/02/2014 01:41 PM', 'status': 'INTERNATIONAL DISPATCH READY', 'location': '11430'}, {'time': '22/02/2014 10:12 AM', 'status': 'PROCESSED THROUGH USPS SORT FACILITY', 'location': 'JAMAICA NY 11430'}, {'time': '21/02/2014 06:07 PM', 'status': 'DISPATCHED TO SORT FACILITY', 'location': 'PROVIDENCE RI 02909'}, {'time': '21/02/2014 04:09 PM', 'status': 'ACCEPT OR PICKUP', 'location': 'PROVIDENCE RI 02909'}, {'time': '21/02/2014 02:06 PM', 'status': 'Electronic Notification', 'location': '02909'}], '_id': ObjectId('533f8400dafd7d07b07fbb5d'), 'package': 'Boston Strangler LP', 'cod': 'LJ928527406US'}
# {'user_name': 'drgacia1986', 'tracking': [{'time': '20/03/2014 01:14 PM', 'status': 'Encaminhado', 'location': 'UNIDADE TRAT INTERNACIONAL SAO PAULO - SAO PAULO/SP', 'observation': 'Em trânsito para FISCALIZACAO ADUANEIRA - FISCALIZACAO ADUANEIRA/BR'}, {'time': '20/03/2014 01:13 PM', 'status': 'Conferido', 'location': 'UNIDADE TRAT INTERNACIONAL SAO PAULO - SAO PAULO/SP', 'observation': 'Recebido/Brasil  '}, {'time': '20/03/2014 01:12 PM', 'status': 'Encaminhado', 'location': 'UNIDADE TRAT INTERNACIONAL SAO PAULO - SAO PAULO/SP', 'observation': 'Em trânsito para FISCALIZACAO ADUANEIRA - FISCALIZACAO ADUANEIRA/BR'}, {'time': '20/03/2014 01:11 PM', 'status': 'Conferido', 'location': 'UNIDADE TRAT INTERNACIONAL SAO PAULO - SAO PAULO/SP', 'observation': 'Recebido/Brasil  '}, {'time': '09/02/2014 11:09 AM', 'status': 'Encaminhado', 'location': 'ESTADOS UNIDOS', 'observation': 'Em trânsito para UNIDADE DE TRATAMENTO INTERNACIONAL - BRASIL'}, {'time': '06/02/2014 02:42 PM', 'status': 'Postado', 'location': 'ESTADOS UNIDOS'}], '_id': ObjectId('533f8401dafd7d07b07fbb5e'), 'package': 'Peacebreakers 7"', 'cod': 'LZ168724835US'}
