import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home data="Data" />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
