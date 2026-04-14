/* eslint-disable */
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import { memo } from "react";
import "./Notifications.css";

const Notifications = memo(({ id, type, html, value, markAsRead }) => {

    console.log('notifications', value);

    return (
        <li key={id} className="notifications-container" onClick={() => { markAsRead(id) }}>
            {markAsRead && (
                <span>
                    {value}
                </span>
            )}
        </li>
    );
})

export default Notifications;