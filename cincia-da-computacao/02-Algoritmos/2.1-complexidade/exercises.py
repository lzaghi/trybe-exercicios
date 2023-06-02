import random

# exercicio 1
# Dado um array de números de tamanho n, escreva um algoritmo que retorna
# true se há no array um número duplicado e false caso contrário
""" O algoritmo ordena o array independente de qualquer coisa, então
o seu pior caso, melhor caso e caso médio são, no mínimo,
complexidade do algoritmo de ordenação do Python. Vendo a documentação,
vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior
caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)"""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number
    return False


# exercicio 2
# gerar um array com 100 números. Cada um deve ser a média de n números
# gerados aleatoriamente.
""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que
o valor da constante `100`, para valores de `n` grandes o valor da constante
se torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a
complexidade de espaço é constante, ou seja, `O(1)`"""


def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


# exercicio 3
# Dado um array de doces candies e um valor inteiro extra_candies, onde o
# candies[i] representa o número de doces que a enésima criança possui. Para
# cada criança, verifique se há uma maneira de distribuir doces extras entre
# as crianças de forma que ela possa ter o maior número de doces entre elas
"""Para os três casos, utilizando a função `max()` do Python, a
complexidade será O(n). A lista abaixo da função `max()` também é
executada em O(n). Ou seja, O(n) + O(n) = O(n). A complexidade de espaço
também é O(n), pois quanto mais crianças temos, maior vai ser o tamanho da
lista gerada. Faça a analise de complexidade de espaço também."""


def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))
