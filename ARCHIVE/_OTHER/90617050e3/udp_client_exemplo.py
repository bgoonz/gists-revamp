__author__ = 'diego.garcia'

import udp_client

udpClient = udp_client.UDPClient()

print('Para sair use "fim"')
msg = input('Digite a mensagem a ser enviada\n')

while msg != 'fim':
    print(udpClient.send_msg(msg))
    msg = input('Digite a mensagem a ser enviada\n')

udpClient.close()