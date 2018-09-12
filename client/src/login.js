import React from "react";
import "./login.css";

const Login = ()=>{
  return (
    <React.Fragment>
    <img src="https://user-images.githubusercontent.com/36166288/45061767-924b3300-b0ae-11e8-93fc-8e935fec045a.png" class="mainIcon" alt="icon">
    <div>
      <input class="username" placeholder="username"> </input>
      <input class="password" placeholder="password"> </input>
    </div>
    <div>
  <button id="loginbutt" >
  Log in
  </button>
    </div> </React.Fragment> );
};
export default Login;
