import React, { useState } from 'react';
import { ControlStyle } from '../styles/NotificationCenterStyles';

export default function({ name, icon, clickable, darkTheme, controlFunction }) {
    const [active, setStatus] = useState(false);

    function toggle() {
        if (controlFunction) {
            controlFunction();
        }

        if (clickable) {
            setStatus(!active);
        }
    }

    return (
        <ControlStyle active={active} onClick={toggle}>
            {!icon && <span>icon</span>}
            {icon && darkTheme && <img alt={icon} src={`/images/icons/NotificationCenter/${icon}_white.png`}/>}
            {icon && !darkTheme && <img alt={icon} src={`/images/icons/NotificationCenter/${icon}_black.png`}/>}

            <span>{name}</span>
        </ControlStyle>
    );
}
