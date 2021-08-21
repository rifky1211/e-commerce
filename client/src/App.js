import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/fontawesome/css/all.min.css";
import "./assets/styles/style.css";

import LandingPage from "./pages/LandingPage";
import FormAdd from "./pages/FormAdd";
import DetailPage from "./pages/DetailPage";
import history from "./history";

import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/items";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/add" component={FormAdd}></Route>
            <Route path="/detail-item" component={DetailPage}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
