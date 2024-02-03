
let input = "Hi its sharma";

setTimeout(function() {
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    console.log("Reversed string after 2 seconds:", reversedString);
}, 2000); 