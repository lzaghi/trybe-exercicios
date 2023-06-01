import random
import json
import csv


# exercicio 1
def name_stair(name):
    max = len(name)
    while max >= 0:
        for position in range(max):
            print(name[position], end="")
        if max > 0:
            print()
        max -= 1


# name_stair("PEDRO")


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# vertical_inverted_ladder("PEDRO")


# exercicio 2 e 3
# --- para pegar palavras de um arquivo (1 palavra por linha)
# with open("file.txt") as file:
#       words = [word.strip() for word in file]


words = ["PRESUNTO", "COMPRIMIDO", "ANTARTICA", "CADERNETA"]


def random_word_game():
    palavra = random.choice(words)
    embaralhada = "".join(random.sample(palavra, len(palavra)))

    errors = 0
    while errors < 3:
        tentativa = input(f"desembaralhe a palavra -> {embaralhada}: ")
        if tentativa.upper() == palavra.upper():
            print("Você acertou!")
            break
        else:
            errors += 1
            if errors == 1:
                print("Errou... Você ainda tem 2 tentativas!")
            if errors == 2:
                print("Errou... Você ainda tem 1 tentativa!")
            if errors == 3:
                print(
                    f"Errou... Acabaram suas chances :( -> Resposta: {palavra}"
                )


# random_word_game()


# exercicio 4
def books_json_to_csv():
    with open("books.json") as books_file:
        books = json.load(books_file)

    total_books = len(books)

    books_by_categories = {}

    for book in books:
        for category in book["categories"]:
            if category in books_by_categories:
                books_by_categories[category] += 1
            else:
                books_by_categories[category] = 1

    for category in books_by_categories:
        books_by_categories[category] /= total_books

    with open("categories_report.csv", "w", encoding="utf-8") as file:
        writer = csv.writer(file)

        headers = ["categoria", "porcentagem"]
        writer.writerow(headers)

        for category in books_by_categories:
            row = [category, books_by_categories[category]]
            writer.writerow(row)

    # with open("categories_report.csv", "r", encoding="utf-8") as file:
    #     categories_csv = csv.DictReader(file)

    #     cat_dict = {}
    #     for row in categories_csv:
    #         cat = row["categoria"]
    #         pct = row["porcentagem"]

    #         cat_dict[cat] = pct


# books_json_to_csv()


# exercicio 5
def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


# exercicio 6
def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")

    # validate username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                "Username should contain only letters, "
                "digits, dashes or underscores"
            )
        index += 1
    index += 1  # @
    # validate website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters, and digits")
        index += 1

    index += 1  # .
    # validate extension
    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None


# exercicio bonus
def pokemon_game():
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]

        random_pokemon = random.choice(pokemons)["name"]

    wrong_guess = True
    guesses = 0

    while wrong_guess:
        guesses += 1

        guess = input("Quem é esse pokemon? ")

        if guess == random_pokemon:
            print("Você acertou! Parabéns!")
            wrong_guess = False
        elif guesses == len(random_pokemon):
            print(f"Você errou! -> {random_pokemon}")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, guesses):
                print(random_pokemon[i], end="")
            print("")


pokemon_game()
