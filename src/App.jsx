import "./App.css";
import { useState } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const changeLoginState = () => {
    if (isLoggedIn) setLogin(false);
    else setLogin(true);
  };
  return (
    <div className="App">
      {isLoggedIn === true ? (
        <Login setLogin={changeLoginState} />
      ) : (
        <Logout setLogin={changeLoginState} />
      )}
    </div>
  );
}

export default App;
