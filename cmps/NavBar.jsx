const { NavLink } = ReactRouterDOM
export class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav-bar clean-list">
                <ul>
                    <button>burger</button>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/about">About Us</NavLink></li>
                    <li><NavLink exact to="/mail">Email</NavLink></li>
                    {/* Mabye TODO notification component */}
                    <li><NavLink exact to="/book">Books</NavLink></li>
                    <li><NavLink exact to="/keep">Keep</NavLink></li>
                </ul>
            </nav>
        );
    }
}