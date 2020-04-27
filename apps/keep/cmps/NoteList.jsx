import { noteService } from '../services/noteService.js'
import { Note } from '../cmps/Note.jsx'
export class NoteList extends React.Component {
    // state = {
    //     notes: null,
    //     filterBy: null
    // }
    // // constructor(props) {
    // //     super(props);
    // // }

    // onTogglePin = (id) => {
    //     console.log(`${id} toggled`);
    //     noteService.togglePin(id);
    //     this.loadNotes();    }
    // onAddNote = () => {
    //     noteService.addNote().then(console.log('todo'));
    //     this.loadNotes();    }
    // onRemoveNote = () => {
    //     noteService.Note().then(console.log('todo'));
        // this.loadNotes();    }
    render() {
        const { notes,onAddNote,noteFuncs } = this.props;
        return (
            <React.Fragment>
            <button onClick={onAddNote}>+</button>
            <section className="note-list grid columns-auto-fill">
                {notes ? notes.map((note) => <Note key={note.id} {...noteFuncs} note={note} />) : <article>ooof</article>}
            </section>
            </React.Fragment>
        );
    }
}