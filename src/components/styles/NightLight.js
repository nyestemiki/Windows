import styled from 'styled-components';

const NightLight = styled.div`
    display: ${p => p.active ? 'block' : 'none'};
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 175, 0, .25);
    z-index: 10000;
    user-select: none;
    pointer-events: none;
`;

export default NightLight;