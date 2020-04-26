const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {
    state = {
        isExpanded: false,
        emailClass: 'email-preview'//add read/not read to effect bold or regular font
    }

    //getTime = () => {}//will get sentAt and translate to >1hr ago or date if over 24h

    render() {
        //todo: with css limit the size of txt and use over flow hidden
        //details, full screen
        const { email } = this.props
        return (
            <article className={this.state.emailClass}>
                <div onClick={() => {
                    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
                }}>
                    {email.sender}
                    {email.subject}
                    {email.body}
                    {/* <p>{this.getTime()}</p> */}
                </div>
                <button hidden={!this.state.isExpanded} >delete</button>
                <Link  hidden={!this.state.isExpanded} to={`/email/${email.id}/${email.subject}`}>full screen </Link>
            </article>
        )
    }
}
