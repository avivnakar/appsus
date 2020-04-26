import utilService from './utilService.js'
import getBooksFromGoogle from './google-books-service.js'
import storageService from './storageService.js'
import { booksJSON } from './books-json.js'
import getBook from './google-books-service.js';
const gDefaultBooks = booksJSON;
const KEY_BOOKS = 'books-aviv';
// (()=>console.log(gDefaultBooks))();
var gBooks = null;

export default {
    query,
    // save,
    // remove,
    getById,
    printAndSaveBook
}

// function _createBook(title, price) {
//     return {
//         vendor: title,
//         price,
//         id: utilService.makeId()
//     }
// }
// function save(bookToSave) {
//     if (bookToSave.id) {
//         const carIdx = _getIdxById(bookToSave.id)
//         gBooks[carIdx] = bookToSave;
//         // gCars.splice(carIdx, 1, car)
//     } else {
//         const newBook = _createBook(bookToSave.vendor, bookToSave.price)
//         gBooks.push(newBook)
//     }
//     storageService.store('cars', gBooks)
// }
// const { id, title, subtitle, authors, publishedDate, description, pageCount, categories, thumbnail, language, listPrice }
//     //authors[],categories[],listPrice{amount,currencyCode,isOnSale}"

function printAndSaveBook() {
    const KEY = 'BOOKYPooKy'
    let books = storageService.load(KEY)
    if (books) {
        console.log('%c book!', 'color:red;', books)
        console.table(books)
        console.log('%c get id from book.id', 'color:yellow;')
        // console.table(books[0])
        // console.log('%c get id from book.id','color:yellow;')

        // console.table(books[0].volumeInfo)
        console.table(books.map(book => ({ ...book.saleInfo })))

        return Promise.resolve(book)

    } else {
        getBooksFromGoogle('Harry').then(
            x => {
                storageService.store(KEY, x)
                console.log('%c got Harry', 'color:green;', x)

            }
        )
    }
}
function addFromGoogle(book) {
    book = { id: book.id, ...book.volumeInfo }
    book = { thumbnail: imageLinks.thumbnail }
    const { id } = book
    const { title, subtitle, authors, publishedDate, description,
        pageCount, categories, language } = book.volumeInfo
    const { thumbnail } = book.volumeInfo.imageLinks
    const { amount, currencyCode } = book.saleInfo.listPrice
    const isOnSale = (Math.random() > .7)
    save ({
        id, title, subtitle, authors, publishedDate, description,
        pageCount, categories, thumbnail, language,
        listPrice: { amount, currencyCode, isOnSale }
    });
}
        // const booki = {
        //     id,
        //     title,
        //     subtitle,
        //     authors,
        //     publishedDate,
        //     description,
        //     pageCount,
        //     categories,
        //     thumbnail,
        //     language,
        //     listPrice
        // }

function query(filterBy) {
    // console.log('%c Service Response:','color:yellow;',googleService('harry'))
    if (!gBooks) gBooks = storageService.load(KEY_BOOKS, gDefaultBooks)
    if (!filterBy) return gBooks
    else {
        var { title } = filterBy
        //     maxPrice = maxPrice ? maxPrice : Infinity
        //     minPrice = minPrice ? minPrice : 0
        return gBooks.filter(book => {
            console.log(book);
            console.log(title);

            return book.title.includes(title)
        })
        // && (book.price < maxPrice)
        // && book.price > minPrice)
    }
    // return gBooks;
}

function remove(bookId) {
    const bookIdx = utilService.getIdxById(id, gBooks)

    gCars.splice(bookIdx, 1)
    storageService.store('books', gBooks)
}

function getById(bookId) {
    if (!gBooks) query();
    const book = gBooks.find(book => book.id === bookId)
    return book ? book : null;
}
