import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import EmailApp from '.apps/email/paegs/EmailApp.jsx'
import BooksApp from '.apps/books/paegs/BookApp.jsx'
import KeepApp from '.apps/keep/paegs/KeepApp.jsx'
import { NavBar } from './cmps/NavBar.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class Appsus extends React.Component {

    render() {
        return (
            <Router>
                <header>
                    <h1 className="logo">Appsus</h1>
                    <NavBar />
                </header>
                <main>
                    <Switch>
                        <Route component={Home} path="/" />
                        <Route component={AboutUs} path="/about" />
                        <Route component={EmailApp} path="/mail" />
                        <Route component={BooksApp} path="/books" />
                        <Route component={KeepApp} path="/keep" />
                    </Switch>

                </main>
                <footer>
                    <h1 className="logo">Appsus</h1>
                    <small>&copy;coffeerights</small>
                </footer>
            </Router>
        )
    }
}

