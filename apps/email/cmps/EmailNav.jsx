const { NavLink } = ReactRouterDOM

export default function EmailNav(props) {
    return <nav className="email-nav">
        <ul className="clean-list">
            <li><NavLink to='/mail'>inbox</NavLink></li>
            <li><NavLink to='/mail/starred'>starred</NavLink></li>
            <li><NavLink exact to='/mail/sent'>sent</NavLink></li>
            <li><NavLink to='/mail/drafts'>drafts</NavLink></li>
        </ul>
        </nav>
}