const { Link } = ReactRouterDOM
import emailService from '../services/emailService.js'
import EmailList from '../cmps/EmailList.jsx'


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
        return (
            <section>
                {emails &&
                    <EmailList emails={emails} />}
            </section>
        )
    }
}
