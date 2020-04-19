import React from 'react';
import VolumeStyle, { Origin, SoundControls, Speaker, Slider, Percentage } from './styles/VolumeStyles';

export default function({ active, darkTheme }) {
    return (
        <VolumeStyle active={active} darkTheme={darkTheme}>
            <Origin darkTheme={darkTheme}>Speakers</Origin>
            <SoundControls>
                <Speaker darkTheme={darkTheme}/>
                <Slider percentage={50}/>
                <Percentage>50%</Percentage>
            </SoundControls>
        </VolumeStyle>
    );
}
