import React from "react";

const Login = (props) => {
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={props.setLogin}>Logout</button>
    </div>
  );
};

export default Login;
