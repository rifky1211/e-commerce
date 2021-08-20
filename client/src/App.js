import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/fontawesome/css/all.min.css";
import "./assets/styles/style.css";

import LandingPage from "./pages/LandingPage";
import FormAdd from "./pages/FormAdd";
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/add" component={FormAdd}></Route>
          <Route path="/detail-item" component={DetailPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
