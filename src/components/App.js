import React, { useState } from 'react';
import AppStyle from './styles/AppStyles';
import NightLight from './styles/NightLight';
import Taskbar from './Taskbar';
import NotificationCenter from './NotificationCenter/NotificationCenter';

export default function() {
  const [theme] = useState('dark');
  const [nightLight, setNightLight] = useState(false);
  const [notificationCenterActive, setNotificaionCenter] = useState(true);

  function toggleNotificationCenter() {
    setNotificaionCenter(!notificationCenterActive);
  }

  return (
    <AppStyle>
      <NightLight active={nightLight}/>
      <NotificationCenter active={notificationCenterActive} theme={theme}/>
      <Taskbar toggle={toggleNotificationCenter} theme={theme}/>
    </AppStyle>
  );
}
