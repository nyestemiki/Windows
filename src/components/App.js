import React, { useState } from 'react';
import AppStyle from './styles/AppStyles';
import Taskbar from './Taskbar';
import NotificationCenter from './NotificationCenter/NotificationCenter';

export default function() {
  const [notificationCenterActive, setNotificaionCenter] = useState(true);

  function toggleNotificationCenter() {
    setNotificaionCenter(!notificationCenterActive);
  }

  return (
    <AppStyle>
      <NotificationCenter active={notificationCenterActive}/>
      <Taskbar toggle={toggleNotificationCenter}/>
    </AppStyle>
  );
}
