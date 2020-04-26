const { Link } = ReactRouterDOM
import emailService from '../services/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import EmailNav from '../cmps/EmailNav.jsx'
import EmailStatus from '../cmps/EmailStatus.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    render() {
        const {emails}=this.state
        return ((!emails)? <p>loading...</p>:
            <section className="email-app">
                <section className="side-bar">
                <Link to= '/mail/compose'>+ Compose </Link>
                <EmailNav></EmailNav>
                <EmailStatus/>
                </section>
                <EmailList emails={emails} />
            </section>
        )
    }
}
