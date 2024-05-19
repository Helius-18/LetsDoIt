import React from 'react'

const BottomNavbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-bottom bottom-nav d-md-none d-flex justify-content-around" style={{height : '6vh'}}>
        <a class="nav-link text-light" href="#">
            <i class="bi bi-house"></i>
        </a>
        <a class="nav-link text-light" href="#">
            <i class="bi bi-envelope"></i>
        </a>
        <a class="nav-link text-light" href="#">
            <i class="bi bi-person"></i>
        </a>
    </nav>
  )
}

export default BottomNavbar