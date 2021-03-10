import './App.css';
import Homepage from './Components/HomePage'
import Schedule from './Components/Schedule'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div className="App">
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <ScrollToTop/>
        <Switch>
          <Route path="/timeline"><Schedule/></Route>
          <Route path="">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;