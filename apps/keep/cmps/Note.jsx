import { noteService } from '../services/noteService.js'
import { ContentList } from "./ContentList.jsx";
export class Note extends React.Component {
    state = {   note:null,
        contents:''
      }
    onAddNote = () => {
        noteService.addNote().then(console.log('todo'));
        this.componentDidMount();
    }
    onRemoveNote = () => {
        noteService.Note().then(console.log('todo'));
        this.componentDidMount();
    }
    onType=({target})=>{
    console.log('text:',target.value);
    this.setState({contents:target.value})
    }
    // onAddContent = () => {
    //     noteService.addContent().then(console.log('todo'));
    //     this.loadContent();    
    // }
    render() {
        const toggle=() => this.props.onTogglePin(id)
        const { note } = this.props
        const { title, id, isPinned, style, url, labels, currIsTodo, contents } = note
        return (
            <article className="note grid-item">
                {title ? <React.Fragment>
                    <h3 className="note-title">{title}</h3><hr />
                </React.Fragment> : ''}
                id:{id},
                isPinned:{isPinned ? 'true' : 'false'},
                {/* style:{...style}, */}
                url:{url},
                labels:{labels.join()},
                currIsTodo:{currIsTodo},
                {/* contents:{contents.join()} */}
                {/* <ContentList contents={contents} /> */}
                <input type="text" onChange={this.onType}/>
                <ul className="btns clean-list  ">
                    <li><button onClick={() => this.props.onTogglePin(id)}>📌</button></li>
                    <li><button onClick={() => this.props.onTogglePin(id)}>remove</button></li>
                </ul>
            </article>
        );
    }
}

