import React from "react";
import "./Components.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="nav" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'rgb(177, 167, 167)' }}>
      <ul>
        <li>
          <Link className="title" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.title}</Link>
        </li>
        <li>
          <Link className="home" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.home}</Link>
        </li>
        <li>
          <Link className="about" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(255, 221, 0)' }}>{props.about}</Link>
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
