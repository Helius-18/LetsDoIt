// Messages.js
import React, { useContext } from 'react';
import MessageList from './MessageList';
import MessageSpace from './MessageSpace';
import { AppContext } from '../../AppContext';

const Messages = () => {
    const { theme} = useContext(AppContext);
    
    return (
        <div className='d-flex'>
            <MessageList theme={theme}/>
            <MessageSpace theme={theme}/>
        </div>
    );
};

export default Messages;