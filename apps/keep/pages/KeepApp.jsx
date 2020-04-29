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
        currFocusId: null,
        isEditTitleMode: false
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
        console.log(this.state.isEditTitleMode);

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
    onAddTitle = (id) => {
        noteService.addTitle(id)
            .then(() => this.onEnterTitleEditMode(id));
    }
    onAddURL = () => {
        noteService.addURL(id, url, type)
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
        noteService.checkTodoAt(id, Date.now())
            .then(this.loadNotes);

    }
    onUnCheck = (id) => {
        noteService.unCheckTodo(id)
            .then(this.loadNotes);
    }
    onFillNote = () => { }
    onUpdateNoteTxt = (id, { target }) => {
        noteService.setContentTxt(id, target.value)
            .then(this.loadNotes);
    }
    onSetTitle = (id, { value }) => {
        noteService.setTitle(id, value)
            .then(this.loadNotes)
    }
    onExitTitleEditMode = () => {
        console.log('exited');
        this.setState({ isEditTitleMode: false }, this.onBlurId);
    }

    onEnterTitleEditMode = (id) => {
        console.log('entered', id);
        this.setState({ isEditTitleMode: true }, () => this.onFocusId(id));
    }
    onFocusId = (id) => {
        this.setState({ currFocusId: id }, this.loadNotes);
        console.log('focus id:', id);


    }
    onBlurId = () => {
        this.setState({ currFocusId: null }, this.loadNotes);
        console.log('nulled focus');

    }
    //  }
    // x = {
    //     addURL,
    //     setTitle,
    //     setMediaType,
    //     setURL,
    // }
    onSubmitMedia = (id, url, mediaType) => {
        console.log('submit media url:',url);
        
        const willBeOk = [noteService.setURL(id, url),
        noteService.setMediaType(id, mediaType)]
        Promise.all(willBeOk)
            .then(prm=>console.log(prm))
            .then(this.loadNotes);
    }
    render() {
        const { onRemoveNote, onTogglePin, onHandleInput, onAddTitle, onSetTitle,
            onExitTitleEditMode, onEnterTitleEditMode, onAddContent, onAddNote, onRemoveContent,
            onToggleTodoMode, onCheck, onUpdateNoteTxt, onUnCheck,
            onSubmitMedia } = this
        const { notes, isEditTitleMode, currFocusId } = this.state
        const contentFuncs = { onCheck, onRemoveContent, onUpdateNoteTxt, onAddContent, onToggleTodoMode, onUnCheck, currFocusId }
        const noteProps = {
            onRemoveNote, onTogglePin, onHandleInput, onAddContent,
            onAddTitle, onSetTitle, onExitTitleEditMode, onEnterTitleEditMode, onSubmitMedia,
            contentFuncs, isEditTitleMode, currFocusId
        }

        return (
            <section className="keep">
                <button className="add-note" onClick={onAddNote}>+</button>
                <NoteList notes={notes} onAddNote={onAddNote} noteProps={noteProps} />
            </section>
        );
    }
}