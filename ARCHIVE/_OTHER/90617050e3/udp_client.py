__author__ = 'diego.garcia'

import socket


class UDPClient:
    __IP = '255.255.255.255'
    __PORT = 49152
    __udp_cli = ''

    def __init__(self):
        self.__udp_cli = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
        self.__udp_cli.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, True)
        self.__udp_cli.settimeout(5000)

    def send_msg(self, msg):
        self.__udp_cli.sendto(bytes(msg, "utf-8"), (self.__IP, self.__PORT))
        return self.__udp_cli.recv(256).decode("UTF-8")

    def set_port(self, port):
        self.__PORT = port

    def close(self):
        self.__udp_cli.close()