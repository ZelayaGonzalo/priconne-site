import './App.css';
import Table from './Components/Table'
import Homepage from './Components/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/table">
            <Table/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;