import { noteService } from '../services/noteService.js'
import { Note } from '../cmps/Note.jsx'
export function NoteList (props) {

        const { notes,onAddNote,noteProps } = props;
        return (
            <section className="note-list flex wrap">
                {notes ? notes.map((note) => <Note key={note.id} {...noteProps} note={note} />) : <article>ooof</article>}
            </section>
        );
}