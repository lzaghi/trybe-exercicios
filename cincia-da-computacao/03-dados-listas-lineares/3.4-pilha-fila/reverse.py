from stack_ex import Stack


def reverse_word(stack):
    char = ")"
    reversed_word = []
    while char != "(":  # O(n)
        char = stack.pop()
        if char != "(":
            reversed_word.append(char)

    for letter in reversed_word:  # O(n)
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:  # O(n)
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():  # O(n)
        reversed_phrase.append(stack.pop())

    return "".join(reversed(reversed_phrase))


print(reverse_letters("teste(lagel)"))
print(reverse_letters("(abcd)"))
print(reverse_letters("(u(love)i)"))
print(reverse_letters("(ed(et(oc))el)"))
print(reverse_letters("a(bcdefghijkl(mno)p)q"))
