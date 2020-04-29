
import emailService from "../services/emailService.js"

const { Link } = ReactRouterDOM

export default class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail();
    }

    loadEmail() {
        const id = this.props.match.params.theEmailId
        emailService.getById(id)
        .then(email => {
                this.setState({ email })
            })
    }

    removeEmail = () => {
        emailService.removeById(this.state.email.id)
        this.props.history.push('/mail/inbox')
    }


    render() {
        const { email } = this.state
        return ((!email) ? <p>Loading...</p> : <div>
            <h6>{email.subject}</h6>
            <p>
                <span>{email.sender}</span>
                {/* <button>Re:</button> */}
                <button onClick={this.removeEmail}>Delete</button>
            </p>
            <p>{email.body}</p>
        </div>)
    }
}