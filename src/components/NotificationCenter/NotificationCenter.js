import React, { useState } from 'react';
import NotificationCenterStyle, { ManageNotifications, Handlers, Handler } from '../styles/NotificationCenterStyles';
import NCnotifications from './NCnotifications';
import NCcontrols from './NCcontrols';

export default function({ active }) {
    const [notifications] = useState([]);

    return (
        <NotificationCenterStyle active={active}>
            <ManageNotifications>Manage Notifications</ManageNotifications>
            <NCnotifications notifications={notifications}/>
            <Handlers>
                <Handler>Expand</Handler>
                <Handler hide={!notifications.length}>Clear all notifications</Handler>
            </Handlers>
            <NCcontrols/>
        </NotificationCenterStyle>
    )
}
