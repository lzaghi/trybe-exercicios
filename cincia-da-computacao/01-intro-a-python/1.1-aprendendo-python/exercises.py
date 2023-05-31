import math


# exercicio 1
def get_higher_number(num1, num2):
    if num1 > num2:
        return num1
    return num2


# exercicio 2
def get_average(number_list):
    sum = 0
    for number in number_list:
        sum += number
    return sum / len(number_list)


# exercicio 3
def make_square(n):
    count = 0
    while count < n:
        print(n * "*")
        count += 1


# def draw_square(n):
#     for row in range(n):
#         print(n * "*")


# exercicio 4
name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def get_biggest_name(list):
    biggest = list[0]
    for name in list:
        if len(name) > len(biggest):
            biggest = name
    return biggest


# exercicio 5
def get_amount_ink(meters_square):
    liters = meters_square / 3
    cans = math.ceil(liters / 18)
    total = cans * 80

    return (cans, total)


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = required_liters // 18
#     if required_liters % 18:
#         required_cans += 1
#     return required_cans, required_cans * can_price


# exercicio 6
def check_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side1 + side3 > side2
        and side2 + side3 > side1
    )

    if not is_triangle:
        return "não é um triângulo"
    elif side1 == side2 == side3:
        return "é um triângulo equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "é um triângulo isósceles"
    else:
        return "é um triângulo escaleno"


# bonus 1
number_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def get_smallest(list):
    smallest = list[0]
    for number in list:
        if number < smallest:
            smallest = number
    return smallest


# def smallest(list):
#     return min(list)


# bonus 2
def draw_triangle(n):
    for row in range(n):
        print((row + 1) * "*")


# def draw_triangle(n):
#     for row in range(1, n + 1):
#         print(row * '*')


# bonus 3
def summation(n):
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum


# def summation(limit):
#     return sum(range(1, limit + 1))


# bonus 4
def calculate_fuel(liters, type):
    literA = 1.9
    literG = 2.5
    if type == "A":
        if liters <= 20:
            return liters * 0.97 * literA
        else:
            return liters * 0.95 * literA
    else:
        if liters <= 20:
            return liters * 0.96 * literG
        else:
            return liters * 0.94 * literG


# def fuel_price(type, liters):
#     if type == "A":
#         price = 1.90
#         discount = 0.03
#         if liters > 20:
#             discount = 0.05
#     elif type == "G":
#         price = 2.50
#         discount = 0.04
#         if liters > 20:
#             discount = 0.06
#     total = price * liters
#     total -= total * discount
#     return total
