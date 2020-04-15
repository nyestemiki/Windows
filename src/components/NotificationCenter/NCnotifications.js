import React from 'react';
import { NotificationCenterNotificationsStyle } from '../styles/NotificationCenterStyles';

export default function({ notifications }) {
    if (!notifications.length) {
        return <NotificationCenterNotificationsStyle empty>No new notifications</NotificationCenterNotificationsStyle>
    }
}
