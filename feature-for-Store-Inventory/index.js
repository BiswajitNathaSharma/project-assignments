let items = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

const exchangeRate = 80;

function convertToINR(priceUSD) {
    return priceUSD * exchangeRate;
}

let pricesINR = Object.keys(items).map(function(key) {
    return { [key]: convertToINR(items[key]) };
});

console.log(pricesINR);
