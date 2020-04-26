export default function BurgerX(props){
        return (
            <div onClick={this.toggle} className={`burger-container ${props.isX ? 'x' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    
}
// export default class BurgerX extends React.Component {
//     state = {
//         isX: false
//     }
//     toggle=()=> {
//         console.log(this.state.isX?'⨉':'≡');
//         this.setState(prevState => ({ isX: !prevState.isX }))
//     }
//     render() {
//         return (
//             <div onClick={this.toggle} className={`burger-container ${this.state.isX ? 'x' : ''}`}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         )
//     }
// }