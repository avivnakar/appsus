import Home from './pages/Home.jsx'
import {AboutUs} from './pages/AboutUs.jsx'
import {EmailApp} from './apps/email/pages/EmailApp.jsx'
import EmailDetails from './apps/email/pages/EmailDetails.jsx'
// import BookApp from './apps/books/pages/BookApp.jsx'
// import BooksApp from '.apps/books/pages/BookApp.jsx'
import {KeepApp} from './apps/keep/pages/KeepApp.jsx'
import { NavBar } from './cmps/NavBar.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch} = ReactRouterDOM

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
                        <Route component={AboutUs} path="/about" />
                        <Route component={EmailApp} path="/mail" />
                        <Route component={EmailDetails} path="/mail/:theEmailId" />
                        {/* <Route component={BooksApp} path="/books" /> */}
                        <Route component={KeepApp} path="/keep" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                <hr/>
                <footer>
                    <h1 className="logo">Appsus</h1>
                    <small>&copy;coffeerights</small>
                </footer>
            </Router>
        )
    }
}

