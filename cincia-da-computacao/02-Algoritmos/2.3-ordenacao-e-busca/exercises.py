from random import shuffle
from Cronometro import Cronometro

# exercicio 1
"""Dado um array com os seguintes elementos ["zebra", "macaco",
"elefante", "arara", "javali"], após duas iterações utilizando
bubble sort, como estaria este array?
"""
itecacao1 = ["macaco", "elefante", "arara", "javali", "zebra"]
iteracao2 = ["elefante", "arara", "javali", "macaco", "zebra"]


# exercicio 2
"""Demonstre o passo a passo do processo de mistura de um array,
sendo ordenado utilizando merge sort. Comece o passo a passo a
partir da linha: 73 54 68 21"""

passo1 = "7 3 5 4 6 8 2 1"
passo2 = "37 45 68 12"
passo3 = "3457 1268"
passo4 = "12345678"


# exercicio 3
"""Execute os algoritmos de ordenação por seleção e inserção, para
as entradas de dados ordenadas, inversamente ordenadas e aleatórias.
Em seguida, compare-os. Faça testes para entradas de tamanho 10.000,
100.000, 1.000.000."""


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i

        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value

    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada " + f"ordenada de {input} números"
        ):
            algorithm(sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada "
            + f"inversamente ordenada de {input} números"
        ):
            algorithm(reversed_sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada " + f"aleatória de {input} números"
        ):
            algorithm(random_numbers)

        print("*" * 50)


# saida

# insertion_sort com entrada ordenada de 10000 números demorou
#   0.002963120999993407 segundos
# insertion_sort com entrada inversamente ordenada de 10000 números demorou
#   12.205738138000015 segundos
# insertion_sort com entrada aleatória de 10000 números demorou
#   4.102443687000232 segundos
# **************************************************
# insertion_sort com entrada ordenada de 100000 números demorou
#   0.01988471100003153 segundos

# o resto nao esperei nao kkkkk demora mttt, atentar q tanto insertion quanto
#   selection sao O(n²) [insertion O(n) no melhor caso apenas]


# exercicio 4
"""Compare o tempo de execução do algoritmo merge_sort e bubble_sort para
uma entrada de 10.000 valores aleatórios. Explique através de análise de
complexidade o que ocorre."""


def bubble_sort(array):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                has_swapped = True
        num_of_iterations += 1

    return array


def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])

    return merge(left, right, array.copy())


def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


for algorithm in (bubble_sort, merge_sort):
    algorithm_name = algorithm.__name__

    numbers = list(range(10_000))
    shuffle(numbers)

    with Cronometro(algorithm_name):
        algorithm(numbers)


# saida

# bubble_sort demorou 10.779639260000295 segundos
# merge_sort demorou 0.04645823200007726 segundos

# casos médios e pior: Bubble é O(n²) e Merge consegue O(n log n) por dividir
#  e conquistar. Melhor caso o Merge mantem e Bubble faz O(n)


# exercicio 5
"""Converta o algoritmo recursivo de busca binária em iterativo."""


def binary_search(array, value):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2
        if array[middle_index] == value:
            return middle_index
        elif array[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    raise ValueError(f"{value} is not in list")


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
target = 10

print(binary_search(array, target))


# exercicio 6
"""Supondo um array de booleanos, descubra o índice onde o erro ocorreu
pela primeira vez.
entrada: [True, True, True, True, False, False, False]  # saída: 4
entrada: [True, True, False, False, False, False, False]  # saída: 2
"""


def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]

print("Saída array1:", find_first_bad_version(array1))
print("Saída array2:", find_first_bad_version(array2))
