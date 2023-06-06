# exercicio 1
"""Crie um algoritmo não recursivo para contar quantos
números pares existem em uma sequência numérica (1 a n)."""


def iterative_counter(n: int) -> int:
    even_numbers = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            even_numbers += 1
    return even_numbers


# exercicio 2
"""Transforme o algoritmo criado acima em recursivo."""


def recursive_counter(n: int) -> int:
    if n <= 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_counter(n - 1)
    else:
        return recursive_counter(n - 1)


# exercicio 3
"""Crie um algoritmo recursivo que encontre, em uma lista,
o maior número inteiro."""


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


# exercicio 4
"""Escreva um algoritmo recursivo para encontrar o máximo divisor comum
(mdc) de dois inteiro"""


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


if __name__ == "__main__":
    print(iterative_counter(10))
    print(recursive_counter(10))
    print(maiorinteiro([1, 21, 300, 4, 57]))
    print(mdc(3, 19))
