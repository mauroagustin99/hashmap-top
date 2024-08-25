import { LinkedList } from './linkedlist.js';

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.map = [];

    for (let i = 0; i < this.capacity; i++) {
      this.map[i] = null;
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let hashedValue = this.hash(key) % this.capacity;

    console.log(hashedValue);

    // Throw an error if we try to access an out of bound index
    if (hashedValue < 0 || hashedValue >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }

    if (!this.map[hashedValue]) {
      this.map[hashedValue] = new LinkedList();
    }

    const linkedList = this.map[hashedValue];
    let current = linkedList.head;

    // Inside a Node of the linked list, the first item of the array will be the key,
    // and the second item will be the value

    while (current !== null) {
      if (current.value[0] === key) {
        current.value[1] = value;
        return;
      }
      current = current.nextValue;
    }

    // If the key does not exist, append a new node
    linkedList.append([key, value]);
  }

  get(key) {
    let hashedValue = this.hash(key) % this.capacity;
    const linkedList = this.map[hashedValue];
    let current = linkedList.head;

    while (current !== null) {
      if (current.value[0] === key) {
        return current.value[1];
      }
      current = current.nextValue;
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    if (this.get(key) === null) {
      return false;
    } else {
      let hashedValue = this.hash(key) % this.capacity;
      const linkedList = this.map[hashedValue];
      let current = linkedList.head;
      let currentNode;

      // First search the key node
      while (current !== null) {
        if (current.value[0] === key) {
          currentNode = current.value;
        }
        current = current.nextValue;
      }

      // Then, find the index of that node and remove it
      let index = linkedList.find(currentNode);
      linkedList.removeAt(index);
      return true;
    }
  }

  length() {
    let count = 0;
    this.map.forEach((list) => {
      if (list !== null) {
        count = count + list.size();
      }
    });
    return count;
  }

  clear() {
    this.map = [];
  }

  keys() {
    let keys = [];
    this.map.forEach((list) => {
      if (list !== null) {
        let current = list.head;
        while (current !== null) {
          keys.push(current.value[0]);
          current = current.nextValue;
        }
      }
    });
    return keys;
  }

  values() {
    let values = [];
    this.map.forEach((list) => {
      if (list !== null) {
        let current = list.head;
        while (current !== null) {
          values.push(current.value[1]);
          current = current.nextValue;
        }
      }
    });
    return values;
  }

  entries() {
    let entries = [];
    this.map.forEach((list) => {
      if (list !== null) {
        let current = list.head;
        while (current !== null) {
          entries.push(current.value);
          current = current.nextValue;
        }
      }
    });
    return entries;
  }
}
