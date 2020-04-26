import { noteService } from '../services/noteService.js'
// import {  } from '../cmps/Note.jsx'
export class ContentList extends React.Component {
    state = {
        contents: null
        }
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
    this.loadNotes();
    }
    loadNotes = ()=>{
        noteService.query()
            .then(notes => {
                this.setState({ notes })
                console.log(notes)
            })
    }

    onUpdateContent = () => {
        noteService.addNote().then(console.log('todo'));
        this.loadContent();    }
    onRemoveContent = () => {
        noteService.Note().then(console.log('todo'));
        this.loadNotes();    }
    render() {
        const { contents } = this.state;
        return (
            <React.Fragment>

            <section className="note-list grid columns-auto-fill">
                {/* {contents ? contents.map((content) => <DynamicContent key={content.id}  onRemoveContent={this.onTogglePin} content={content} />) : <article>ooof</article>} */}
            </section>
            </React.Fragment>
        );
    }
}

function DynamicContent (props){
    if(props.content.isToso){
        return <Todo {...props}/>
    }else{
        return <PlainText {...props}/>
    }
}
function PlainText(props){
    return (
    <li>
        <input value={props.contents} type="text"/>)
        <button className="removeText">⨯</button>
    </li>
    )
}