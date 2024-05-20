import React from 'react'

const BottomNavbar = ({ theme }) => {
  return (
    <nav className={`navbar navbar-${theme} bg-${theme} fixed-bottom bottom-nav d-md-none d-flex justify-content-around`} style={{height : '6vh'}}>
        <Link to={""} className="text-decoration-none nav-link text-light">
            <i className="bi bi-house"></i>
        </Link>
        <Link to={"messages"} className="text-decoration-none nav-link text-light">
            <i className="bi bi-envelope"></i>
        </Link>
        <a className="nav-link text-light" href="#account">
            <i className="bi bi-person"></i>
        </a>
    </nav>
  )
}

export default BottomNavbar