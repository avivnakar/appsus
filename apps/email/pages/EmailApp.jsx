const Router = ReactRouterDOM.HashRouter
const { Route, Switch ,Link} = ReactRouterDOM
const history = History.createBrowserHistory()

import emailService from '../services/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import EmailDetails from '../pages/EmailDetails.jsx'
import EmailCompose from '../pages/EmailCompose.jsx'
import EmailNav from '../cmps/EmailNav.jsx'
import EmailStatus from '../cmps/EmailStatus.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
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

    removeEmail = (id) => {
        emailService.removeById(id)
            .then(this.loadEmails())
    }

    toggleEmailRead = (id) => {
        emailService.toggleIsRead(id)
            .then(this.loadEmails())
    }

    render() {
        const { emails } = this.state
        var unReadCount = emailService.countUnReadEmails()
        return ((!emails) ? <p>loading...</p> :
            <Router>
                <section className="email-app">
                    <section className="side-bar">
                        <Link to='/mail/compose'>+ Compose </Link>
                        <EmailNav></EmailNav>
                        <EmailStatus unRead={unReadCount} total={emails.length} />
                    </section>
                    <Switch>
                        <Route exact path='/mail' component={() =>
                            <EmailList emails={emails} toggleEmailRead={this.toggleEmailRead} removeEmail={this.removeEmail} unReadCount={unReadCount} />} />
                        <Route component={EmailCompose} exact path="/mail/compose" />
                        <Route component={EmailDetails} exact path="/mail/:theEmailId" />
                    </Switch>
                </section>
            </Router>
        )
    }
}
