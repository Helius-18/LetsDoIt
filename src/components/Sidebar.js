// Sidebar.js
import React from 'react';
import BottomNavbar from './BottomNavbar';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = ({ theme }) => {
  return (
    <div className="d-flex" data-bs-theme={theme}>
      <div className={`text-bg-${theme} position-sticky top-0 d-none d-md-block border-end`} style={{ height: '100vh', width: '250px' }}>
        <div className="container h-100">
          <div className="pt-3 h-100">
            <div className="d-flex flex-column h-100 gap-3">
              <div>
                <h5>Lets Make It</h5>
              </div>
              <div className="flex-shrink-0 d-flex flex-column gap-3">
                <Link className='text-decoration-none link-light' to={""}>
                  <li className={`list-group-item bg-${theme} list-group-item-action`}>
                    <i className="bi bi-house"></i> Home
                  </li>
                </Link>
                <Link className='text-decoration-none link-light' to={"messages"}>
                  <li className={`list-group-item bg-${theme} list-group-item-action`}>
                    <i className="bi bi-envelope"></i> Messages
                  </li>
                </Link>
                <Link className='text-decoration-none link-light' to={"settings"}>
                  <li className={`list-group-item bg-${theme} list-group-item-action`}>
                    <i className="bi bi-gear"></i> Settings
                  </li>
                </Link>
              </div>
              <div className="mt-auto mb-3 d-flex flex-column gap-3">
                <Link className='text-decoration-none link-light' to={"account"}>
                  <li className={`list-group-item bg-${theme} list-group-item-action`}>
                    <i className="bi bi-person"></i> Account
                  </li>
                </Link>
                <li className={`list-group-item bg-${theme} list-group-item-action`}>
                  <i className="bi bi-gem"></i> About
                </li>
              </div>
            </div>
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
