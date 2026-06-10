import connection as cn
import numpy as np


s=cn.connect(2037)
q_table = np.loadtxt(r'C:\Users\beatr\Desktop\PROJETO Q-LEARNING\Qlearning-main\resultado.txt')


estado_string, recompensa=cn.get_state_reward(s, "left")
if estado_string.startswith("0b"):
    estado_string = estado_string[2:]

estado_atual=int(estado_string, 2)
num_episodios=1

for episodio in range(num_episodios):
    for i in range(200):
        coluna=np.argmax(q_table[estado_atual])
        if coluna == 0:
            acao = "left"
        elif coluna == 1:
            acao = "right"
        else:
            acao = "jump"

        novo_estado, recompensa=cn.get_state_reward(s, acao)
        novo_estado=int(novo_estado, 2)
        estado_atual=novo_estado