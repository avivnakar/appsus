export class BookFilter extends React.Component {
    state = {
        filter:null
    }
        handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    render() {
        return (
            <section className="book-filter">
                <div>
                    <input type="text" name="title" placeholder="Search" onChange={this.handleChange} />
                </div>
            </section>
        )
    }
}