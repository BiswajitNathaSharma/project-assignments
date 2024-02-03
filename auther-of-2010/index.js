let books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2012 },
    { title: "Book3", author: "author3", year: 2008 },
    { title: "Book4", author: "author4", year: 2015 }
];

function filterAndCapitalize(booksList) {
    let filteredBooks = [];
    for (let i = 0; i < booksList.length; i++) {
        let book = booksList[i];
        if (book.year >= 2010) {
            let capitalizedAuthor = book.author.toUpperCase();
            filteredBooks.push({ title: book.title, author: capitalizedAuthor, year: book.year });
        }
    }
    return filteredBooks;
}
let filteredBooks = filterAndCapitalize(books);

console.log(filteredBooks);
