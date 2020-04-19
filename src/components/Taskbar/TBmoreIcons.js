import React from 'react';
import styled from 'styled-components';

const MoreIconsStyle = styled.div`
    display: ${p => p.active ? 'grid' : 'none'};
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
    text-align: center;
    bottom: 100%;
    padding: 15px;
    background: ${p => p.darkTheme ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .35)' };
`;

export default function(props) {
    return <MoreIconsStyle {...props}>No More Icons</MoreIconsStyle>
}
