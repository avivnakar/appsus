
import EmailPreview from './EmailPreview.jsx'

export default function EmailList(props) {
    console.log(props);
    
    return (
        <section className="email-list">
            <p>un read: {props.unReadCount}</p>
            { props.emails.map(email => <EmailPreview key={ email.id } email={ email } />) }
        </section>
    )
}
