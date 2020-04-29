import {NoteVideo} from '../cmps/NoteVideo.jsx'

import { ContentList } from "./ContentList.jsx";
export function Note(props) {

    const toggle = () => props.onTogglePin(id)
    const { note, contentFuncs, onRemoveNote, onTogglePin, onAddContent, onAddTitle, isEditTitleMode,
        onSetTitle, onExitTitleEditMode, onEnterTitleEditMode, currFocusId,onSubmitMedia } = props
    const { title, id, isPinned, mediaType, style, url, labels, currIsTodo, contents } = note
    console.log(`is editable?`, isEditTitleMode);
    return (
        <article className={`note ${mediaType?mediaType : ''}`}>
            {<label className={`pin ${isPinned ? 'pinned' : ''}`} htmlFor={`pin-note ${id}`}>📌</label>}
            {!title && <label className="add-title" htmlFor={`add-title ${id}`}>+</label>}
            {<label className="remove-note" htmlFor={`remove-note ${id}`}>⨯</label>}
            {title || isEditTitleMode && currFocusId === id ? <React.Fragment>
                {isEditTitleMode && currFocusId === id ? <input autoFocus onBlur={onExitTitleEditMode} onChange={({ target }) => onSetTitle(id, target)} type="text" value={title} /> :
                    <h3 onClick={() => onEnterTitleEditMode(id)} className="note-title">{title}</h3>}<hr />
            </React.Fragment> : ''}
            {/* <pre>
                    {JSON.stringify(note).split(',').join('\n').split(`"`).join('')}
                </pre> */}
            {/* <input type="text" onChange={this.onType} /> */}
            {/* <input type="url" onChange={onUrl}/> */}
            {url && mediaType === 'video' && <NoteVideo url={url}/>}
            {url && mediaType === 'image' && <img src={url} alt="failed to show image"/> }

            <ul className="btns clean-list ">
                <li><input onClick={() => onTogglePin(id)} type="button" id={`pin-note ${id}`} value="📌" hidden /></li>
                <li><input onClick={() => onRemoveNote(id)} type="button" id={`remove-note ${id}`} value="⨯" hidden /></li>
                <li><input onClick={() => onAddTitle(id)} type="button" id={`add-title ${id}`} value="+" hidden /></li>
                {/* <li><button onClick={() => onRemoveNote(id)}>remove</button></li> */}
                <li><button onClick={() => onAddContent(id)}>add content</button></li>
                <li className="relative"><input type="checkbox" id={`toggleAddImage ${id}`} hidden />
                    <LinkToolTip id={id} mediaType="image" onSubmitMedia={onSubmitMedia} />
                    <label className="link far fa-image" htmlFor={`toggleAddImage ${id}`} >
                    </label></li>
                <li className="relative"><input type="checkbox" id={`toggleAddVideo ${id}`} hidden />
                    <LinkToolTip id={id} mediaType="video"/>
                    <label className="link fab fa-youtube" htmlFor={`toggleAddVideo ${id}`} >
                    </label></li>
            </ul>
            <ContentList contents={contents} contentFuncs={contentFuncs} />
        </article>
    );
}

function LinkToolTip(props) {
    const { id,mediaType,onSubmitMedia} = props
    const submitUrl=(ev) =>{
        ev.preventDefault();
                 console.log(`url:${ev.target.url.value}, mediaType: ${mediaType}`);
                 onSubmitMedia(id,ev.target.value,mediaType)
                };

    return (
        <div className="add-link ">
            <form onSubmit={submitUrl}>
                <input onChange={ev => console.log(ev.target.value)} name="url" placeholder={`enter a ${mediaType} url`} type="url" />
                {/* <label className="fab fa-youtube" htmlFor={`url-video-${id}`}></label>
                <input type="radio" name="mediaType" id={`url-video-${id}`} value="video"/>
                <label className="far fa-image" htmlFor={`url-image-${id}`}></label>
                <input type="radio" name="mediaType" id={`url-image-${id}`} value="image"/>
                <input type="radio" name="mediaType" value="unset" checked hidden/>
                <span>Please select</span>
                <label htmlFor=""></label> */}
            </form>
        </div>
    );
}
