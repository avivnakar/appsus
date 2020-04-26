import EmailPreview from '../pages/EmailPreview.jsx'

export default function EmailList(props) {
    console.log(props.emails);
    
    return (
        <section className="email-list">
            { props.emails.map(email => <EmailPreview key={ email.id } email={ email } />) }
        </section>
    )
}
