export default function getBooks(query) {
    query = 'Harry'
    return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}`)
        .then(res => res.json())
        .then(books => {
            console.log('%c Server Got:', 'color:yellow;', books);
            return books.items;
        })
}