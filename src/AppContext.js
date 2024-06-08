import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [showToaster, setShowToaster] = useState(false);
    const [toaster, setToaster] = useState({});
    const [theme, setTheme] = useState('dark');

    const triggerToaster = (state , message) => {
        setToaster({state : state , message : message});
        setShowToaster(true);
    }

    useEffect(()=>{
        if (showToaster) {
            setTimeout(() => {
                setShowToaster(false);
            }, 2000);
        }
    }, [showToaster])
    return (
        <AppContext.Provider value={{ toaster, triggerToaster, showToaster, setShowToaster, theme, setTheme, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider