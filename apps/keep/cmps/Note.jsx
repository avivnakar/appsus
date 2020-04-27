import { noteService } from '../services/noteService.js'
import { ContentList } from "./ContentList.jsx";
export class Note extends React.Component {

    render() {
        const toggle = () => this.props.onTogglePin(id)
        const { note, contentFuncs, onRemoveNote, onTogglePin, onAddContent } = this.props
        const { title, id, isPinned, style, url, labels, currIsTodo, contents } = note
        return (
            <article className="note grid-item">
                {isPinned && <span className="pin">📌</span>}
                {title ? <React.Fragment>
                    <h3 className="note-title">{title}</h3><hr />
                </React.Fragment> : ''}
                {/* <pre>
                    {JSON.stringify(note).split(',').join('\n').split(`"`).join('')}
                </pre> */}
                <input type="text" onChange={this.onType} />
                {/* <input type="url" onChange={onUrl}/> */}
                <ul className="btns clean-list  ">
                    <li><button onClick={() => onTogglePin(id)}>📌</button></li>
                    <li><button onClick={() => onRemoveNote(id)}>remove</button></li>
                    <li><button onClick={() => onAddContent(id)}>add content</button></li>
                    <ContentList contents={contents} contentFuncs={contentFuncs} />
                </ul>
            </article>
        );
    }
}

