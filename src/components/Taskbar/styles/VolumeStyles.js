import styled from 'styled-components';

const VolumeStyle = styled.div`
    display: ${p => p.active ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    bottom: 100%;
    right: 0;
    padding: 15px;
    background: ${p => p.darkTheme ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .35)' };
`;

const Origin = styled.div`
    font-size: 1.25rem;
    padding-bottom: 10px;
    color: ${p => p.darkTheme ? 'white' : 'black'};
    font-weight: 100;
`;

const SoundControls = styled.div`
    display: flex;
    place-items: center;
`;

const Speaker = styled.div`
    content: url("/images/icons/sound${p => p.darkTheme ? '_white' : '_black'}.png");
    position: relative;

    /* Tag */
    &::before {
        display: block;
        content: 'Toggle Mute';
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 10px;
        height: 20px;
        background: rgba(0, 0, 0, .5);
        z-index: 100;
    }
`;

const Slider = styled.div`
    width: 250px;
    height: 3px;
    background: rgba(255, 255, 255, .5);
    margin: 0 15px;
    position: relative;

    /* Coverage */
    &::before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${p => p.percentage * 250 / 100}px;
        height: 3px;
        background: red;
    }

    /* Handle */
    &::after {
        display: block;
        content: '';
        position: absolute;
        top: -9px;
        left: ${p => p.percentage * 250 / 100}px;
        height: 21px;
        width: 6px;
        background: red;
        border-radius: 10px;
    }

    &:hover {
        &::after {
            background: white;
        }
    }
`;

const Percentage = styled.div`

`;


export default VolumeStyle;
export  { Origin, SoundControls, Speaker, Slider, Percentage };
