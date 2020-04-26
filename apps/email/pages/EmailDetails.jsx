
import emailService from "../services/emailService.js"

const { Link } = ReactRouterDOM

export default class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        console.log('MOUNT');
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.theCarId !== this.props.match.params.theCarId) {
            console.log('Route changed, so we should load the new car');
            this.loadCar();
        }
    }

    loadEmail() {
        const id = this.props.match.params.theEmailId
        emailService.getById(id)
            .then(email => {
                console.log('GOT EMAIL', email);
                this.setState({ email })
            })
    }

    removeEmail = () => {
        emailService.remove(this.state.email.id)
            .then(() => {
                console.log('email was removed');
            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
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