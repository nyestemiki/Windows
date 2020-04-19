import React, { useState } from 'react';
import AppStyle from './styles/AppStyles';
import NightLight from './styles/NightLight';
import Taskbar from './Taskbar/Taskbar';
import NotificationCenter from './NotificationCenter/NotificationCenter';

export default function() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [nightLight, setNightLight] = useState(false);
  const [notificationCenterActive, setNotificaionCenter] = useState(false);

  function toggleDarkTheme() {
    setDarkTheme(!darkTheme);
  }

  function toggleNightLight() {
    setNightLight(!nightLight);
  }

  function toggleNotificationCenter() {
    setNotificaionCenter(!notificationCenterActive);
  }

  return (
    <AppStyle>
      <NightLight active={nightLight}/>
      <NotificationCenter 
        active={notificationCenterActive} 
        darkTheme={darkTheme} 
        functions={{
          toggleDarkTheme,
          toggleNightLight
        }}/>
      <Taskbar toggle={toggleNotificationCenter} darkTheme={darkTheme}/>
    </AppStyle>
  );
}
