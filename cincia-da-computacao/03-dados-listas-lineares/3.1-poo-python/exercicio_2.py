from collections import Counter


class Estatistica:
    def __init__(self, numbers: list[int]) -> None:
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        numbers = sorted(self.__numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2
        return numbers[index]

    def moda(self):
        # Counter traz dicionário number:contagem
        # most_common traz lista de tuplas (number, contagem), decrescente
        number, _ = Counter(self.numbers).most_common()[0]
        return number
