import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Browse from "./pages/Browse";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState();

  return (
    <>
      <Switch>
        <Route path="/browse">
          <Browse activeProfile={activeProfile} />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
