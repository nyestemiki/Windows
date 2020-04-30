import React, { useState } from 'react';
import NotificationCenterStyle, { ManageNotifications, Handlers, Handler } from '../styles/NotificationCenterStyles';
import NCnotifications from './NCnotifications';
import NCcontrols from './NCcontrols';

export default function({ active, darkTheme, functions }) {
    const [notifications] = useState([]);
    const [controlsExpanded, setControlsExpanded] = useState(false);

    function toggleControlExpansion() {
        setControlsExpanded(!controlsExpanded);

        document.querySelector("#expandedBtn").textContent = controlsExpanded ? 'Expand' : 'Collapse';
    }

    return (
        <NotificationCenterStyle active={active} darkTheme={darkTheme}>
            <ManageNotifications><span>Manage Notifications</span></ManageNotifications>
            <NCnotifications notifications={notifications}/>
            <Handlers>
                <Handler onClick={toggleControlExpansion} id="expandedBtn">Expand</Handler>
                <Handler hide={!notifications.length}>Clear all notifications</Handler>
            </Handlers>
            <NCcontrols darkTheme={darkTheme} expanded={controlsExpanded} functions={functions}/>
        </NotificationCenterStyle>
    )
}
