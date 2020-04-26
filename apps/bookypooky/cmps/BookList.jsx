import { BookPreview } from '../cmps/BookPreview.jsx'
export function BookList(props) {
    // console.table(props.books.map(book => {
    //     book.authors = book.authors[0];
    //     book.categories = JSON.stringify(book.categories);
    //     book.listPrice = book.listPrice.currencyCode;
    //     return book;
    // }));
    // window.addEventListener('scroll',console.log)
    // const Xscroll = (ev)=>{

    //     ev.currentTarget.scroll()
    // }
    return (
        <section className="book-list flip">
            {/* <h3>{`<BookList/>`}</h3> */}
            <ul className="clean-list flex">{props.books.map(book => <BookPreview key={book.id} book={book} onSelectBook={()=>props.selectBook(book/*.id*/)} />)}</ul>
        </section>
    )
}