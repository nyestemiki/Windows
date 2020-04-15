import React from 'react';
import { ControlsStyle, Control } from '../styles/NotificationCenterStyles';

export default function({ expanded }) {
    const controls = ['Bluetooth', 'Wi-Fi', 'Battery', 'All Settings', 'Screen Snippet', 'Update', 'Whatever'];
 
    return (
        <ControlsStyle>
            {controls
                .slice(0, expanded ? controls.length-1 : 4)
                .map(control => (
                <Control>
                    <span>ICON</span>
                    <span>{control}</span>
                </Control>
            ))}
        </ControlsStyle>
    );
}
