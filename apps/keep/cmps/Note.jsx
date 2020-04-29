import { noteService } from '../services/noteService.js'
import { ContentList } from "./ContentList.jsx";
export function Note(props) {

    const toggle = () => props.onTogglePin(id)
    const { note, contentFuncs, onRemoveNote, onTogglePin, onAddContent } = props
    const { title, id, isPinned,mediaType, style, url, labels, currIsTodo, contents } = note
    return (
        <article className={`note ${(mediaType==='video')?'video':''}`}>
            { <label className={`pin ${isPinned?'pinned':''}`} htmlFor={`pin-note ${id}`}>📌</label>}
            {<label className="renmove-note" htmlFor={`remove-note ${id}`}>⨯</label>}
            {title ? <React.Fragment>
                <h3 className="note-title">{title}</h3><hr />
            </React.Fragment> : ''}
            {/* <pre>
                    {JSON.stringify(note).split(',').join('\n').split(`"`).join('')}
                </pre> */}
            {/* <input type="text" onChange={this.onType} /> */}
            {/* <input type="url" onChange={onUrl}/> */}
            {url&&mediaType==='video'&&<iframe width="320" height="240" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            <ul className="btns clean-list ">
                <li><input onClick={() => onTogglePin(id)} type="button" id={`pin-note ${id}`} value="📌" /></li>
                <li><input onClick={() => onRemoveNote(id)} type="button" id={`remove-note ${id}`} value="⨯" /></li>
                {/* <li><button onClick={() => onRemoveNote(id)}>remove</button></li> */}
                <li><button onClick={() => onAddContent(id)}>add content</button></li>
                <li className="relative"><input type="checkbox" id={`toggleAddUrl ${id}`} hidden/>
                <LinkToolTip/>
                <label className="link fas fa-link" htmlFor={`toggleAddUrl ${id}`} >
                </label></li>
            </ul>
            <ContentList contents={contents} contentFuncs={contentFuncs} />
        </article>
    );
}

function LinkToolTip(props) {
    const { } = props
    return (
        <div className="add-link ">
            <input type="url"/>
        </div>
    );
}
