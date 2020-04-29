import emailService from "../services/emailService.js"

const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
    }

    // emailClickedHandeler = (email) => {//make read class true , is expanded toggle
    //     
    // }

    // toggleIsRead
    

    render() {
        const { email,toggleEmailRead } = this.props
        var readClass = (email.isRead) ? null : 'not-read'

        return (
            <article className="email-preview">
                <section className={readClass} onClick={() => {
                    if (!email.isRead) toggleEmailRead(email.id)
                    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
                }}>
                    <span className="sender">{email.sender}</span>
                    <span className="subject">{email.subject}-</span>
                    <span className="email-body">{email.body}</span>
                    <span className="sent-at">{email.sentAt}</span>
                    <button onClick={(ev) => {
<<<<<<< HEAD
                        ev.stopPropagation()
                        toggleEmailRead(email.id)
=======
                        ev.stopPropagation();
<<<<<<< HEAD
                        emailService.toggleIsRead(email.id)}
                        }>
                    {email.isRead&& <i className="far fa-envelope"></i>}
                    {/*use className insted of class in React.js */}
                    {!email.isRead&& <i className="far fa-envelope-open"></i>}
=======
                        emailService.toggleIsRead(email.id)
>>>>>>> cae5d720cf28a3ad0196816ff72e4878a2130e92
                    }
                    }>
                        {email.isRead && <i class="far fa-envelope"></i>}
                        {!email.isRead && <i class="far fa-envelope-open"></i>}
>>>>>>> b7d8465547eab1c866483eebb9574308c1310e0b
                    </button>
                </section>

                <section hidden={!this.state.isExpanded}>
                <span className="sender">{email.sender}</span>
                <span className="subject">{email.subject}</span>
                <button onClick={()=>{ this.props.removeEmail(email.id)}}>Delete</button>
                <Link  to={`/mail/${email.id}`}>full screen</Link>
                </section>

                <p  hidden={!this.state.isExpanded}>{email.body}</p>
                
                
            </article>
        )
    }
}

//changing the service doesnt creat new props ? witch shoud cause re rendering


// render() {
//     const { email } = this.props
//     var readClass = (email.isRead) ? null : 'not-read'

//     return (
//         <article className="email-preview">
//             <section className={readClass} onClick={() => {
//                 if (!email.isRead) emailService.toggleIsRead(email.id)
//                 this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
//             }}>
//                 <span className="sender">{email.sender}</span>
//                 <span className="subject">{email.subject}-</span>
//                 <span className="email-body">{email.body}</span>
//                 <span className="sent-at">{email.sentAt}</span>
//                 <button onClick={(ev) => {
//                     ev.stopPropagation();
//                     emailService.toggleIsRead(email.id)
//                 }
//                 }>
//                     {email.isRead && <i class="far fa-envelope"></i>}
//                     {!email.isRead && <i class="far fa-envelope-open"></i>}
//                 </button>
//             </section>

//             <section hidden={!this.state.isExpanded}>
//             <span className="sender">{email.sender}</span>
//             <span className="subject">{email.subject}</span>
//             <button onClick={()=>{ this.props.removeEmail(email.id)}}>Delete</button>
//             <Link  to={`/mail/${email.id}`}>full screen</Link>
//             </section>

//             <p  hidden={!this.state.isExpanded}>{email.body}</p>
            
            
//         </article>
//     )
// }
