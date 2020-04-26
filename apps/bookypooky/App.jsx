import BookApp from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx';
import { NavBar } from './cmps/NavBar.jsx';

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
// const history = History.createBrowserHistory()
function Time(props) {
    return <h1 className="time">{props.time}</h1>
}

function AboutPage(props) {
    return <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore repellat aspernatur quaerat repudiandae quidem voluptatem quia eligendi. Minima aut atque quam inventore unde debitis facilis dolores soluta nam, velit tempore!</h1>
}

export class App extends React.Component {
    state = {
        interval: null,
        time: ''
    }
    componentDidMount() {
        this.interval = setInterval((time) => {
            this.setState({ time: time() })
        }, 1000, this.moment);
        // console.log(this.moment());   
    }
    moment = () => { return new Date().toLocaleString().split(' ')[1].slice(0, -3) }
    render() {
        return (
            <Router>
                <header className="nav-bar flex space-between align-center">
                    <h1 className="logo">Miss Book</h1>
                    <NavBar />
                    <aside>search</aside>
                </header>
                {/* <nav className="nav-bar">
                    <h1>Project name: Miss Book</h1>
                    <NavLink to="/book">open list</NavLink>
                    
                </nav> */}
                <main>
                    {/* <Time time={this.state.time}/> */}
                    {/* <Route component={() => <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook}/>} path="/book/:bookId"  /> */}
                    <Route component={BookDetails} path="/book/:bookId" />
                    <Time time={this.state.time} />
                    <Route component={AboutPage} exact path="/" />
                    <Route component={BookApp} path="/book" />
                </main>
            </Router>
        )
    }
}

