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

export class KeepApp extends React.Component {
    state = {

    }
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <NoteList />
            </React.Fragment>
        );
    }
}