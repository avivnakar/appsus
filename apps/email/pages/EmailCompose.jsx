import emailService from "../services/emailService.js";

export default class EmailCompose extends React.Component {

    state = {
        sender: '',
        subject: '',
        emailBody: ''
    }

    handleInputChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({
            [field]: value
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const newEmail=this.state
        emailService.addEmail(newEmail.sender,newEmail.subject,newEmail.emailBody)
        this.clearForm()
    }

    clearForm = ()=>{
        this.setState({
            sender: '',
            subject: '',
            emailBody: ''
        })
    }

    render() {
        return (
            <form className="compose" onSubmit={this.handleSubmit}>
                <h3>new email</h3>
                <label>  To:
              <input name="sender" type="text" value={this.state.sender} onChange={this.handleInputChange} />
                </label>
                <br />
                <label> Subject:
                  
              <input name="subject" type="text" 
              value={this.state.subject}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <input name="emailBody" type="textarea"
                    value={this.state.emailBody}
                    onChange={this.handleInputChange} />
                <button><input type="submit" value="Send" /></button>
                <button onClick={this.clearForm}>Delete</button>
            </form>
        )
    }
}