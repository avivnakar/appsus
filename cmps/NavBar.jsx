// import BurgerX from "./apps/bookypooky/cmps/BurgrerX.jsx";
const { NavLink } = ReactRouterDOM
export class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav-bar flex">
                <input type="checkbox" className="toggler" />
                <BurgerX />
                <ul className="nav-menu clean-list flex">
                    <li className="flex justify-center align-center"><NavLink exact to="/">Home</NavLink></li>
                    <li className="flex justify-center align-center"><NavLink exact to="/about">About Us</NavLink></li>
                    <li className="flex justify-center align-center"><NavLink exact to="/mail">Email</NavLink></li>
                    <li className="flex justify-center align-center"><NavLink exact to="/book">Books</NavLink></li>
                    <li className="flex justify-center align-center"><NavLink exact to="/keep">Keep</NavLink></li>
                    {/* Mabye TODO notification component */}
                </ul>
                <hr />
            </nav>
        );
    }
}
function BurgerX(props) {
    return (
        <div className={`burger-container`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}