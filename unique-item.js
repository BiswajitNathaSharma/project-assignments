function removeDuplicates(arr) {
    let uniqueSet = new Set(arr);

    return Array.from(uniqueSet);
}

let numbers = [1, 2, 3, 4, 2, 3, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
