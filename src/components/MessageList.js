import React from 'react'
import { Link } from 'react-router-dom'

const MessageList = ({ theme }) => {
    return (
        <div className={`col-12 col-md-4 text-bg-${theme} border-end`} style={{ height: '100vh' }}>
            <div className="header">
                <div className="d-flex justify-content-between p-4 align-items-center">
                    <div className="header">
                        <h4>Messages</h4>
                    </div>
                    <button className="search btn">
                        <i className="bi bi-search h5"></i>
                    </button>
                </div>
            </div>

            <div className="chats d-flex flex-column gap-1 px-2">
                <Link to={"/chat"} className="chat-item hover-item w-100 d-flex align-items-center justify-content-between link-light p-3 rounded" style={{ textDecoration: 'none' }}>

                    <div className="d-flex align-items-center gap-3">
                        <div className="user-img rounded-circle bg-light shadow-lg p-3 bg-body-tertiary" style={{
                            width: '6vh',
                            height: '6vh'
                        }}></div>

                        <div className="d-flex flex-column">
                            <div className="header">
                                <h5>Olivia Davis</h5>
                            </div>
                            <div className="subheader text-body-secondary">
                                Did you get the report I sent?
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="timestamp">
                            9:25 pm
                        </div>
                        <div className="unread-count mt-1">
                            <span className="badge text-bg-primary rounded-pill">5</span>
                        </div>
                    </div>
                </Link>

                <Link to={"/chat"} className="chat-item hover-item w-100 d-flex align-items-center justify-content-between link-light p-3 rounded active" style={{ textDecoration: 'none' }}>

                    <div className="d-flex align-items-center gap-3">
                        <div className="user-img rounded-circle bg-light shadow-lg p-3 bg-body-tertiary" style={{
                            width: '6vh',
                            height: '6vh'
                        }}></div>

                        <div className="d-flex flex-column">
                            <div className="header">
                                <h5>John Doe</h5>
                            </div>
                            <div className="subheader text-body-secondary">
                                you : Sounds good
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="timestamp">
                            9:25 pm
                        </div>
                        <div className="unread-count mt-1 d-none">
                            <span className="badge text-bg-primary rounded-pill">5</span>
                        </div>
                    </div>
                </Link>

                <Link to={"/chat"} className="chat-item hover-item w-100 d-flex align-items-center justify-content-between link-light p-3 rounded" style={{ textDecoration: 'none' }}>

                    <div className="d-flex align-items-center gap-3">
                        <div className="user-img rounded-circle bg-light shadow-lg p-3 bg-body-tertiary" style={{
                            width: '6vh',
                            height: '6vh'
                        }}></div>

                        <div className="d-flex flex-column">
                            <div className="header">
                                <h5>Sarah Adams</h5>
                            </div>
                            <div className="subheader text-body-secondary d-none">
                                Did you get the report I sent?
                            </div>
                            <div className="subheader typing text-primary d-block">
                                typing...
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="timestamp">
                            9:25 pm
                        </div>
                        <div className="unread-count mt-1">
                            <span className="badge text-bg-primary rounded-pill">1</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MessageList