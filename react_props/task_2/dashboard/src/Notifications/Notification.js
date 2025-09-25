import React from 'react';
import NotificationItem from './NotificationItem';

const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
];

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                {notificationsList.map((notif) => (
                    <NotificationItem
                        key={notif.id}
                        type={notif.type}
                        value={notif.value}
                        html={notif.html}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
