#!/usr/bin/python
__author__ = "Diego Garcia"

from threading import Thread
from time import sleep
from random import randint


class MinhaThread(Thread):
    def __init__(self, identificador, vezes):
        self.vezes = vezes
        self.identificador = identificador
        self.suspensa = False
        Thread.__init__(self)

    def parar(self):
        self.suspensa = True

    def run(self):
        while (not self.suspensa) and self.vezes:
            print(
                "[{}] - execucoes restantes: {}".format(self.identificador, self.vezes)
            )
            self.vezes -= 1
            sleep(randint(1, 10))


if __name__ == "__main__":
    lista_threads = []
    for i in range(1, 4):
        t = MinhaThread(i, 10)
        t.start()
        lista_threads.append(t)

    for t in lista_threads:
        sleep(randint(10, 15))
        print("Parando thread {}".format(t.identificador))
        t.parar()
