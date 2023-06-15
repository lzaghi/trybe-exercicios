from double_linked_list import DoubleLinkedList

""" implementar um algoritmo que receba uma DoublyLinkedList como
argumento e retorne uma nova lista sem elementos duplicados.
Esta função deve respeitar a complexidade O(n).

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2
"""


def delete_duplicates(linked_list):  # O(n)
    """pressupõe lista ordenada!"""
    list_with_unique_elements = DoubleLinkedList()
    aux = None

    while linked_list:
        current_node = linked_list.remove_first()
        if (
            linked_list.index_of(current_node.value) == -1
            and aux != current_node.value
        ):
            list_with_unique_elements.insert_last(current_node.value)
        else:
            aux = current_node.value

    return list_with_unique_elements


if __name__ == "__main__":
    example = DoubleLinkedList()
    example.insert_last(1)
    example.insert_last(1)
    example.insert_last(2)
    example.insert_last(3)
    example.insert_last(3)
    example.insert_last(4)
    example.insert_last(5)
    example.insert_last(5)
    example.insert_last(6)
    print(example)
    # saida: DoubleLinkedList(len=5, head=1, tail=3)
    print(delete_duplicates(example))
    # saida: DoubleLinkedList(len=3, head=1, tail=3) [ver pelo len dai]
