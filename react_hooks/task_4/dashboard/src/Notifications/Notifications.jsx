/* eslint-disable */
import React from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

const Notifications = ({ notifications, setNotificationList, displayDrawer = false, handleDisplayDrawer, handleHideDrawer, }) => {


    const markAsRead = (id) => {
        setNotificationList((prevState) => {

            const result = prevState.filter((prev, index) => {
                return prev.id !== id;
            });
            return [...result]
        })
    };

    return (
        <div className="notifications-container">
            <div
                className="notification-title"
                onClick={handleDisplayDrawer}
            >
                Your notifications
            </div>

            {displayDrawer && (
                <div className="notification-items">
                    {notifications.length > 0 ? (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {notifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        html={notification.html}
                                        value={notification.value}
                                        markAsRead={markAsRead}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No new notification for now</p>
                    )}

                    <button
                        aria-label="Close"
                        onClick={handleHideDrawer}
                        className="close-button"
                    >
                        <img alt="Close Button" src={closeIcon} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Notifications;