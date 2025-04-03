import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";


export default function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button 
            style={{
                position: 'absolute',
                top: 20,
                right: 20,
                border: 'none',
                backgroundColor: 'beige',
                cursor: 'pointer',
                }}
                aria-label="Close"
                onClick={handleButtonClick}
                >x</button>
                <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />

                </ul>
        </div>
    )
}