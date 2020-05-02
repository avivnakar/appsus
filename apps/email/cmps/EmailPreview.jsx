import emailService from "../services/emailService.js"

const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
    }

    // emailClickedHandeler = (email) => {//make read class true , is expanded toggle
    //     
    // }

    // toggleIsRead =()=>{

    // }
    

    render() {
        const { email,toggleEmailRead } = this.props
        var readClass = (email.isRead) ? 'flex' : 'not-read flex'
        var emailBody= email.body.slice(0,60)
        return (
            <article className="email-preview">
                <section className={readClass} onClick={() => {
                    if (!email.isRead) toggleEmailRead(email.id)
                    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
                }}>
                    <p className="sender">{email.sender}</p>
                    <p className="subject">{email.subject} - </p>
                    <p className="email-body">{emailBody}... </p>
                    <button onClick={(ev) => {
                        ev.stopPropagation()
                        toggleEmailRead(email.id)
                       }
                    }>
                    {email.isRead&& <i className="far fa-envelope"></i>}
                    {!email.isRead&& <i className="far fa-envelope-open"></i>}
                    </button>
                    <p className="sent-at">{email.sentAt}</p>
                </section>

                <p className="expansion" hidden={!this.state.isExpanded}>
                <span className="sender">{email.sender}</span>
                <span className="subject">{email.subject}</span>
                <button onClick={()=>{ this.props.removeEmail(email.id)}}>Delete</button>
                <Link exact to={`/mail/${email.id}`}>full screen</Link>
                </p>

                <p className="expansion" hidden={!this.state.isExpanded}>{email.body}</p>
                
                
            </article>
        )
    }
}

//changing the service doesnt creat new props ? witch shoud cause re rendering
