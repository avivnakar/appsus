import { noteService } from '../services/noteService.js'
import { Note } from '../cmps/Note.jsx'
export class NoteList extends React.Component {
    state = {
        notes: null
    }
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        noteService.query()
            .then(notes => {
                this.setState({ notes })
                console.log(notes)
            })
    }
    render() {
        const { notes } = this.state;
        return (
            <section className="grid">
                {notes ? notes.map(({ id, title }) => <Note key={id} >{title}</Note>) : <article>ooof</article>}
            </section>
        );
    }
}