export class Node {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }

  getValue() {
    return this.value;
  }

  setNext(node) {
    this.nextValue = node;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextValue !== null) {
        current = current.nextValue;
      }
      current.setNext(newNode);
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextValue = this.head;
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count += 1;
      current = current.nextValue;
    }
    return count;
  }

  headValue() {
    if (this.head !== null) {
      return this.head.getValue();
    }
    return null;
  }

  tailValue() {
    let tail = this.head;
    while (tail != null) {
      if (tail.nextValue === null) {
        return tail.value;
      } else {
        tail = tail.nextValue;
      }
    }
  }

  at(index) {
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.nextValue;
      if (current === null) return "There isn't item for this index";
    }
    return current.value;
  }

  pop() {
    let current = this.head;
    let previous = null;
    while (current.nextValue !== null) {
      previous = current;
      current = current.nextValue;
    }
    previous.setNext(null);
  }

  contains(value) {
    let current = this.head;
    let contains = false;
    while (current != null) {
      if (current.value === value) {
        contains = true;
        return contains;
      } else {
        current = current.nextValue;
      }
    }
    return contains;
  }

  find(value) {
    let current = this.head;
    let count = 1;
    while (current.value !== value) {
      current = current.nextValue;
      count += 1;
      if (current === null) {
        return null;
      }
    }
    return count;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result = result + `( ${current.getValue()} ) -> `;
      current = current.nextValue;
    }
    result = result + 'null';
    return result;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    //Special cases
    if (index <= 0) {
      return console.log("There isn't item for this index");
    }
    if (index === 1) {
      newNode.nextValue = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;

    for (let i = 1; i < index; i++) {
      if (current === null)
        return console.log("There isn't item for this index");
      previous = current;
      current = current.nextValue;
    }

    newNode.nextValue = current;
    previous.nextValue = newNode;
  }

  removeAt(index) {
    let current = this.head;
    let previous = null;

    //Special cases
    if (index <= 0) return console.log("There isn't item for this index");
    if (this.head === null) return console.log('This list is empty');
    if (index === 1) {
      this.head = current.nextValue;
      return;
    }

    for (let i = 1; i < index; i++) {
      if (current === null)
        return console.log("There isn't item for this index");
      previous = current;
      current = current.nextValue;
    }

    previous.nextValue = current.nextValue;
  }
}
