import Home from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { EmailApp } from './apps/email/pages/EmailApp.jsx'
import EmailDetails from './apps/email/pages/EmailDetails.jsx'
import {BookApp} from './apps/bookypooky/pages/BookApp.jsx'
import {BookDetails} from './apps/bookypooky/pages/BookDetails.jsx'
// import BooksApp from '.apps/books/pages/BookApp.jsx'
import { KeepApp } from './apps/keep/pages/KeepApp.jsx'
import { NavBar } from './cmps/NavBar.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class Appsus extends React.Component {

    render() {
        return (
            <Router>
                <header className="flex space-between align-center">
                    <h1 className="logo">Appsus</h1>
                    <NavBar />
                </header>
                <main>
                    {/* <Route component={DynamicMainCmp} path="/mail/:currSection" /> */}
                    <Route component={BookDetails} path="/book/:bookId" />
                    <Switch>
                        <Route component={AboutUs} path="/about" />
                        <Route component={EmailApp} path="/mail" />
                        <Route component={KeepApp} path="/keep" />
                        <Route component={BookApp} path="/book" />
                        <Route component={Home} path="/" />
                    </Switch>
                    {/* <Route component={EmailDetails} path="/mail/:theEmailId" /> */}
                    {/* <Route component={BooksApp} path="/books" /> */}
                </main>
                <hr />
                <footer>
                    <h1 className="logo">Appsus</h1>
                    <small>&copy;coffeerights</small>
                </footer>
            </Router>
        )
    }
}

