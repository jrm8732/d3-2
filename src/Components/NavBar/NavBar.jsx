import React, { Component } from 'react'

import './NavBar.css'
 class NavBar extends Component {
  

  render() {
    

    return (
      <header className='NavBar-main'>
        <div className='title'>
            <h1>Opioid Abuse Stats and Deaths by State</h1>
        </div>
          <nav>
            Home
          </nav>
          <nav>
              About
          </nav>
          <nav>
              Contact
          </nav>
      </header>
    )
  }
}
export default NavBar