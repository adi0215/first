import React from "react";
import "./Components.css";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="nav" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'rgb(177, 167, 167)' }}>
      <ul>
        <li>
          {/* <Link className="title" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.title}</Link> */}
          <a className="title" href="#" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.title}</a>
        </li>
        <li>
          {/* <Link className="home" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.home}</Link> */}
          <a className="home" href="#" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.home}</a>
        </li>
        <li>
          {/* <Link className="about" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.about}</Link> */}
          {/* <a className="about" href="/about" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.about}</a> */}
        </li>
        <li>
          <a className="login" href="#" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.login}</a>
        </li>
        <li className="drkMode">
          <button className="drkModeBtn" onClick={props.toggleMode}>Dark mode</button>
        </li>
      </ul>
    </div>
  );
}
