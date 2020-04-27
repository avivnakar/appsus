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
        const { contents ,contentFuncs} = this.props;
        const {} =  contentFuncs
        return (
            <div className="note-list grid columns-auto-fill">
                {contents&&contents.length ? contents.map((content) => <DynamicContent key={content.id}  {...contentFuncs} content={content} />) : <article>ooof</article>}
            </div>
        );
    }
}

function DynamicContent (props){
    console.log(props.content);
    
    // if(props.content.isTodo){
    //     // return <Todo {...props}/>
    // }else{
        return <PlainText {...props}/>
    // }
}
function PlainText(props){
    console.log(props);
    
    const {content}=props;
    const change=(ev)=>{props.onUpdateNoteTxt(content.id,ev)}
    return (
    <li>
        <pre>
        {JSON.stringify(content).split(',').join('\n').split(`"`).join('')}
        </pre>
        <input onChange={change} value={props.content.txt} type="text"/>)
        <button className="removeText">⨯</button>
    </li>
    )
}