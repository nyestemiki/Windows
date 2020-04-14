import React from 'react';
import IconStyle from './styles/IconStyles';

export default function({ name }) {
    return (
        <IconStyle>
            <img alt={name} src={`/images/icons/${name}`} />
        </IconStyle>
    )
}
