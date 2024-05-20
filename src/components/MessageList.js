import React from 'react'
import { Link } from 'react-router-dom'

const MessageList = ({ theme }) => {
    return (
        <ol className={`list-group col-12 col-md-6 text-bg-${theme} border border-end`} data-bs-theme={theme} style={{ height: '100vh', borderRadius: '0px' }}>
            <Link to={"/dashboard/chat"} >
                <li className="list-group-item active d-flex justify-content-between align-items-center">
                    <div className="ms-2 d-flex gap-2 align-items-center me-auto">
                        <div className="user-img rounded-circle bg-light" style={{ width: '5vh', height: '5vh' }}></div>
                        <div>
                            <div className="fw-bold">User</div>
                            Last Message
                        </div>
                    </div>
                    <span className="badge text-bg-primary rounded-pill">14</span>
                </li>
            </Link>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 d-flex gap-2 align-items-center me-auto">
                    <div className="user-img rounded-circle bg-light" style={{ width: '5vh', height: '5vh' }}></div>
                    <div>
                        <div className="fw-bold">User1</div>
                        Last Message
                    </div>
                </div>
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="ms-2 d-flex gap-2 align-items-center me-auto">
                    <div className="user-img rounded-circle bg-light" style={{ width: '5vh', height: '5vh' }}></div>
                    <div>
                        <div className="fw-bold">User2</div>
                        Last Message
                    </div>
                </div>
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
        </ol>
    )
}

export default MessageList