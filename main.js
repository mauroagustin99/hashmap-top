import { HashMap } from './hashmap.js';

//Solution using Linked List from the last project

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

//Testing methods
console.log(test.get('lion'));
console.log(test.has('applee'));

test.remove('dog');
console.log(test.get('dog'));
console.log(test.get('lion'));

console.log('Keys: ' + test.keys());
console.log('Values: ' + test.values());
console.log(test.entries());
console.log('Size: ' + test.length());
test.clear();
console.log('Size: ' + test.length());
