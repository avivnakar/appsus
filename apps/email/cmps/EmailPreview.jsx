const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
        readClass: null//add read/not read to effect bold or regular font
    }

    //getTime = () => {}//will get sentAt and translate to >1hr ago or date if over 24h

    render() {
        //todo: with css limit the size of txt and use over flow hidden
        //details, full screen
        const { email } = this.props
        return (
            <article className="email-preview">
                <div onClick={() => {
                    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
                }}>
                   <span className="email-sender">{email.sender}</span> 
                   <span className="email-subject">{email.subject}-</span>
                   <span className="email-body">{email.body}</span>
                   <span className="email-sent-at">{email.sentAt}</span>
                    
                </div>
                <button hidden={!this.state.isExpanded} >delete</button>
                <Link  hidden={!this.state.isExpanded} to={`/email/${email.id}/${email.subject}`}>full screen </Link>
            </article>
        )
    }
}
