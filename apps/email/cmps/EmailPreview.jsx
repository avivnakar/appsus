const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
        readClass: 'un-read'//add read/not read to effect bold or regular font
    }


    emailClickedHandeler = () => {//make read class true , is expanded toggle
        this.setState({ isExpanded: !this.state.isExpanded, readClass:'read' })

    }

    render() {
        const { email } = this.props
        return (
            <article className="email-preview">
                <div onClick={this.emailClickedHandeler}>
                    <span className="email-sender">{email.sender}</span>
                    <span className="email-subject">{email.subject}-</span>
                    <span className="email-body">{email.body}</span>
                    <span className="email-sent-at">{email.sentAt}</span>
                </div>
                <button hidden={!this.state.isExpanded} >delete</button>
                <Link hidden={!this.state.isExpanded} to={`/mail/${email.id}`}>full screen </Link>
            </article>
        )
    }





}



// render() {
//     //todo: with css limit the size of txt and use over flow hidden
//     //details, full screen
//     const { email } = this.props
//     return (
//         <article className="email-preview">
//             <div onClick={() => {
//                 this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
//             }}>
//                <span className="email-sender">{email.sender}</span> 
//                <span className="email-subject">{email.subject}-</span>
//                <span className="email-body">{email.body}</span>
//                <span className="email-sent-at">{email.sentAt}</span>

//             </div>
//             <button hidden={!this.state.isExpanded} >delete</button>
//             <Link  hidden={!this.state.isExpanded} to={`/mail/${email.id}`}>full screen </Link>
//         </article>
//     )
// }
// }

