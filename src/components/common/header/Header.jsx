import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          <h3 className="headerTitle">Coachify</h3>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/announcements'>Announcements</Link>
            </li>
            <li>
              <Link to='/team'>Lectures/Assignments/PYQ</Link>
            </li>
            
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Feedback</Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
