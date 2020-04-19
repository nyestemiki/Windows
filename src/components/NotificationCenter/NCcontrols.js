import React from 'react';
import { ControlsStyle } from '../styles/NotificationCenterStyles';
import NCcontrol from './NCcontrol';

export default function({ expanded, darkTheme, functions }) {
    const controls = [
        {name: 'Bluetooth', icon: 'bluetooth', clickable: true}, 
        {name: 'Focus Assist', icon: 'moon', clickable: true}, 
        {name: 'All Settings', icon: 'settings', clickable: false}, 
        {name: 'Night Light', icon: 'sun', clickable: true, controlFunction: functions.toggleNightLight}, 
        {name: 'Theme', icon: 'theme', clickable: false, controlFunction: functions.toggleDarkTheme},
    ];
 
    return (
        <ControlsStyle>
            {controls
                .slice(0, expanded ? controls.length : 4)
                .map(control => <NCcontrol {...control} darkTheme={darkTheme} key={control.name}/>)}
        </ControlsStyle>
    );
}
