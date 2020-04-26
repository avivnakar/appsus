import { noteService } from '../services/noteService.js'
import { Note } from '../cmps/Note.jsx'
export class NoteList extends React.Component {
    state = {
        notes: null,
        filterBy: null
    }
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
    this.loadNotes();
    }
    loadNotes = ()=>{
        noteService.query()
            .then(notes => {
                this.setState({ notes })
                console.log(notes)
            })
    }
    onTogglePin = (id) => {
        console.log(`${id} toggled`);
        noteService.togglePin(id);
        this.loadNotes();    }
    onAddNote = () => {
        noteService.addNote().then(console.log('todo'));
        this.loadNotes();    }
    onRemoveNote = () => {
        noteService.Note().then(console.log('todo'));
        this.loadNotes();    }
    render() {
        const { notes } = this.state;
        return (
            <React.Fragment>
            <button onClick={this.onAddNote}></button>
            <button onClick={this.onAddNote}></button>
            <section className="note-list grid columns-auto-fill">
                {notes ? notes.map((note) => <Note key={note.id} onTogglePin={this.onTogglePin} note={note} />) : <article>ooof</article>}
            </section>
            </React.Fragment>
        );
    }
}