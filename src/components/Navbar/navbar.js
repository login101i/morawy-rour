import React from 'react'
import './navbar.scss'
import logo from '../../logo koło gospodyń wiejskich.png'

export default function navbar() {
    return (
      <nav className="navbar">
          <img src={logo} alt="city tours logo"/>
          <ul className="nav-links">
              <li>
                  <a href="/" className="nav-link"> Strona Domowa</a>
              </li>
                <li>
                  <a href="/" className="nav-link">O nas</a>
              </li>
                <li>
                    <a href="/" className="nav-link">Podróże</a>
                </li>
          </ul>
      </nav>
    )
}
