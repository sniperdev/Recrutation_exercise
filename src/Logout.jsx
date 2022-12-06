import React from "react";

const Logout = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={props.setLogin}>Login</button>
    </div>
  );
};

export default Logout;
