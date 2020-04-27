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
        currIsTodo: false,//TODO - null
        currTodo: null
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
        noteService.togglePin(id)
            .then(this.loadNotes);
    }
    onAddNote = () => {
        noteService.addNote()
            .then(this.loadNotes);
    }
    onRemoveNote = () => {
        noteService.removeNote()
            .then(this.loadNotes);
    }
    onHandleInput = () => {

    }
    onAddTitle = () => {
        noteService.addTitle()
            .then(this.loadNotes);
    }
    onAddContent = (id) => {
        noteService.addContent(id, this.state.currIsTodo)
            .then(this.loadNotes);
    }
    onRemoveContent = (id) => {
        noteService.removeContent(id)
            .then(this.loadNotes);
    }
    onToggleTodoMode = () => {
        noteService.unsetTodo()
        noteService.setTodo()
    }
    onCheck = (id) => {
        noteService.checkTodoAt(id)
        .then(this.loadNotes);
        
    }
    onUnCheck = (id) => {
        noteService.unCheckTodo(id)
        .then(this.loadNotes);
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
            onAddContent, onAddNote, onRemoveContent, onToggleTodoMode, onCheck,
             onUpdateNoteTxt,onUnCheck } = this
        const contentFuncs = { onCheck, onRemoveContent, onUpdateNoteTxt, onAddContent, onToggleTodoMode,onUnCheck }
        const noteFuncs = { onRemoveNote, onTogglePin, onHandleInput, onAddContent, onAddTitle, contentFuncs }
        const { notes } = this.state

        return (
            <React.Fragment>
                <NoteList notes={notes} onAddNote={onAddNote} noteFuncs={noteFuncs} />
            </React.Fragment>
        );
    }
}