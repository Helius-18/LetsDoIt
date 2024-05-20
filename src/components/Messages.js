// Messages.js
import React from 'react';

const Messages = ({ theme }) => {
    return (
        <div className=''>
            <ol class={`list-group w-100 list-group-numbered`}>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
        </ol>
        </div>
    );
};

export default Messages;