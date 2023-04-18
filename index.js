import { hashTable } from './HashTable/index.js'
import { displayArr } from './DS/Array/index.js';
import { treeOutput } from './DS/BST/index.js';

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



document.getElementById('result').innerHTML = `<h1 class='text-center'>DSA<h2>`
