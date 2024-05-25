import React from 'react'

const Account = ({theme}) => {
  return (
    <div className={`d-flex gap-4 flex-column align-items-center text-bg-${theme}`} style={{ height : '100vh'}}>
        <div className="buy-currency col-10 text-end mt-3">
            <button type="button" className="btn btn-outline-secondary">Buy <i className="bi bi-boxes"></i></button>
        </div>
        <div className="user-img rounded-circle bg-light mt-3 shadow-lg p-3 bg-body-tertiary rounded" style={{ width: '15vh', height: '15vh' }}></div>
        <div className="username">
            <h3>Helius</h3>
        </div>
        <div className="credit">
            <span className="text-body-secondary">Available Balance : </span><span> 130 </span><span><i className="bi bi-boxes"></i></span>
        </div>
        <hr className="text-light col-10"/>
        <div>
            <h5 className="text-body-secondary">Transaction History</h5>
        </div>
        <div className="transactions d-flex gap-3 flex-column col-9">
            <div className="transaction d-flex justify-content-between align-items-center bg-body-secondary rounded p-2">
                <div className="d-flex flex-row">
                    <div className="user-img rounded-circle bg-light shadow-lg text-center d-flex align-items-center justify-content-center bg-body-tertiary rounded" style={{ width: '5vh', height: '5vh' }}>
                        <i className="bi bi-arrow-down"></i>
                    </div>
                    <div className="detail ms-3">
                        <h6>Payment Received</h6>
                        <div className="itestamp text-body-secondary">
                            May 25, 2024
                        </div>
                    </div>
                </div>
                <div>
                    <div className="amount p-2">
                        <span>+</span><span> 10 </span><span><i className="bi bi-boxes"></i></span>
                    </div>
                </div>
            </div>

            <div className="transaction d-flex justify-content-between align-items-center bg-body-secondary rounded p-2">
                <div className="d-flex flex-row">
                    <div className="user-img rounded-circle bg-light shadow-lg text-center d-flex align-items-center justify-content-center bg-body-tertiary rounded" style={{ width: '5vh', height: '5vh' }}>
                        <i className="bi bi-arrow-up"></i>
                    </div>
                    <div className="detail ms-3">
                        <h6>Payment Sent</h6>
                        <div className="itestamp text-body-secondary">
                            May 25, 2024
                        </div>
                    </div>
                </div>
                <div>
                    <div className="amount p-2">
                        <span>-</span><span> 3 </span><span><i className="bi bi-boxes"></i></span>
                    </div>
                </div>
            </div>

            <div className="transaction d-flex justify-content-between align-items-center bg-body-secondary rounded p-2">
                <div className="d-flex flex-row">
                    <div className="user-img rounded-circle bg-light shadow-lg text-center d-flex align-items-center justify-content-center bg-body-tertiary rounded" style={{ width: '5vh', height: '5vh' }}>
                        <i className="bi bi-arrow-down"></i>
                    </div>
                    <div className="detail ms-3">
                        <h6>Subscription</h6>
                        <div className="itestamp text-body-secondary">
                            May 25, 2024
                        </div>
                    </div>
                </div>
                <div>
                    <div className="amount p-2">
                        <span>+</span><span> 123 </span><span><i className="bi bi-boxes"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account