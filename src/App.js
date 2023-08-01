import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NevBar from "./components/NevBar";
import routes from "./routes";


function App() {
  return (
    <Router>
      <NevBar />
      <div className="container mt-3">
      <Switch>
        {routes.map((route) => {
          return <Route key={route.path} exact path={route.path} component={route.component} />;
        })}
      </Switch>
      </div>
    </Router>
  );
}


export default App;
