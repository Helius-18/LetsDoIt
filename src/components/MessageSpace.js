import React from 'react'
import { Link } from 'react-router-dom'

const MessageSpace = ({ theme }) => {
    return (
        <div className={`col-12 col-md-6 d-flex flex-column text-bg-${theme}`} data-bs-theme={theme} style={{ height: '100vh' }}>
            <div className="username">
                <li className="list-group-item p-2 d-flex justify-content-between align-items-center border-bottom border-secondary-subtle">
                    <div className="ms-2 d-flex gap-2 align-items-center me-auto">
                        <Link to={{
                            pathname: "/dashboard/chats",
                            state: { theme: theme }
                        }} className='d-block d-md-none'><i className="bi bi-arrow-left"></i></Link>
                        <div className="user-img rounded-circle bg-light" style={{ width: '5vh', height: '5vh' }}></div>
                        <div>
                            <div className="fw-bold">User1</div>
                            Online
                        </div>
                    </div>
                </li>
            </div>
            <div className="flex-grow-1 p-2 d-flex flex-column overflow-auto">
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-secondary px-2 py-1 m-1 align-self-start rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
                    <div className="message bg-primary px-2 py-1 m-1 align-self-end rounded-pill" style={{ width: 'max-content' }}>
                        hi, this is test message
                    </div>
            </div>
            <div className="p-2 sticky-sm-bottom">
                <div className="input-group">
                    <input type="text" placeholder='Type a message' className="form-control p-3" aria-label="message" />
                    <span className="input-group-text"><i className="bi bi-send px-2"></i></span>
                </div>
            </div>
        </div>
    )
}

export default MessageSpace