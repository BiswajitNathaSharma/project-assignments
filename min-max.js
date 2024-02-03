function extractElements(array) {
    let [first, second, ...rest] = array;
    
  
    let last = rest.length > 0 ? rest[rest.length - 1] : undefined;

   
    return [first, second, last];
}

let inputArray = [1, 2, 3, 4, 5];
let resultArray = extractElements(inputArray);
console.log(resultArray);
