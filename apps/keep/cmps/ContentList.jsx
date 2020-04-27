import { noteService } from '../services/noteService.js'
// import {  } from '../cmps/Note.jsx'
export class ContentList extends React.Component {
    // state = {
    //     contents: null
    //     }
    // constructor(props) {
    //     super(props);
    // // }
    // componentDidMount() {
    // this.loadNotes();
    // }
    // loadNotes = ()=>{
    //     noteService.query()
    //         .then(notes => {
    //             this.setState({ notes })
    //             console.log(notes)
    //         })
    // }

    // onUpdateContent = () => {
    //     noteService.addNote().then(console.log('todo'));
    //     this.loadContent();    }
    // onRemoveContent = () => {
    //     noteService.Note().then(console.log('todo'));
    //     this.loadNotes();    }
    render() {
        const { contents, contentFuncs } = this.props;
        const { } = contentFuncs
        return (
            <div className="content-list">
                {contents && contents.length ? contents.map((content) => <DynamicContent key={content.id}  {...contentFuncs} content={content} />) : <article>ooof</article>}
            </div>
        );
    }
}

function DynamicContent(props) {
    console.log(props.content);

    // if(props.content.isTodo){
    //     // return <Todo {...props}/>
    // }else{
    return <PlainText {...props} />
    // }
}
function PlainText(props) {

    const { content, onUpdateNoteTxt, onRemoveContent } = props;
    const { id } = content
    const change = (ev) => { onUpdateNoteTxt(id, ev) }
    const remove = () => { onRemoveContent(id) }
    return (
        <li>
            {/* <pre>
                {JSON.stringify(content).split(',').join('\n').split(`"`).join('')}
            </pre> */}
            <input onChange={change} onKeyDown={(ev) => console.log(ev)} value={content.txt} type="text" />)
            <button onClick={remove} className="remove-text">⨯</button>
        </li>
    )
}
function TodoText(props) {
    const { content, onUpdateNoteTxt, onRemoveContent, onCheck } = props;
    const { id, doneAt } = content
    const change = (ev) => { onUpdateNoteTxt(id, ev) }
    const remove = () => { onRemoveContent(id) }
    return (
        <li>
            {/* <pre>
                {JSON.stringify(content).split(',').join('\n').split(`"`).join('')}
            </pre> */}
            {!doneAt ? <input onClick={() => onCheck(id)} onChange={change} onKeyDown={(ev) => console.log(ev)} value={content.txt} type="text" /> :
                <span onClick={() => onUnCheck(id)} className="striked">content.txt</span>}
            <button onClick={remove} className="remove-text">⨯</button>
            <button onClick={remove} className="remove-text">⨯</button>
        </li>
    )


}