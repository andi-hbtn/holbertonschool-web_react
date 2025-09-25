// task_2/dashboard/NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
    const color = type === 'urgent' ? 'red' : 'blue';

    if (html) {
        return (
            <li
                data-notification-type={type}
                style={{ color }}
                dangerouslySetInnerHTML={html}
            />
        );
    }

    return (
        <li data-notification-type={type} style={{ color }}>
            {value}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: null,
};

export default NotificationItem;
