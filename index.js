import { hashTable } from './HashTable/index.js'
import { displayArr } from './DS/Array/index.js';
import { treeOutput } from './DS/BST/index.js';
import { Queue, OptimizedQueue } from './DS/Queue/index.js';

const arrayBtn = document.getElementById('array');
arrayBtn.addEventListener('click', () => {
    displayArr()
})

const hashTableBtn = document.getElementById('hashTableBtn');
hashTableBtn.addEventListener('click', () => {
    hashTable()
})
const bstBtn = document.getElementById('bstBtn');
bstBtn.addEventListener('click', () => {
    treeOutput()
})
const queueBtn = document.getElementById('queueBtn');
queueBtn.addEventListener('click', () => {
    const queue = new OptimizedQueue()
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.display()
    queue.dequeue()
    queue.display()
    console.log('Peek value => ', queue.peek())
    console.log('Queue size => ', queue.size())
    console.log('is Empty? => ', queue.isEmpty())
})



document.getElementById('result').innerHTML = `<h1 class='text-center'>DSA<h2>`
