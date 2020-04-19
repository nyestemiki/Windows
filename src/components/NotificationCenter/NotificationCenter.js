import React, { useState } from 'react';
import NotificationCenterStyle, { ManageNotifications, Handlers, Handler } from '../styles/NotificationCenterStyles';
import NCnotifications from './NCnotifications';
import NCcontrols from './NCcontrols';

export default function({ active, theme }) {
    const [notifications] = useState([]);
    const [controlsExpanded, setControlsExpanded] = useState(false);

    function toggleControlExpansion() {
        setControlsExpanded(!controlsExpanded);
    }

    return (
        <NotificationCenterStyle active={active}>
            <ManageNotifications><span>Manage Notifications</span></ManageNotifications>
            <NCnotifications notifications={notifications}/>
            <Handlers>
                <Handler onClick={toggleControlExpansion}>Expand</Handler>
                <Handler hide={!notifications.length}>Clear all notifications</Handler>
            </Handlers>
            <NCcontrols theme={theme} expanded={controlsExpanded}/>
        </NotificationCenterStyle>
    )
}
