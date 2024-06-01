import React from 'react'

const Settings = ({ theme }) => {
  return (
    <div className="container pt-3  d-flex flex-column gap-2" style={{ height: '100vh' }}>
      <div className="d-flex bg-body-secondary rounded p-4">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            
            <div className="user-img rounded-circle bg-light shadow-lg p-3 bg-body-tertiary rounded" style={{ width: '7vh', height: '7vh' }}></div>
            
            <div className="d-flex flex-column">
              <div className="header">
                <h4>Helius</h4>
              </div>
              <div className="subheader text-body-secondary">
                @Helius0_0
              </div>
            </div>
          </div>

          <div>
            <button type="button" className="btn btn-outline-secondary">Edit Profile</button>
          </div>

        </div>
      </div>

      <div className="bg-body-secondary rounded p-4">

        <div className="d-flex flex-column">
          <div className="header">
            <h5>Settings</h5>
          </div>
          <div className="subheader text-body-secondary">
            Customize your account preferences.
          </div>
        </div>

        <hr />

        <div className="d-flex flex-wrap justify-content-between gap-5 p-3">

          <div className="d-flex gap-1 flex-column">
            <div className="setting-header">
              <h5>Notifications</h5>
            </div>
            <div className="setting-subheader text-body-secondary">
              Manage your notification preferences.
            </div>
            <div className="form-check form-switch ms-2 mt-2 d-flex flex-no-wrap gap-3 align-items-center">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ transform: 'scale(1.3)' }} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Email Notifications</label>
            </div>
          </div>

          <div className="d-flex gap-1 flex-column">
            <div className="setting-header">
              <h5>Privacy</h5>
            </div>
            <div className="setting-subheader text-body-secondary">
              Control your privacy settings.
            </div>
            <div className="form-check form-switch ms-2 mt-2 d-flex flex-no-wrap gap-3 align-items-center">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ transform: 'scale(1.3)' }} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Public Profile</label>
            </div>
          </div>

          <div className="d-flex gap-1 flex-column">
            <div className="setting-header">
              <h5>Account</h5>
            </div>
            <div className="setting-subheader text-body-secondary">
              Manage your account settings.
            </div>
            <div>
              <button type="button" className="btn btn-outline-secondary">Change Password</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings