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
        input: null
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
        noteService.removeNote().then(console.log('todo'));
        this.loadNotes();
    }
    onHandleInput = () => {

    }
    onAddTitle = () => {
        noteService.addTitle()
    }
    onAddContent = () => {
        noteService.addContent()
    }
    onRemoveContent = () => {
        noteService.removeContent()
    }
    onToggleTodoMode = () => {
        noteService.unsetTodo()
        noteService.setTodo()
    }
    onCheck = () => {
        noteService.checkTodoAt()
        noteService.unCheckTodo()

    }
    onFillNote = () => { }
    onUpdateNoteTxt = (id, { target }) => {
        noteService.setContentTxt(id, target.value);
        this.loadNotes();
    }
    //  }
    // x = {
    //     addURL,
    //     setTitle,
    //     setMediaType,
    //     setURL,
    // }
    render() {
        const { onRemoveNote, onTogglePin, onHandleInput, onAddTitle,
            onAddContent, onRemoveContent, onToggleTodoMode, onCheck } = this
        const contentFuncs = { onCheck, onRemoveContent }
        const noteFuncs = { onRemoveNote, onTogglePin, onHandleInput, contentFuncs }
        const { notes } = this.state

        return (
            <React.Fragment>
                <NoteList notes={notes} onAddNote={this.onAddNote} noteFuncs={noteFuncs} />
            </React.Fragment>
        );
    }
}