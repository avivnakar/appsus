const { NavLink } = ReactRouterDOM

export default function EmailNav(props) {
    return <nav className="email-nav clean-list">
        <ul>
            <li><NavLink to='/mail/inbox'>inbox</NavLink></li>
            <li><NavLink to='/mail/starred'>starred</NavLink></li>
            <li><NavLink exact to='/mail/sent'>sent</NavLink></li>
            <li><NavLink to='/mail/drafts'>drafts</NavLink></li>
        </ul>
        </nav>
}