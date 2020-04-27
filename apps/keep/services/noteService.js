import stoarageService from '../../../services/storageService.js'
import utilService from '../../../services/utilService.js'
import storageService from '../../../services/storageService.js';
export const noteService = {
    query,
    getNoteById,
    addNote,
    addContent,
    addTitle,
    addURL,
    removeNote,
    removeContent,
    togglePin,
    setTitle,
    setMediaType,
    setURL,
    setContentTxt,
    setTodo,
    unsetTodo,
    checkTodoAt,
    unCheckTodo,
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
console.log('%c gNotes[2]', 'color:yellow;', gNotes[2])
// _updateContent('ROFLJl', 'doneAt', Date.now());
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
    if (!gNotes.length) gNotes = gDefaultNotes;
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

function addNote() {
    const note = _createNote();
    gNotes.push(note)
    _save();
    return Promise.resolve(note.id)
}

/**
 * 
 * @param {string} id of content
 * @param {string} attr can be each of content obj attributes
 * @param {*} value according to attr
 */
function _updateNote(id, attr, value) {
    const idx = utilService.getIdxById(id, gNotes);
    gNotes[idx][attr] = value;
    _save();
}
/**
 * 
 * @param {string} id 
 * @param {boolean} isTodo 
 */
function addContent(id, isTodo = false) {
    console.log('id:',id);
    const noteId=id.slice(0,4)
    const content = _createContent(noteId, isTodo);
    const noteIdx=utilService.getIdxById(noteId,gNotes)
    gNotes[noteIdx].contents.push(content);
    _save();
    return Promise.resolve(content.id)
}
/**
 * 
 * @param {string} id of content
 * @param {string} attr can be each of content obj attributes
 * @param {*} value according to attr
 */
function _updateContent(id, attr, value) {
    const idxC = getContentIdxById(id);
    const idxN = utilService.getIdxById(id.slice(0, 4), gNotes);
    gNotes[idxN].contents[idxC][attr] = value;
    _save();
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
        console.log('%c id:','color:yellow;',id)
    return getNoteById(id.slice(0, 4))
        .then(
            note => {
                console.log('%c note:','color:yellow;',note)
                const idx = utilService.getIdxById(id, note.contents);
                console.log('%c note idx:','color:yellow;',idx)
                note.contents.splice(idx, 1);
                _save();
            })
    // return getNoteById(id.slice(0, 4))
    //     .then(
    //         note => {
    //             const idx = utilService.getIdxById(id, note.contents);
    //             note.contents.splice(idx, 1);
    //             _save();
    //         })
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

    return Promise.resolve(gNotes.sort((a, b) => { return a.isPinned===b.isPinned?0:a.isPinned?-1:1}));
}
function _getNoteById(id) {
    return gNotes.find(note => note.id === id);
}
function getNoteById(id) {
    return Promise.resolve(_getNoteById(id))
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
function getContentIdxById(id) {
    const note = _getNoteById(id.slice(0, 4))
    return utilService.getIdxById(id, note.contents);
}

function setTodo(id) {
    _updateContent(id, 'isTodo', true);
    return Promise.resolve();
}
function unsetTodo(id) {
    _updateContent(id, 'isTodo', false);
    return Promise.resolve();
}
/**
 * 
 * @param {sting} id 
 * @param {number} timestamp of check moment
 */
function checkTodoAt(id, timestamp) {
    _updateContent(id, 'doneAt', timestamp);
    return Promise.resolve();
}

/**
 * 
 * @param {string} id
 * @returns {Promise} 
 */
function unCheckTodo(id) {
    _updateContent(id, 'doneAt', null);
    return Promise.resolve();
}
function setContentTxt(id, txt) {
    _updateContent(id, 'txt', txt);
}
// {
//     id: utilService.makeId(4),
//         title: '',
//             isPinned: false,
//                 style: {
//         backgroundColor: 'inherit',
// },
//     url: null,
//         mediaType: null,
//             labels: [],
//                 currIsTodo: false,//??
//                     contents: [
//                         _createContent(id, false)
//                     ]
// }

function setTitle(id, value) {
    if (value === '') value = null;
    _updateNote(id, 'title', value);
    return Promise.resolve();
}
function setMediaType(id, value) {
    if (value === undefined) value = null;
    _updateNote(id, 'mediaType', value);
    return Promise.resolve();
}
function setURL(id, value) {
    if (value === '') value = null;
    _updateNote(id, 'url', value);
    return Promise.resolve();
}
function addTitle(id) {
    _updateNote(id, 'title', '');
    return Promise.resolve();
}
function addURL(id) {
    _updateNote(id, 'url', '');
    return Promise.resolve();
}
