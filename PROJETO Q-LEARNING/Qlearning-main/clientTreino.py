import connection as cn
import numpy as np
import random


s=cn.connect(2037)
q_table = np.loadtxt(r'C:\Users\beatr\Desktop\PROJETO Q-LEARNING\Qlearning-main\resultado.txt')

#parâmetros
epsilon=float(np.loadtxt(r'C:\Users\beatr\Desktop\PROJETO Q-LEARNING\Qlearning-main\progresso_epsilon.txt'))
alpha=0.2
gamma=0.9 
epsilon_min=0.05
decay_rate=0.999999

estado_string, recompensa=cn.get_state_reward(s, "jump")
if estado_string.startswith("0b"):
    estado_string = estado_string[2:]

estado_atual=int(estado_string, 2)
num_episodios=60

#parte do código que decide se explora ou não explora
for episodio in range(num_episodios):
    for i in range(200):
        if random.random()<epsilon:
            acao=random.choice(["left","right","jump"])
            if acao=="left":
                coluna=0
            elif acao=="right":
                coluna=1
            else:
                coluna=2
        else:
            coluna=np.argmax(q_table[estado_atual])
            if coluna == 0:
                acao = "left"
            elif coluna == 1:
                acao = "right"
            else:
                acao = "jump"

    #hora de executar o que foi escolhido acima e ganhar uma recompensa
        novo_estado, recompensa=cn.get_state_reward(s, acao)

        if novo_estado.startswith("0b"):
            novo_estado = novo_estado[2:]
        novo_estado=int(novo_estado, 2)
        
    #equacao de bellman
        valor_antigo=q_table[estado_atual][coluna]
        melhor_futuro=np.max(q_table[novo_estado])
        nova_estimativa=recompensa + (gamma*melhor_futuro)
        novo_valor=valor_antigo+alpha*(nova_estimativa - valor_antigo)
    #atualização da tabela
        q_table[estado_atual][coluna]=novo_valor

        estado_atual=novo_estado

    #decaindo o epsilon pra ele se tornar menos aleatório a cada vez que for executado
    if epsilon>epsilon_min:
        epsilon*=decay_rate

    #salvando o epsilon e resultado.txt para poder não perder o progresso
    np.savetxt(r'C:\Users\beatr\Desktop\PROJETO Q-LEARNING\Qlearning-main\resultado.txt', q_table, fmt="%f")
    np.savetxt(r'C:\Users\beatr\Desktop\PROJETO Q-LEARNING\Qlearning-main\progresso_epsilon.txt', np.array([epsilon]), fmt="%f")