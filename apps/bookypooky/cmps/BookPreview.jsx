const { Link } = ReactRouterDOM

export function BookPreview(props) {
    const {thumbnail,id,title,listPrice}=props.book
    let price = listPrice.amount;
    const color=price<20?'chartreuse':price>150?'red':'';
    switch (listPrice.currencyCode) {
        case 'ILS':
            price += '₪'
            break;

        case 'USD':
            price += '$'
            break;

        case 'EUR':
            price += '€'
            break;

        default:
            break;
    }
    return (
        <Link to={`/book/${id}`}>
        <li className="book-preview" onClick={props.onSelectBook}>
        <h6 className="flex justify-center">{title}</h6>
            <img src={thumbnail} alt={id}/>
            <p className={color}>{price}</p>
        </li>
        </Link>
    )
}