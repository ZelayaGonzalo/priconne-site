import './App.css';
import Homepage from './Components/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;