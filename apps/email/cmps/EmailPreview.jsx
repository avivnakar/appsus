import emailService from "../services/emailService.js"

const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
        // isRead: null
    }

    // emailClickedHandeler = (email) => {//make read class true , is expanded toggle
    //     
    // }

    // toggleIsRead

    render() {
        const { email } = this.props
        var readClass=(email.isRead)? null:'not-read'
        
        return (
            <article className="email-preview">
                <div className={readClass} onClick={()=>{
                    if(!email.isRead) emailService.toggleIsRead(email.id)
                    this.setState({ isExpanded: !this.state.isExpanded })
                }}>
                    <span className="sender">{email.sender}</span>
                    <span className="subject">{email.subject}-</span>
                    <span className="body">{email.body}</span>
                    <span className="sent-at">{email.sentAt}</span>
                    <button onClick={(ev)=>{ 
                        ev.stopPropagation();
                        emailService.toggleIsRead(email.id)}
                        }>
                    {email.isRead&& <i className="far fa-envelope"></i>}
                    {/*use className insted of class in React.js */}
                    {!email.isRead&& <i className="far fa-envelope-open"></i>}
                    </button>
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

