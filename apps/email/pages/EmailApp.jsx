const { Link } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()

import emailService from '../services/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import EmailNav from '../cmps/EmailNav.jsx'
import EmailStatus from '../cmps/EmailStatus.jsx'

// export function DynamicMainCmp(props){
//     const { currSection, emails }=props
//     console.log('section', currSection, 'emails', emails)
//     switch (currSection) {
//         case '':
//             return <EmailList emails={emails} />
//         case 'compose':
//             return <EmailCompose />
//         default:
//             return <EmailDetails emails={emails} />
//     }
// }

export class EmailApp extends React.Component {
    state = {
        emails: null,
        currCmp: 'emailList',
        readPercent:null
    }

    componentDidMount() {
        // console.log(this.props.match.params.currSection);
        this.loadEmails()
    }

    loadEmails() {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
            .then (this.percent)
    }

    percent= ()=>{
        var read = this.state.emails.length - emailService.countUnReadEmails()
        var percent =100*read/this.state.emails.length
        this.setState({ readPercent:percent })
    }

    render() {
        const { emails,readPercent } = this.state
        return ((!emails) ? <p>loading...</p> :
            <section className="email-app">
                <section className="side-bar">
                    <Link to='/mail/compose'>+ Compose </Link>
                    <EmailNav></EmailNav>
                    {readPercent&&<EmailStatus percent={readPercent}/>}
                </section>
                {/* <DynamicMainCmp currSection={this.props.match.params.currSection} emails={emails}  /> */}
            </section>
        )
    }
}
