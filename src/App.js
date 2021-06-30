import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import AllCities from "pages/all_cities";
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
          <Route path="/cities">
            <AllCities />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
