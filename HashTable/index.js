class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i=0; i<key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const idx = this.hash(key)
        // =====not handling collison, bad code===========
        // this.table[idx] = value

        // ========= collison handles, recommended code============
        const bucket = this.table[idx];
        if(bucket) {
            const sameKeyValue = bucket.find(i => i[0] === key);
            if(sameKeyValue) {
                sameKeyValue[1] = value
            } else {
                bucket.push([key, value])
            }
        } else {
            this.table[idx] = [[key, value]];
        }
        
    }

    get(key) {
        const idx = this.hash(key);

        // ===========collision not hanlded==========
        // return this.table[idx]

        // =======collision handled ==============
        const bucket = this.table[idx];

        if(bucket) {
            const sameKeyValue = bucket.find(i => i[0] === key)
            if(sameKeyValue) {
                console.log(sameKeyValue[1])
                return sameKeyValue[1]
            }
        }
        console.log('key not found')
        return undefined
    }

    remove(key) {
        const idx = this.hash(key);

        // ===========collision not hanlded==========
        // this.table[idx] = undefined

        // =======collision handled ==============
        const bucket = this.table[idx];

        if(bucket) {
            const sameKeyValue = bucket.find(i => i[0] === key);

            if(sameKeyValue) {
                bucket.splice(bucket.indexOf(sameKeyValue), 1);
                console.log(`successfully removed ${key}`)
            }
        } else {
            console.log('Key not found')
        }
    }

    display() {
        for(let i=0; i<this.size; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const hashTabler = new HashTable(10);

export const hashTable  = () => {
    hashTabler.set('name', 'Manjur');
    hashTabler.set('anme', 'Manjur-2');
    hashTabler.get('anme');
    hashTabler.remove('anme');
    hashTabler.get('anme');
    hashTabler.remove('anme');
    hashTabler.display()
}