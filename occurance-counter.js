function wordCount(text) {
    let words = text.split(" ");

    let wordCountMap = new Map();

    words.forEach(function(word) {
        let lowercaseWord = word.toLowerCase();
        
        if (wordCountMap.has(lowercaseWord)) {
            wordCountMap.set(lowercaseWord, wordCountMap.get(lowercaseWord) + 1);
        } else {
            wordCountMap.set(lowercaseWord, 1);
        }
    });

    return wordCountMap;
}

let text = "Hello world hello again world";
let result = wordCount(text);
console.log(result);
