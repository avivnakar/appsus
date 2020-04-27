{/* <x`>
• <NoteImg>
• <NoteTodos>
• <NoteVideo>
• <NoteAudio>: bonus
• <NoteMap>: bonus
• Here is an array of some */}
// import {NoteTxt} from '../cmps/NoteTxt.jsx'
// import {NoteTodo} from '../cmps/NoteTodo.jsx'
// import {NoteMap} from '../cmps/NoteMap.jsx'
// import {NoteImg} from '../cmps/NoteImg.jsx'
// import {NoteVideo} from '../cmps/NoteVideo.jsx'
// import {NoteAudio} from '../cmps/NoteAudio.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from '../services/noteService.js'

export class KeepApp extends React.Component {
    state = {
        notes: null,
        filterBy: null
    }
    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        noteService.query()
            .then(notes => {
                this.setState({ notes })
                console.log(notes)
            })
    }
    onTogglePin = (id) => {
        console.log(`${id} toggled`);
        noteService.togglePin(id);
        this.loadNotes();
    }
    onAddNote = () => {
        noteService.addNote().then(console.log('todo'));
        this.loadNotes();
    }
    onRemoveNote = () => {
        noteService.Note().then(console.log('todo'));
        this.loadNotes();
    }
    onHandleInput = () => {

    }
    render() {
        const{ onRemoveNote, onTogglePin, onHandleInput } = this
        const noteFuncs= { onRemoveNote, onTogglePin, onHandleInput }
        const { notes } = this.state
        
        return (
            <React.Fragment>
                <NoteList notes={notes} onAddNote={this.onAddNote} noteFuncs={noteFuncs} />
            </React.Fragment>
        );
    }
}