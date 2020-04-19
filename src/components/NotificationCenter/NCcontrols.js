import React from 'react';
import { ControlsStyle } from '../styles/NotificationCenterStyles';
import NCcontrol from './NCcontrol';

export default function({ expanded, theme }) {
    const controls = [
        {name: 'Bluetooth', icon: 'bluetooth', clickable: true}, 
        {name: 'Focus Assist', icon: 'moon', clickable: true}, 
        {name: 'All Settings', icon: 'settings', clickable: false}, 
        {name: 'Night Light', icon: 'sun', clickable: true}, 
        {name: 'Battery Saver', icon: '', clickable: true}, 
        {name: 'Update', icon: '', clickable: false}, 
        {name: 'Whatever', icon: '', clickable: true}, 
    ];
 
    return (
        <ControlsStyle>
            {controls
                .slice(0, expanded ? controls.length-1 : 4)
                .map(control => <NCcontrol {...control} theme={theme}/>)}
        </ControlsStyle>
    );
}
