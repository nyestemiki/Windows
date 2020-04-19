import styled, { keyframes } from 'styled-components';


const IconTitleAnim = keyframes`
    0% {
        opacity: 0;
    } 50% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
`;

const IconStyle = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    padding: 1vh;
    width: ${p => p.wide ? "auto" : "5vh"};
    position: relative;
    user-select: none;
    
    img {
        height: 100%;
    }

    /* Tag */
    &::before {
        display: none;
        position: absolute;
        bottom: 100%;
        content: '${p => p.iconTitle}';
        background: white;
        color: black;
        padding: 3px 6px;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        border: 1px solid grey;
        box-shadow: 3px 3px 4px rgba(0, 0, 0, .35);
        animation: ${IconTitleAnim} 1.3s;
        font-size: .8rem;
        font-weight: 100;
    }

    &:hover {
        background: rgba(255, 255, 255, .2);
        
        &::before {
            display: block;
        }
    }
`;

export default IconStyle;
