import React from 'react';
import IconStyle from './styles/IconStyles';

export default function({ name, iconTitle, darkTheme, app, onClickFunction, children }) {
    let title = name;
    
    if (!app) {
        title += darkTheme ? '_white' : '_black';
    }

    title += '.png';

    return (
        <IconStyle iconTitle={iconTitle}>
            <img alt={name} src={`/images/icons/${title}`} onClick={onClickFunction}/>
            {children}
        </IconStyle>
    )
}
