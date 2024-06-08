import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext';

const BottomNavbar = () => {
  const {theme} = useContext(AppContext);

  return (
    <nav className={`navbar navbar-${theme} bg-${theme} fixed-bottom bottom-nav d-md-none d-flex justify-content-around`} style={{ height: '6vh' }}>
      <Link to={""} className="text-decoration-none nav-link text-light">
        <i className="bi bi-house"></i>
      </Link>
      <Link to={"chats"} className="text-decoration-none nav-link text-light">
        <i className="bi bi-envelope"></i>
      </Link>
      <Link to={"account"} className="text-decoration-none nav-link text-light">
          <i className="bi bi-person"></i>
      </Link>
      <Link to={"settings"} className="text-decoration-none nav-link text-light">
          <i className="bi bi-gear"></i>
      </Link>
    </nav>
  )
}

export default BottomNavbar