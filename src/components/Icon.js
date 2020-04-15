import React from 'react';
import IconStyle from './styles/IconStyles';

export default function({ name, iconTitle, theme, app }) {
    return (
        <IconStyle iconTitle={iconTitle}>
            {/* APPS */}
            {app && <img alt={name} src={`/images/icons/${name}.png`} />}

            {/* Icons */}
            {/* Dark theme */}
            {!app && theme === 'dark' && 
                <img alt={name} src={`/images/icons/${name}_white.png`} />
            }
            {/* Light theme */}
            {!app && theme === 'light' &&
                <img alt={name} src={`/images/icons/${name}_black.png`} />
            }
        </IconStyle>
    )
}
