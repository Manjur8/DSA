import { hashTable } from './HashTable/index.js'

const hashTableBtn = document.getElementById('hashTableBtn');
hashTableBtn.addEventListener('click', () => {
    console.log('op')
})

document.getElementById('result').innerHTML = `<h2>${hashTable()}</h2>`
