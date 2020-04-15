import React from 'react';
import IconStyle from './styles/IconStyles';

export default function({ name, iconTitle, theme, app, onClickFunction }) {
    let title = name;
    
    if (!app) {
        if (theme === 'dark') {
            title += '_white';
        } else if (theme === 'white') {
            title += '_black';
        }
    }

    title += '.png';

    return (
        <IconStyle iconTitle={iconTitle}>
            <img alt={name} src={`/images/icons/${title}`} onClick={onClickFunction}/>
        </IconStyle>
    )
}
