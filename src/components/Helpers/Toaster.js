import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext';

const Toaster = () => {
  const {toaster, showToaster} = useContext(AppContext);

  useEffect(()=>{
    if(toaster?.showToaster) {
      setTimeout(() => {
        toaster.setShowToaster(false);
      }, 2000);
    }
  },[toaster])

  return (
    showToaster ? (
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div className={`toast align-items-center text-bg-${toaster?.state} border-0 show`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {toaster?.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    ) : (<></>)
  )
}

export default Toaster