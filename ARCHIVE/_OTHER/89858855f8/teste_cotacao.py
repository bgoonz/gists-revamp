__author__ = 'diego.garcia'

import cotacao as cot

cotacao = cot.Cotacao()

print('Hoje estamos com as seguintes contações de moedas estrangeiras')
print('Dolar: R${}'.format(cotacao.dolar()))
print('Euro: R${}'.format(cotacao.euro()))
print('Libra: R${}'.format(cotacao.libra()))

input('Pressione uma tecla para sair...')