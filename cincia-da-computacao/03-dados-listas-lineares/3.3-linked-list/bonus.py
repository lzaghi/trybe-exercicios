from linked_list import LinkedList

""" implementar um algoritmo que receba uma LinkedList como
argumento e retorne uma nova lista sem elementos duplicados.
Esta função deve respeitar a complexidade O(n).

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3
"""


def delete_duplicates(linked_list):  # O(n) (no index_of)
    """pressupõe lista ordenada!"""
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


if __name__ == "__main__":
    example = LinkedList()
    example.insert_last(1)
    example.insert_last(1)
    example.insert_last(2)
    example.insert_last(3)
    example.insert_last(3)
    print(example)
    # saida: LinkedList(len=5, value=Node(value=1, next=Node(value=1,
    # next=Node(value=2, next=Node(value=3, next=Node(value=3, next=None))))))
    print(delete_duplicates(example))
    # saida: LinkedList(len=3, value=Node(value=1, next=Node(value=2,
    # next=Node(value=3, next=None))))
