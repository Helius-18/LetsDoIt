import React from 'react'

const BottomNavbar = ({ theme }) => {
  return (
    <nav className={`navbar navbar-${theme} bg-${theme} fixed-bottom bottom-nav d-md-none d-flex justify-content-around`} style={{height : '6vh'}}>
        <a className="nav-link text-light" href="#">
            <i className="bi bi-house"></i>
        </a>
        <a className="nav-link text-light" href="#">
            <i className="bi bi-envelope"></i>
        </a>
        <a className="nav-link text-light" href="#">
            <i className="bi bi-person"></i>
        </a>
    </nav>
  )
}

export default BottomNavbar