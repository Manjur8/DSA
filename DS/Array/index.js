const arr = [1, 2, true, 'Manjur']

// =========Array.push(item) method pushes an item at the last index in an array
arr.push(5);
// =========Array.pop(item) method pop an item from the last index in an array
arr.pop(); 

// array.shift() mrthod pop an item from first index, & current datas shifted to previous memory location
arr.shift()

// array.unshift(item) method pushes item at first index, & current datas shifted to next memory location
arr.unshift(0)

export const displayArr = () => {
    for(const item of arr) {
        console.log(item)
    }
    console.log(arr[3])
}

// some important array methods that everyone should need to know
// ***************map, filter, reduce, concat, slice, splice******************

