import "./App.css";
import { Header } from "./pages/header/header";
import {Main} from "./pages/main/main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Router>
          <Header>
          </Header>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/favorites">
              favorites
            </Route>
            <Route exact path="/my_sneakers"></Route>
          </Switch>  
        </Router>
      </div>
    </div>
  );
}

export default App;
