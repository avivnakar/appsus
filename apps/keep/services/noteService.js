import stoarageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'
import storageService from '../../../services/storageService.js';
export const noteService = {
    query,
    getNoteById,
    addNote,
    addContent,
    removeNote,
    removeContent,
    togglePin,
    _createNote,
    _createContent
}

const gDefaultNotes = [
    {//image
        id: utilService.makeId(4),
        title: 'Welcome!',
        isPinned: false,
        style: {
            backgroundColor: 'inherit',
        },
        url: 'http://some-img/me',
        mediaType: 'image',
        labels: [],
        currIsTodo: false,
        contents: [
        ]
    },
    {//vid
        id: utilService.makeId(4),
        title: 'keep some good videos for later',
        isPinned: false,
        style: {
            backgroundColor: 'inherit',
        },
        url: 'https://youtu.be/dQw4w9WgXcQ',
        mediaType: 'vid',
        labels: [],
        currIsTodo: false,
        contents: [
        ]
    },
    {//text and todo
        id: 'ROFL',
        title: 'you can set some tasks,',
        isPinned: false,
        style: {
            backgroundColor: 'inherit',
        },
        url: null,
        mediaType: 'vid',
        labels: [],
        currIsTodo: false,
        contents: [
            {
                id: 'ROFL' + utilService.makeId(2),
                isTodo: true,
                txt: 'some might be done',
                doneAt: Date.now()
            },
            {
                id: 'ROFL' + utilService.makeId(2),
                isTodo: true,
                txt: 'some might not. go get it!',
                doneAt: null
            },
            {
                id: 'ROFL' + utilService.makeId(2),
                isTodo: false,
                txt: 'also free text is supported',
                doneAt: null
            }
        ]
    }
]
// const gDefaultNotes =[1,2,3]
const NOTES_KEY = 'NOA_KIREL_OMGGGG';
var gNotes = null;
_createNotes();
console.log(gNotes);

function _createNote() {
    const id = utilService.makeId(4);
    return {
        id: utilService.makeId(4),
        title: '',
        isPinned: false,
        style: {
            backgroundColor: 'inherit',
        },
        url: null,
        mediaType: null,
        labels: [],
        currIsTodo: false,//??
        contents: [
            _createContent(id, false)
        ]
    }
}
function _createNotes() {
    gNotes = storageService.load(NOTES_KEY, gDefaultNotes);
    _save();
}
function _createContent(id, isTodo) {
    return {
        id: id + utilService.makeId(2),
        isTodo,
        txt: '',
        doneAt: null
    }
}
// function updateContent() {

// }
function addNote() {
    const note = _createNote();
    gNotes.push(note)
    _save();
    return Promise.resolve(note.id)
}
function addContent(id, isTodo = false) {
    const content = _createContent(id, isTodo);
    gNotes.push(note)
    _save();
    return Promise.resolve(content.id)
}
function updateContent(params) {
    con
}
function removeNote(id) {
    const idx = utilService.getIdxById(id, gNotes);
    gNotes.splice(idx, 1);
    _save();
    return Promise.resolve()
}
function removeContent(id) {
    // getContentIdxById(id)
    // .then(idx=>)
    return getNoteById(id.slice(0, 4))
        .then(
            note => {
                const idx = utilService.getIdxById(id, note.contents);
                note.contents.splice(idx, 1);
                _save();
            })
}

function query(filterBy) {
    // debugger
    // const lowered = filterBy.toLowerCase();
    // const notes = gNotes.filter(({ id, title, isPinned, mediaType, labels, contents }) => {
    //     return (id === filterBy) ||
    //         title.toLowerCase().includes(lowered) ||
    //         labels.some(label => label.txt.toLowerCase().includes(lowered)) ||
    //         contents.some(content => content.txt.toLowerCase().includes(lowered)) ||
    //         isPinned && lowered === 'pinned' ||
    //         (!isPinned) && lowered === 'unpinned' ||
    //         mediaType.toLowerCase().includes(lowered)
    // })
    return Promise.resolve(gNotes);
}
function getNoteById(id) {
    const note = gNotes.find(note => note.id === id);
    return Promise.resolve(note)
}
function togglePin(id) {
    return getNoteById(id)
        .then(note => {
            console.log(note);
            note.isPinned = !note.isPinned
            _save();
        })

}
function _save() {
    stoarageService.store(NOTES_KEY, gNotes);

}
// function getContentIdxById(id) {
//     return getNoteById(id.slice(0,4))
//     .then(
//         note=>{const idx=utilService.getIdxById(id,note.contents)
//        return Promise.resolve(idx,) 
//         }
//     )
// }