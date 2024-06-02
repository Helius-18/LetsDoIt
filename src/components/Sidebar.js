// Sidebar.js
import React from 'react';
import BottomNavbar from './BottomNavbar';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = ({ theme }) => {
  return (
    <div className={`d-flex text-bg-${theme}`} data-bs-theme={theme}>
      <div className={`text-bg-${theme} text-bg-${theme} d-none d-md-block position-sticky top-0 border-end`} style={{ height: '100vh', width: '250px' }}>
        <div className="d-flex flex-column mb-3 h-100">

          <div className="header">
            <div className="d-flex justify-content-between p-3 align-items-center">
              <div className="header">
                <h5>Lets Make It</h5>
              </div>
            </div>
          </div>

          <div className="d-flex p-2 flex-column">
            <Link to={""} className="menu-item hover-item w-100 p-2 link-light rounded text-decoration-none">
              <div className="d-flex flex-column">
                <div className="header d-flex gap-2 align-items-center">
                  <i className="bi bi-house"></i> Home
                </div>
              </div>
            </Link>
            <Link to={"messages"} className="menu-item hover-item w-100 p-2 link-light rounded text-decoration-none">
              <div className="d-flex flex-column">
                <div className="header d-flex gap-2 align-items-center">
                  <i className="bi bi-envelope"></i> Messages
                </div>
              </div>
            </Link>
            <Link to={"settings"} className="menu-item hover-item w-100 p-2 link-light rounded text-decoration-none">
              <div className="d-flex flex-column">
                <div className="header d-flex gap-2 align-items-center">
                  <i className="bi bi-gear"></i> Settings
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-auto d-flex p-2 flex-column">
            <Link to={"account"} className="menu-item hover-item w-100 p-2 link-light rounded text-decoration-none">
              <div className="d-flex flex-column">
                <div className="header d-flex gap-2 align-items-center">
                  <i className="bi bi-person"></i> Account
                </div>
              </div>
            </Link>
            <Link className="menu-item hover-item w-100 p-2 link-light rounded text-decoration-none">
              <div className="d-flex flex-column">
                <div className="header d-flex gap-2 align-items-center">
                  <i className="bi bi-gem"></i> About
                </div>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
      <div className="w-100">
        <Outlet />
      </div>
      <BottomNavbar theme={theme} />
    </div>
  );
};

export default Sidebar;
