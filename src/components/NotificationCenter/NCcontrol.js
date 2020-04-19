import React, { useState } from 'react';
import { ControlStyle } from '../styles/NotificationCenterStyles';

export default function({ name, icon, clickable, theme }) {
    const [active, setStatus] = useState(false);

    function toggle() {
        if (clickable) {
            setStatus(!active);
        }
    }

    return (
        <ControlStyle active={active} onClick={toggle}>
            {!icon && <span>icon</span>}
            {icon && theme === "dark" && <img alt={icon} src={`/images/icons/NotificationCenter/${icon}_white.png`}/>}
            {icon && theme === "light" && <img alt={icon} src={`/images/icons/NotificationCenter/${icon}_black.png`}/>}

            <span>{name}</span>
        </ControlStyle>
    );
}
