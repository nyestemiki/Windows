import styled, { keyframes } from 'styled-components';

const NightLightAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const NightLight = styled.div`
    display: ${p => p.active ? 'block' : 'none'};
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 175, 0, .25);
    z-index: 10000;
    user-select: none;
    pointer-events: none;
    animation: ${NightLightAnimation} 2.5s;
`;

export default NightLight;