function extractNameAndStreet(person) {
    const { name, address: { street } } = person;

    return { name, street };
}

const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "BB, Block b, Industrial Area",
        city: "sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

const result = extractNameAndStreet(person);
console.log(result);
