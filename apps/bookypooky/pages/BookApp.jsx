const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

import bookService from '../services/bookService.js';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { BookList } from '../cmps/BookList.jsx';

export default class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
        // selectedBookId:null
        // selectedBook: null
    }
    selectBook = (book/*Id*/) => {
        this.setState({ selectedBook/*Id*/: book/*Id*/ })
    }
    onUnSelectBook = (book/*Id*/) => {
        this.setState({ selectedBook/*Id*/: null })
    }

    componentDidMount() {
        this.loadBooks();
        // bookService.printAndSaveBook();
    }
    loadBooks = () => {
        const { filterBy } = this.state;
        const books = bookService.query(filterBy);
        this.setState({ books })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks())
        console.log(filterBy);

    }
    // onSetFilter =(filter) => console.log(filter)
    render() {
        const { books, selectedBook, filter } = this.state;
        return (
            <section>

                {/* <Route component={() => <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook}/>} path="/book/:bookId"  /> */}
                {/* {selectedBook&&} */}
                <BookList books={books} selectBook={this.selectBook} />
                <BookFilter filterBy={filter} onSetFilter={this.onSetFilter} />
                {/* <BookDetails book={bookService.getById(this.state.selectedBookId)}/> */}
            </section>
        )
    }
}