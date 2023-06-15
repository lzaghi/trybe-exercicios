class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

    def __str__(self):
        return f"Node(value={self.value}, next={self.next}, prev={self.prev})"


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"""DoubleLinkedList(len={self.__length},
        head={self.head.value}, tail={self.tail.value})"""

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_node = Node(value)
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node
        self.__length += 1

    def insert_at(self, value, position):
        if position <= 0:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_node = self.__get_node_at(position)
        new_node = Node(value)
        new_node.prev = current_node.prev
        new_node.next = current_node
        current_node.prev.next = new_node
        current_node.prev = new_node
        self.__length += 1

    def remove_first(self):
        if self.is_empty():
            return None

        value_to_be_removed = self.head
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
            self.head.prev = None
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def remove_last(self):
        if self.is_empty():
            return None

        value_to_be_removed = self.tail
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.tail = self.tail.prev
            self.tail.next = None
        value_to_be_removed.prev = None
        self.__length -= 1

        return value_to_be_removed

    def remove_at(self, position):
        if position <= 0:
            return self.remove_first()
        if position >= len(self) - 1:
            return self.remove_last()

        node_to_be_removed = self.__get_node_at(position)
        node_to_be_removed.prev.next = node_to_be_removed.next
        node_to_be_removed.next.prev = node_to_be_removed.prev
        node_to_be_removed.prev = None
        node_to_be_removed.next = None
        self.__length -= 1

        return node_to_be_removed

    def get_element_at(self, position):
        if position < 0 or position >= len(self):
            return None

        node = self.__get_node_at(position)
        return node.value

    def is_empty(self):
        return self.__length == 0

    def clear(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def __get_node_at(self, position):
        if position < 0 or position >= len(self):
            return None

        current_node = self.head
        for _ in range(position):
            current_node = current_node.next

        return current_node

    def index_of(self, value):
        index = 0
        current_node = self.head

        while current_node:
            if current_node.value == value:
                return index
            current_node = current_node.next
            index += 1

        return -1


if __name__ == "__main__":
    doubled_linked_list = DoubleLinkedList()

    print(doubled_linked_list.is_empty())  # saída: True
    doubled_linked_list.insert_first(1)
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=1, head=1, tail=1)

    doubled_linked_list.insert_first(2)
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=2, head=2, tail=1)

    doubled_linked_list.insert_last(3)
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=3, head=2, tail=3)

    doubled_linked_list.remove_last()
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=2, head=2, tail=1)

    doubled_linked_list.remove_first()
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=1, head=1, tail=1)

    doubled_linked_list.insert_at(5, 1)
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=2, head=1, tail=5)

    doubled_linked_list.remove_at(0)
    print(doubled_linked_list)
    # saída: DoubleLinkedList(len=1, head=5, tail=5)

    doubled_linked_list.insert_at(6, 1)
    doubled_linked_list.insert_at(7, 2)
    doubled_linked_list.insert_at(8, 3)
    doubled_linked_list.insert_at(9, 4)
    print(doubled_linked_list.get_element_at(3))  # saída: 8
