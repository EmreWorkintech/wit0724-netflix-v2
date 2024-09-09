import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Browse from "./pages/Browse";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
