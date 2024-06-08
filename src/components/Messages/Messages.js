// Messages.js
import React from 'react';
import MessageList from './MessageList';
import MessageSpace from './MessageSpace';

const Messages = ({ theme }) => {
    return (
        <div className='d-flex'>
            <MessageList theme={theme}/>
            <MessageSpace theme={theme}/>
        </div>
    );
};

export default Messages;