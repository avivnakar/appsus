
import bookService from '../services/bookService.js';
import { LongTxt } from '../cmps/LongTxt.jsx'
const { Link } = ReactRouterDOM
export class BookDetails extends React.Component {

    state = {        isLongTxtShown: false,
        book: null

    }
    // () {
    // }
    componentDidMount() {
        const id = this.props.match.params.bookId
        const book = bookService.getById(id)
        console.log(book);
        this.setState({ book })
        const { length } = book.description;
        this.setState({ isLongTxtShown: length > 100 })
    }
    toggleLongTxt = () => {
        this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }
    //authors[],categories[],listPrice{amount,currencyCode,isOnSale}"
    render() {
        const { book, onUnSelectBook } = this.state
        
        const { id, title, subtitle, authors, publishedDate, description, pageCount, categories, thumbnail, language, listPrice } = !book?{}:book;
        const yearsAgo = !book?null:publishedDate - new Date().getFullYear();
        const {isLongTxtShown}=this.state

        return (
            <section className="screen flex justify-center">
                <Link to="/book" className="close-btn"></Link>
                {!book ? <span>loading...</span> : <article className="book-details">
                    {listPrice.isOnSale && <span className="sale">On Sale!</span>}
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <hr />
                    <p>authors: {authors.join()}</p>
                    <p>{yearsAgo > 10 ? 'Veteran Book' : yearsAgo < 1 ? 'New!' : ''}</p>
                    <p><LongTxt text={description} isLongTxtShown={isLongTxtShown} />
                        {description.length > 100 && <button className="toggle-read"
                            onClick={this.toggleLongTxt}>read {isLongTxtShown ? 'less' : 'more'}</button>}</p>
                    <p>{pageCount > 500 ? 'Long' : pageCount > 200 ? 'Decent' : 'Light'} Reading</p>
                    <p>genre: {categories.join()}</p>
                    <p>language: {language}</p>
                    <img src={thumbnail} alt={id} />
                    
                </article>}
            </section>


        )
    }
}

