import styled from 'styled-components';

const ClockStyle = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    font-size: 1.6vh;
    overflow: hidden;
    white-space: nowrap;

    color: ${p => p.theme === 'light' ? 'black' : 'white'};
`;

export default ClockStyle;
