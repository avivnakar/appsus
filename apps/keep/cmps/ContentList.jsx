import { noteService } from '../services/noteService.js'
// import {  } from '../cmps/Note.jsx'
export function ContentList (props) {

        const { contents, contentFuncs } = props;
        const { } = contentFuncs
        return (
            <ul className="content-list clean-list">
                {contents && contents.length ?
                 contents.map((content) =>
                  <PlainText key={content.id}  {...contentFuncs} content={content} />) :' '}
            </ul>
        );

}

// function DynamicContent(props) {
//     console.log(props.content);

//     // if(props.content.isTodo){
//     //     // return <Todo {...props}/>
//     // }else{
//     return <PlainText {...props} />
//     // }
// }
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
            <input type="checkbox" id={`doneTodo${id}`}/>
            <label htmlFor={`doneTodo${id}`}>
            <input id={`text${id}`} placeholder="Add Text" onChange={change} onKeyDown={(ev) => console.log(ev)} value={content.txt} type="text" />
            </label>
            <button onClick={remove} className="remove-text">⨯</button>
        </li>
    )
}
// function TodoText(props) {
//     const { content, onUpdateNoteTxt, onRemoveContent, onCheck } = props;
//     const { id, doneAt } = content
//     const change = (ev) => { onUpdateNoteTxt(id, ev) }
//     const remove = () => { onRemoveContent(id) }
//     return (
//         <li>
//             {/* <pre>
//                 {JSON.stringify(content).split(',').join('\n').split(`"`).join('')}
//             </pre> */}
//             {!doneAt ? <input onClick={() => onCheck(id)} onChange={change} onKeyDown={(ev) => console.log(ev)} value={content.txt} type="text" /> :
//                 <span onClick={() => onUnCheck(id)} className="striked">content.txt</span>}
//             <button onClick={remove} className="remove-text">⨯</button>
//             <button onClick={remove} className="remove-text">⨯</button>
//         </li>
//     )


// }