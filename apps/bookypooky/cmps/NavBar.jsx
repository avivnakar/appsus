// import BurgerX from './BurgrerX.jsx'

const { NavLink } = ReactRouterDOM
export class NavBar extends React.Component {
    state = {
        isMenuOpen: false
    }
     BurgerX=(props)=>{
        return (
            <div onClick={this.toggle} className={`burger-container ${props.isX ? 'x' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    toggle=()=> {
                console.log(this.state.isX?'⨉':'≡');
                this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))
            }
    render(){
        const {BurgerX}=this
        return (
            <nav className="flex space-around">
                <BurgerX isX={this.state.isMenuOpen} />
                <div className={`menu${this.state.isMenuOpen&&'x'}`}>
                    <NavLink exact to="/">About</NavLink>
                    <NavLink to="/book">Our Books</NavLink>
                </div>
            </nav>
        )
    }
}


// export function NavBar(props) {
//     return (
//         <nav className="flex space-around">
//             <BurgerX />
//             <div className="menu flex column">
//                 <NavLink exact to="/">About</NavLink>
//                 <NavLink to="/book">Our Books</NavLink>
//             </div>
//         </nav>
//     )
// }