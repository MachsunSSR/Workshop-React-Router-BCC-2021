import "./App.css";
import About from "./pages/About";
import Nav from "./Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ItemDetails from "./pages/ItemDetails";
import {
    BrowserRouter as Router, //HashRouter MemoryRouter
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/:id" component={ItemDetails} />
                    {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
