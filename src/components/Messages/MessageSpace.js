import React from 'react'
import { Link } from 'react-router-dom'

const MessageSpace = ({ theme }) => {
    return (
        <div className={`w-100 text-bg-${theme} position-relative`} data-bs-theme={theme}>
            <div className="w-100 d-flex align-items-start flex-column" style={{ height: '100vh' }}>
                <div className="w-100 chat-header position-sticky top-0 p-3 align-items-center border-bottom">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div className="user d-flex align-items-center gap-3">
                            <Link to={{
                                pathname: "/dashboard/chats",
                                state: { theme: theme }
                            }} className='d-block d-md-none'><i className="bi bi-arrow-left h3"></i></Link>
                            <div className="profile">
                                <div className="user-img rounded-circle bg-light shadow-lg p-3 bg-body-tertiary" style={{
                                    width: '6vh', height: '6vh'
                                }}></div>
                            </div>
                            <div className="username-details">
                                <div className="username">
                                    <h5>Helius</h5>
                                </div>
                                <div className="status text-body-secondary">
                                    online
                                </div>
                            </div>
                        </div>

                        <div className="settings">

                            <div className="dropdown">
                                <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots-vertical h5"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item d-flex gap-2" type="button">View Profile</button></li>
                                    <li><button className="dropdown-item d-flex gap-2" type="button"><i className="bi bi-bell-slash"></i>
                                        Mute</button></li>
                                    <li><button className="dropdown-item d-flex gap-2" type="button"><i className="bi bi-person-x-fill"></i>
                                        Block</button></li>
                                    <li><button className="dropdown-item text-danger d-flex gap-2" type="button"><i className="bi bi-trash"></i>
                                        Clear chat</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 flex-grow-1 p-2 d-flex flex-column overflow-auto">
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary p-2 m-1 align-self-start rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary p-2 m-1 align-self-end rounded" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                </div>

                <div className="w-100 mt-auto p-2">
                    <div className="input-group">
                        <input type="text" placeholder='Type a message' className="form-control p-3" aria-label="message" />
                        <span className="input-group-text"><i className="bi bi-send px-2"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSpace