import React from 'react'

const Settings = ({theme}) => {
  return (
    <div className={`d-flex flex-column align-items-center text-bg-dark`} style={{ height : '100vh'}}>
        <div className='user-profile d-flex mt-4 p-2 col-10'>
            <div className="profile">
                <div className="user-img rounded-circle bg-light" style={{ width: '7vh', height: '7vh' }}></div>
            </div>
            <div className="username ms-4">
                <h4>Helius</h4>
                <button className='btn btn-sm btn-outline-secondary'>Edit profile</button>
            </div>
        </div>
        <div className='settings col-10 mt-3'>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
              </div>
        </div>
    </div>
  )
}

export default Settings