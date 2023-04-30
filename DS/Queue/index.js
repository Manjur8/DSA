export class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    peek() {
        if(this.isEmpty()) {
            return null
        } else {
            return this.items[0]
        }
    }

    display() {
        console.log(this.items.toString())
    }
}

export class OptimizedQueue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front]
        if(!item) return
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.rear -this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.fornt
    }

    display() {
        console.log(this.items)
    }
}