import './App.css';
import Table from './Components/Table'
import Homepage from './Components/HomePage'
import Schedule from "./Components/Schedule"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div className="App">
      <Router basename={`/priconne-site}`}>
        <ScrollToTop/>
        <Switch>
          <Route path="/tierlist">
            <Table/>
          </Route>
          <Route path="/timeline">
            <Schedule/>
          </Route>
          <Route path="">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;